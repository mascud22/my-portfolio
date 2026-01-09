import { IdentificationIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-fit sm:h-130  flex flex-col sm:flex-row items-center gap-3 sm:gap-6  p-3 '>
        <div className='bg-secondary/ flex-1 h-full flex flex-col mb-2'>
          <h1  style={{ fontFamily: 'Poppins, sans-serif' }} className='text-ui-color text-[47px] sm:text-5xl font-semibold flex items-center gap-2 border-2 border-ui-color/10  p-0.5 rounded-3xl w-full sm:w-fit justify-center sm:justify-start'>Full-Stack <QuestionMarkCircleIcon className='size-12 text-text-third'/></h1>
          <h1  style={{ fontFamily: 'Poppins, sans-serif' }} className='text-text text-[35px] sm:text-5xl ml-1 mt-1 font-semibold  text-center sm:text-left '>Web Developer & <span className=' text-text-third'>Creative Designer Visionary •  </span> </h1>
          <p className='mt-4 mb-1 text-text-third   text-lg text-center sm:text-left line-clamp-3 sm:line-clamp-6'>I design and build fast, modern, and scalable <b>web applications</b>.My main expertise is <b>frontend and backend development</b>, supported by strong skills in <b>graphic design</b> and <b>motion design.</b></p>
          <div className='flex items-center gap-4  sm:justify-start w-full justify-center '>
            <button className='mt-6 bg-ui-color text-ui-color-text px-5 py-2.5 rounded-[21px] font-semibold hover:scale-105 transition-all ease-in-out  cursor-pointer'>View Ny Work</button>
            <button className='mt-6  bg-secondary text-text-third px-5 py-2.5 rounded-[21px] font-semibold hover:scale-105 transition-all ease-in-out flex items-center gap-2 '>Contac Me </button>
          </div>
          <span className='text-text-third justify-center flex sm:flex sm:justify-start  text-lg text-center sm:text-left mt-4'>Web Design • Frontend • Backend • Photoshop • Illustrator • After Effects</span>
          <div className='w-full h-10 rounded-lg bg-secondary mt-3'></div>
          <div className='w-70 h-10 bg-secondary rounded-lg mt-3'></div>
        </div>

        <div className='border-2 border-secondary flex-1  h-full rounded-4xl overflow-hidden'>
          <img className=' object-cover w-full h-full' src="/public/Young Man in Focus.png" alt="Young Man in Focus" /> h
        </div>
    </div>
  )
}

export default Hero