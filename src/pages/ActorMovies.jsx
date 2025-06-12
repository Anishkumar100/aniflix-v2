import React from 'react'
import { useFetch } from "../hooks/useFetch"
import { MovieCard } from "../components/indexComponents"
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState,useEffect,useCallback } from 'react'
import { dynamicTab } from '../hooks/dynamicTab'

export const ActorMovies = () => {

    const Navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const actor_id = searchParams.get(`actor_id`)
    console.log(actor_id)

    const actor_name=searchParams.get(`actor_name`)
    console.log(actor_name)

     const [movies,setMovies] =useState([])
      const [loading,setLoading]=useState(false)
      const [url,setUrl]=useState(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${import.meta.env.VITE_API_KEY}`)
     
      const fetchMovies= useCallback( async ()=>
        {
            try 
            {
                setLoading(true)
                const response=await fetch(url)
                if(response.ok)
                {
                    const res=await response.json()
                    setLoading(false)
                    setMovies(res.cast)
    
                }
                else
                {
                    setLoading(false)
                    throw new error(`API IS BROKEN OR SOMETHING`)
                }
    
            } 
            catch (error) 
            {
                console.log(error.message) 
            }
        })
    
        useEffect(()=>
        {
            fetchMovies()
        },[url])
    
        console.log(movies)

        dynamicTab(`Movies of ${actor_name}`)

    return (
        <main>
            <section>
                <p className='text-4xl p-6 max-md:text-2xl max-lg:p-0 max-lg:text-center font-bold text-black dark:text-white text-start mb-6'>Movies of {actor_name}</p>
                <div className="flex justify-center flex-wrap gap-7">
                    {movies?movies.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} id={movie.id} />
                    }):`no movies found`}
                </div>
            </section>
        </main>
    )
}


/*

Now we did everything, the finalchanges is to give names of the website */