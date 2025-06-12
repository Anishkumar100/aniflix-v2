import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { dynamicTab } from '../hooks/dynamicTab'

export const ActorSearch = () => {
    const Navigate=useNavigate()
    const [searchParams] = useSearchParams()
    const actorName = searchParams.get(`actor_name`)
    const actorUrl = `https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_API_KEY}&query=${actorName}`

    console.log(actorName)
    const [actorData, setActorData] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchActor = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(actorUrl)
            if (response.ok) {
                const res = await response.json()
                setLoading(false)
                setActorData(res.results)

            }
            else {
                setLoading(false)
                throw new error(`API IS BROKEN OR SOMETHING`)
            }

        }
        catch (error) {
            console.log(error.message)
        }
    })

    useEffect(() => {
        fetchActor()
    }, [actorUrl])

    console.log(actorData)

    dynamicTab(`Results for ${actorName}`)
    return (
        <main>
            <section>
                <div>
                    <div>
                        <p className='text-4xl p-6 max-md:text-2xl max-lg:p-0 max-lg:text-center font-bold text-black dark:text-white text-start mb-6'>Results for {actorName } </p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-7">
                        {actorData && actorData.length > 0 ? (
                            actorData.map((actor) => (
                                <div
                                    key={actor.id}
                                    className="w-60 rounded-xl shadow-md bg-white dark:bg-gray-800 p-4 text-center hover:shadow-lg transition-all cursor-pointer"

                                    onClick={()=>Navigate(`/search/person/movies?actor_id=${actor.id}&actor_name=${actor.name}`)}
                                >
                                    <img
                                        className="w-full h-80 object-cover rounded-lg mb-4"
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                                : `${assets.sathikSanjay}`
                                        }
                                        alt={actor.name}
                                    />
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {actor.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        {actor.known_for_department}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-red-700">No actors found.</p>
                        )}

                    </div>
                </div>


            </section>
        </main>
    )
}
