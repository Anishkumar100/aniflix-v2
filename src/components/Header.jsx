import React, { useEffect } from 'react'
import { useState } from 'react'
import { assets } from "../assets/assets"
import { Link, NavLink, useNavigate } from "react-router-dom"

export const Header = () => {

  const [term, setTerm] = useState("");
  const [actor,setActor]=useState("")
  const navigate = useNavigate();

  const handleSearch = (e) => {

    if (e.key === "Enter" && term.trim()) 
    {
      navigate(`/search/movies?q=${term}`);
      setTerm("")
      
    }
  };


  const handleActorSearch=(e)=>
  {
   if (e.key === "Enter" && actor.trim()) 
    {
      navigate(`/search/person?actor_name=${actor}`);
      setActor("")
 
    } 
  }

  const active = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"

  const inactive = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

  const [hidden, setHidden] = useState(true)

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true)

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))

    if (darkMode) {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <header>
      <nav className="bg-white border-gray-200 border-b dark:bg-gray-900 dark:border-slate-600 text-base">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {darkMode ? <img src={assets.aniflixDark} className="w-40" alt="Aniflix Logo" /> :
              <img src={assets.aniflixLight} className="w-40" alt="Aniflix Logo" />}

          </Link>
          <div className=" flex justify-center items-center gap-3 md:order-2">
            <button type="button" onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            

            <button onClick={() => setDarkMode(!darkMode)}
              className="relative inline-flex items-center bg-gray-400 justify-center w-12 h-12 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <div className="absolute transition-transform duration-300 scale-100 group-hover:scale-110">
                {darkMode ? (
                  // ☀️ Light mode icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3
             m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414
             M17.95 17.95l1.414-1.414M6.05 6.05L4.636 7.464
             M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  // 🌙 Dark mode icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                )}
              </div>
            </button>


            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
                id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." />

           
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
               <input type="text" value={actor} onChange={(e) => setActor(e.target.value)}
                onKeyDown={(e) => handleActorSearch(e)}
                id="search-actor" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Actors..." />

                </div>


            <button data-collapse-toggle="navbar-search" onClick={() => setHidden(!hidden)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`${hidden ? `hidden` : " "} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => handleSearch(e)} id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." />

            
            </div>


            <div className="relative mt-3 md:hidden ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" value={actor} onChange={(e) => setActor(e.target.value)}
                onKeyDown={(e) => handleActorSearch(e)} id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Actors..." />

            
            </div>






          
                
                
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? active : inactive} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? active : inactive}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top_rated" className={({ isActive }) => isActive ? active : inactive}  >Top-Rated</NavLink>
              </li>

              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? active : inactive} >Upcoming</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>


    </header>


  )
}




/*
While copy pasting first, change the attribute "class" to "className" and check wether the input tags are closed ( check closing for all tags )

And check the devTools. since, we are using flowbite. we copied default HTML code, so need to change it to react. its not difficult. the DevTools itself will give the alternative names and the places u need to fix.


And, after doing this, fix your logo and and use Link tag for logo. And after that u are going to navContents change it. and use NavLink to use the inbuilt active classes feature. (dont forget to add "end"). 

But unfortunately in tailwind we dont have active class. thus, we will be building it by ourselves.

so, here what we did is, we are declaring 2 variables having the active css values and inactive css values (done manually). And the {isActive} is an inbuilt property of navLink. isActive will be true when the particular element is selected and if not it is false. with this we apply ternary operator to select it.


and now to fix the navBar on mobile screens using useState to trigger the onClick functionality for enabling and locking the hidden property. for the menu button


Now, we got the base navBar functionality. Now we need darkMode and LightMode.

First in tailwind.config.js u have to add darkMode:"class" or darkMode:"selector" this is given by tailwind css docs. (This will be used to incorporate the dark properties in the application)

now, u will be getting the button and the svg code from chatgpt. and paste it correctly. now create a useState mentioning the darkMode and its toggle option. u are overriding the darkMode using onClick (base stuff)and finally using useEffect whenever and the darkMode as ur dependency. using localStorage for better Practise .


Avlodhan Mapla

now advance to making the card in MoiveCard.jsx

*/