import React from 'react'
import { useState,useCallback,useEffect } from 'react'

export const useFetch = (url) => 
{
  const [movies,setMovies] =useState([])
  const [loading,setLoading]=useState(false)
 
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
                setMovies(res.results)

            }
            else
            {
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

    return{movies,loading,fetchMovies}
}

