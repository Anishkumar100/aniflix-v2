import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (

<footer className="bg-white shadow-sm h-22 p-6 max-sm:h-28  border-gray-200 border-t   dark:border-slate-600 dark:bg-gray-800">
    <div className="w-full flex mx-auto max-w-screen-xl max-md:text-center md:flex md:items-center md:justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-4">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">ANIFLIX-V2™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 ">
       
        <li>
            <a href="https://in.linkedin.com/in/anish-kumar-s-66ab50292" target='_blank' className="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/Anishkumar100" target='_blank' className="hover:underline me-4 md:me-6">GitHub</a>
        </li>
        <li>
            <a href="https://anishkumarversion1.netlify.app/" target='_blank' className="hover:underline">Personal Portfolio</a>
        </li>
    </ul>
    </div>
</footer>

  )
}
