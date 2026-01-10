import { EyeIcon, FaceFrownIcon, GifIcon, IdentificationIcon, KeyIcon, LifebuoyIcon, MapIcon, QuestionMarkCircleIcon, SparklesIcon, StarIcon } from '@heroicons/react/16/solid'
import { BoltIcon } from '@heroicons/react/20/solid'
import { CubeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-3 '>
        <div className='w-full h-fit sm:h-130  flex flex-col sm:flex-row items-center gap-3 sm:gap-6  p-3 '>
          <div className='bg-secondary/ sm:gap-1 flex-1 h-full flex flex-col mb-2 '>
            <h1  style={{ fontFamily: 'Poppins, sans-serif' }} className='text-ui-color text-[37px] sm:text-5xl   font-semibold flex items-center gap-2 border-2/ mb-0 sm:mb-1 border-ui-color/   w-full sm:w-fit justify-center sm:justify-start drop-shadow-[0_0_35px] drop-shadow-ui-color/70'>Hi, I’m Abshir 👋 </h1>
            <h1  style={{ fontFamily: 'Poppins, sans-serif' }} className='text-text text-[38px] sm:text-5xl ml-1 mt-1 font-semibold  text-center sm:text-left  drop-shadow-[0_0_35px] drop-shadow-ui-color/20  tracking-tight leading-12 sm:leading-16 '><span className='sm:font-light'>Web Developer</span> & <span className=' text-text'>Creative  Designer ✨ Visionary 🎬   </span> </h1>
            {/* <h1  style={{ fontFamily: 'Poppins, sans-serif' }} className='text-text text-[36px] sm:text-5xl ml-1 mt-1 font-semibold  text-center sm:text-left  drop-shadow-[0_0_35px] drop-shadow-ui-color/20'><span className='font-bold'></span> <span className='text-text-third'> </span> </h1> */}
            <p className='mt-4 mb-1 px-3 sm:px-0 text-text-third    text-[17px] h-fit  sm:text-left line-clamp-3 sm:line-clamp-9'>I design and build fast, modern, and scalable <b>web applications</b>.My main expertise is <b>frontend and backend development</b>, supported by strong skills in <b>graphic design</b> and <b>motion design.</b></p>
            <div className='flex items-center gap-4  sm:justify-start w-full justify-center '>
              <button className='mt-6 bg-ui-color drop-shadow-[0_0_35px] drop-shadow-ui-color/50 text-ui-color-text px-4 py-2.5  rounded-[21px] font-semibold hover:scale-105 transition-all ease-in-out  cursor-pointer    bg'>View my work</button>
              <button className='mt-6  bg-secondary  text-text-third px-5 py-2.5 rounded-[21px] font-semibold hover:scale-105 transition-all ease-in-out flex items-center gap-2 '>Contac Me </button>
            </div>
            <span className='text-text-third justify-center flex sm:flex sm:justify-start  text-lg text-center sm:text-left mt-4'>Web Design • Frontend • Backend • Photoshop • Illustrator • After Effects</span>
            <div className='w-full h-10 rounded-lg bg-secondary/ mt-3 flex items-center p-2  relative justify-center sm:justify-start'> 
              <div className='flex items-center'>
                <div className='size-8 bg-secondary border-2 border-invert rounded-3xl relative'></div>
                <div className='size-8 absolute left-6 bg-secondary border-2 border-invert rounded-3xl'></div>
                <div className='size-8 absolute left-10 bg-secondary border-2 border-invert rounded-3xl'></div>
                <div className='size-8 absolute left-14 bg-secondary border-2 border-invert rounded-3xl'></div>
                <div className='size-8 absolute left-18 bg-secondary border-2 border-invert rounded-3xl'></div>
              </div>
              <span className='text-text font-semibold sm:ml-19 ml-19 w-50 sm:w-full truncate'>34,654 + Customers around the world</span>
            </div>
            <div className='w-70 h-10 bg-secondary rounded-lg mt-3'></div>
          </div>
  
          <div className='border-2 border-secondary flex-1  h-full rounded-4xl overflow-hidden'>
            {/* <img className=' object-cover w-full h-full' src="/public/Young Man in Focus.png" alt="Young Man in Focus" /> h */}
          </div>
        </div>
        <div className='h-12 w-full flex items-center justify-between  bg-gradient-to-r from-ui-color/ to-primary/ bg-primary/ mt-5 px-8 animate-pulse'>
          <span className='font-semibold text-text text-[18px]'>Creative</span>
          <SparklesIcon className='size-5.5 text-text'/>
          <span className='font-semibold text-text text-[18px]'>Visualizer</span>
          <SparklesIcon className='size-5.5 text-text'/>
          <span className='font-semibold text-text text-[18px]'>Great</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
          <span className='font-semibold hidden sm:flex text-text text-[18px]'>EnjoyAble</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
          <span className='font-semibold hidden sm:flex text-text text-[18px]'>Confort</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
          <span className='font-semibold hidden sm:flex text-text text-[18px]'>Good</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
          <span className='font-semibold hidden sm:flex text-text text-[18px]'>Live</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
          <span className='font-semibold hidden sm:flex text-text text-[18px]'>Creative</span>
          <SparklesIcon className='size-5.5 hidden sm:flex text-text'/>
        </div>
    </div>
  )
}

export default Hero