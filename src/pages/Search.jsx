import React from 'react'
import { useFetch } from "../hooks/useFetch"
import { MovieCard } from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'
import { dynamicTab } from '../hooks/dynamicTab'


export const Search = () => {
  const [searchParams] = useSearchParams()

 

  const query = searchParams.get("q")
  console.log(query)

  const { movies, loading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)

  dynamicTab(`Results for ${query}`)

  return (
     <main>
      {loading ? <p className='text-center text-xl font-semibold text-gray-500 py-4'>Patience is the key to see a masterpiece</p> : ""}
      <section className=' max-w-7xl mx-auto py-7 '>
        
        {movies.length>0?<p className='text-2xl font-bold text-white text-center mb-6'>Results For "{query}"</p>:<p className='text-2xl font-bold text-red-500 mb-6 text-center '> No Results Found For "{query}"</p>}
       

        <div className="flex justify-center flex-wrap gap-7">

          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} id={movie.id}/>
          })}
        </div>



      </section>

    </main>


  )
}


/*
How did we get the Search Functionality?

Very simple machi.

First we are getting the useFetch return values here in the search page. now, before explaining the searchParams ,i have to explain regarding the header operation for search. so what u do is, u are giving onChange and onKeyDown events and getting the input from the user and u are creating the function for handling it. and using useNavigate u are passing the input as a query (q) to the search&q=${query} (search path). 

Know one thing clearly, u can navigate to anywhere, but we are providing the search result in the search page, thus, u are passing the query to the search path. since, u declared (/search) as the path for the <search/> page. now u have sent the query in the form of link.

Now, in the search page we will be using useSearchParam hook, to get the query and send it in the api link when u called the useFetch(), now, its very easy we got the result from the useFetch hook and the movies array is with ur searched movies and we finally print it. 

Its that easy.

Now let move on to individual pages for each card.

It is also very easy. in the movieCard u used Link in which set the to={} to the movieDetail page with the id of the movie. now using useParams hook get the id, do the fetch operation again with the specific movie api link and done. 

And after that look at Genre.jsx
*/