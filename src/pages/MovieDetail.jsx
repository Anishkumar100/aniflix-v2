import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react"
import { assets } from '../assets/assets'
import { dynamicTab } from '../hooks/dynamicTab'


/* we are going to use an another fetch() u are getting the parameter (id) from the link

*/

export const MovieDetail = () => {

    const navigate=useNavigate()
    const param = useParams()
    console.log(param)
    const [url,setUrl]=useState(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`)
    
    const [movieData, setMovieData] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            if (response.ok) {
                const res = await response.json()
                setLoading(false)
                setMovieData(res)

            }
            else {
                throw new error(`API IS BROKEN OR SOMETHING`)
            }

        }
        catch (error) {
            console.log(error.message)
        }
    })


    useEffect(() => {
        fetchMovie()
    }, [url])

    console.log(movieData)
    dynamicTab(`${movieData.title}`) 
    
    const genreTraversal=((genreId)=>
    {
 navigate(`/discover/movie?with_genres=${genreId}`)

    })

    

  
    return (
         
        <main>
            <section className='flex flex-wrap justify-around py-5'>
                <div className='max-w-sm'>
                    <img className='rounded' src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : assets.sathikSanjay} />
                </div>
                <div className=' max-w-2xl text-gray-700 text-lg dark:text-white '>

                    <h1 className=' text-4xl font-bold my-3 text-center lg:text-left'>{movieData.title}</h1>

                    <p className='my-4'>{movieData.overview}</p>

                    <p className='my-7 flex flex-wrap gap-2'>
                        {movieData.genres ? movieData.genres.map((genre) => (
                            <span  onClick={()=>genreTraversal(genre.id)} key={genre.id} className="mr-2 border border-gray-300 rounded dark:border-gray-600 p-2 cursor-pointer">{genre.name}</span>
                        )) : "Movie Genre Aint Available"}

                    </p>

                 
                    <p className='flex justify-start items-center gap-3 flex-wrap my-5'>
                        
                        <span className='font-bold'>Actors:</span>
                        
                        {movieData?.credits?.cast?
                        <>
                        {movieData.credits.cast.map((actor,index)=>
                        {
                            if(index<=2)
                            {
                              return <span key={actor.id} onClick={()=>navigate(`/search/person?actor_name=${actor.name}`)} className='ml-2 border border-gray-300 rounded dark:border-gray-600 p-2 cursor-pointer'>{actor.name}</span>
                            }
                            else
                            {
                                return
                            }
                           

                        })
                        }
                        </>
                        :
                        `Cast Details not available`
                        }
                        

                    </p>



                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movieData.vote_average}/10</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span href="#" className="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white">{movieData.vote_count} reviews</span>
                    </div>
                    <p className='my-2'>
                        <span className='mr-2 font-bold'>Runtime: {movieData.runtime} min</span>

                    </p>

                    <p className='my-2'>
                        <span className='mr-2 font-bold'>Movie Budget: ${movieData.budget}</span>
                    </p>

                     <p className='my-2'>
                        <span className='mr-2 font-bold'>Box Office Collection: ${movieData.revenue}</span>
                        
                    </p>

                    <p className='my-2'>
                        <span className='mr-2 font-bold'>Release Date: 📅{movieData.release_date}</span>
                        
                    </p>

                    <div className=' flex flex-wrap gap-4 items-center'>
                        <p className='mr-2 font-bold'>Production Companies:</p>
                        <div className='flex flex-wrap justify-start gap-9'>
                        {movieData.production_companies && movieData.production_companies.map((company)=>
                        {
                           return(<img key={company.id} className=" w-36 h-20  bg-gray-200 dark:bg-gray-400 p-1 border-gray-700 dark:border-slate-400  rounded" src={company.logo_path?`https://image.tmdb.org/t/p/w500/${company.logo_path}`:assets.productionStock} />)
                        })}
                        </div>
                    </div>

                    <p className=' my-6'>
                        <a href={`https://www.imdb.com/title/${movieData.imdb_id}/
`} target='_blank'><span className='mr-2 font-bold '>For More Details Click Here: <span className='ml-2  border border-gray-300 rounded dark:border-gray-600 p-2'>{movieData.imdb_id}</span></span></a>
                        
                    </p>

                </div>


            </section>

        </main>

    )
}
