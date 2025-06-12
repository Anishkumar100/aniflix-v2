import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'


export const MovieCard = ({movie,id}) => {

    const {poster_path,original_title,overview,release_date}= movie
  return (
    <div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/movie/${id}`}>
       <img className="rounded-t-lg" src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`: assets.sathikSanjay} alt="MovieImg" />
 
    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
    
        <p className="mb-6 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">{overview}</p>
     
       <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          📅 {release_date}
        </p>
       
    </div>
     </Link>   
</div>

    </div>
  )
}


// alright now, we have developed card format and used this component in the MovieList

/*
The card is developed with the same steps (copy and paste & modify)

Now after that we will do the fetch operation using useFetch hook. u need the url for that, whenever the url is changed when u click the header option. I thought of using onClick and do propping to get the url value. But, we can do a simple thing,

we have connected every single page with Routes, app the prop of the api in the routes itself. so whenever we are clicking various options in the navBar we use NavLink so that we are directed to the particular page using Routes. so, we are passing the prop of API in the each of the route itself and we are getting the api this way.

Now lets use the .env file to store the apikey for protection.

to access the stored api_key ${import.meta.env.VITE_API_KEY} in places u have used the api_key
*/