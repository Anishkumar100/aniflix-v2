import React from 'react'
import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { dynamicTab } from '../hooks/dynamicTab'



export const MovieList = ({ api ,title }) => {

  const { movies, loading, fetchMovies } = useFetch(api)

  const navigate=useNavigate()

  dynamicTab(title)

  const handleGenre=((e)=>
  {
    const genreId=e.target.value;
    console.log(genreId)

    navigate(`/discover/movie?with_genres=${genreId}`)
    
    

  })


  return (

    <main>
      {loading ?<p className='text-center dark:text-white text-black  text-2xl'>Patience is the key to see a masterpiece</p> : ""}
      <section className=' max-w-7xl mx-auto py-7'>

<div className='flex justify-center my-10'>
<select onChange={(e)=>handleGenre(e)} defaultValue="Genre" className=" w-40 px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
  <option value="Genre" disabled>Genre</option>
  <option value="28">Action</option>
  <option value="12">Adventure</option>
  <option value="16">Animation</option>
  <option value="35">Comedy</option>
  <option value="80">Crime</option>
  <option value="99">Documentary</option>
  <option value="18">Drama</option>
  <option value="10751">Family</option>
  <option value="14">Fantasy</option>
  <option value="36">History</option>
  <option value="27">Horror</option>
  <option value="10402">Music</option>
  <option value="9648">Mystery</option>
  <option value="10749">Romance</option>
  <option value="878">Science Fiction</option>
  <option value="10770">TV Movie</option>
  <option value="53">Thriller</option>
  <option value="10752">War</option>
  <option value="37">Western</option>
</select>
</div>

<h1 className='text-4xl max-sm:text-2xl font-bold text-white text-center my-10 '>{title}</h1>
        <div className="flex justify-center flex-wrap gap-7">
          {movies.map((movie) => {
            return <MovieCard  key={movie.id} movie={movie} id={movie.id} />
          })}
        </div>


      </section>
      

    </main>

  )
}
