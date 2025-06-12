import {Route,Routes} from "react-router-dom"
import { MovieList,MovieDetail,Search,PageNotFound,Genre,ActorSearch, ActorMovies } from "../pages/IndexPages"


export const AllRoutes = () => {
  return (
    <div className=" bg-slate-200 dark:bg-gray-900"> {/*Gave background commonly for all pages */}
    <Routes>
        <Route path="/" element={<MovieList api={`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`} title={`Now Playing Movies`}/>}/>
        {/*this will be the homepage */}

        <Route path={`/movies/upcoming`} element={<MovieList api={`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`} title={`Upcoming Movies`}/>} />


        <Route path={`/movies/top_rated`} element={<MovieList api={`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`} title={`Top Rated Movies`}/>} />


        <Route path={`/movies/popular`} element={<MovieList api={`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`} title={`Popular Movies`}/>} />

        <Route path={`/search/person`} element={<ActorSearch/>}/>
        <Route path={`/search/person/movies`} element={<ActorMovies/>}/> 

        <Route path={`discover/movie`} element={<Genre/>} />
        <Route path={`/movie/:id`} element={<MovieDetail/>}/>
        <Route path={`/search/movies`} element={<Search/>}/>
        <Route path={`*`} element={<PageNotFound title={`Page Not Found`}/>}/>
    </Routes>
   </div>
  )
}
