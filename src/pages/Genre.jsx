import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { dynamicTab } from '../hooks/dynamicTab'

export const Genre = () => {

    const [searchAnd] = useSearchParams()
    const genreId = searchAnd.get("with_genres")
    console.log(genreId)
    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };

    dynamicTab(`${genreMap[genreId]} Movies`)



    const navigate = useNavigate()
    const handleGenre = ((e) => {
        const genreId = e.target.value;
        console.log(genreId)

        navigate(`/discover/movie?with_genres=${genreId}`)



    })


    const { movies, loading, fetchMovies } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreId}`)


    return (
        <main>
             {loading ?<p className='text-center dark:text-white text-black  text-2xl'>Patience is the key to see a masterpiece</p> : ""}
            <section className=' max-w-7xl mx-auto py-7'>
                <div className='flex justify-center my-10'>
                    <select onChange={(e) => handleGenre(e)} defaultValue="Genre" className=" w-40 px-4 py-2 rounded-xl bg-gray-500 dark:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
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


                <div>
                    <div>
                        <p className='text-4xl p-6 max-md:text-2xl max-lg:p-0 max-lg:text-center font-bold text-black dark:text-white text-start mb-6'>{genreMap[genreId]} Movies Of Aniflix </p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-7">
                        {movies.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} id={movie.id} />
                        })}
                    </div>
                </div>


            </section>
        </main>
    )
}


/*
Alright for the genre part, i did something very simple.

first i set up a route with a specific for the genre element. and what i did was, i created a select tag for genre selection in movieList and an onChange event for traversal to the genre page by keeping a query "q"

one more important thing is, if u are keeping and "&" u should update it in ur path, while route declaration. But, we are using a "q" to make things easy. now in the genre page we are getting the genre id by using useSearchParams and rest u know how to do.

And more change i added is that, i added an another functionality of traversal of genre from the individual movie pages (look at movieDetail.jsx). so, again what i did was, i got the genre.id from the span tags and executed a function called genreTraversal where i just used the useNavigate hook to come back to the genre page with the id of the genre. and that's it. 

Now proceeding to the final touches of our aniflix-v2

1) scroll restoration to top:

what it means is that if u scroll down the movieList page and select a movie, u may the expect the details of the movies to be shown from the top. but no, the movieDetail page loads only at the same level of scrolling u did in movieList page. so we need to fix it by copy pasting.

we are new component for that in the components folder (ScrollToTop) now going to react-router website and just type scroll to top . And copy paste the code for the component and export it in IndexComponents and finally use it main.jsx. That's it

2) credits for actors:

I made another slight change. Where i added the credits of the movie. like the main Leads in the movie by modiying the api for individual movies.

if u see code in the movieDetail page u will understand.

And i also wanted to created a page to show the movies of the specific actors too.

thus created the ActorMovies page. so, here u know how to get the movie its easy

3) Finally lets move on to the dynamic content in the tab

the first thing to do is create a custom hook called as dynamicTab.jsx in their just place a useEffect() and return nothing. and whenever we do anyoperation, this useeffect will change the title of the tab, like this "document.title=`something/aniflix-v2`" very simple stuff


*/