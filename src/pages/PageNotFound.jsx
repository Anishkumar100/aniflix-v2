import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { dynamicTab } from '../hooks/dynamicTab'

export const PageNotFound = ({title}) => {
  dynamicTab(title)
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>

        <div className='flex flex-col w-full items-center my-10'>
          <p className='text-7xl max-md:text-5xl text-gray-700 font-bold my-10 dark:text-white'>404, OOPS!!!!</p>
          <div className=' flex justify-center flex-wrap items-center my-10 gap-10  '>
            <img className='rounded w-96' src={assets.notFound404} alt="404 Page Not Found" />
            <div className='flex flex-col max-w-md max-lg:max-w-full  max-flex-wrap justify-center items-center my-4 gap-5'>
              <p className='text-xl text-gray-700 font-bold my-10 dark:text-white text-wrap text-justify'>"Get back to Aniflix before this adorable cutiepie gets wrecked by another auto while pretending his squeaky bicycle is a Ducati. Last time, he got turned into road art, dragged himself to a clinic, and got treated by a ‘doctor’ who proudly claimed he got his medical degree from McDonald’s"</p>
              <Link to="/"><button className='w-64 text-xl  bg-gradient-to-r from-blue-500 via-sky-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-white'>Back To Aniflix-v2</button></Link>
            </div>
          </div>


        </div>


      </section>
    </main>

  )
}
