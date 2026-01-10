import React from 'react'

const Projects = () => {
  return (
    <div className='flex items-center justify-center  mt-10 flex-col gap-3 p-9'>
      <h1 className="text-text font-semibold text-3xl sm:text-4xl text-center w-130 tracking-tight leading-12">View One Of The Greatest Well Designed  <span className='bg-ui-color px-3 p-0.5 rounded-xl drop-shadow-[0_0_25px]  drop-shadow-ui-color/50 text-invert-text '>Projects</span></h1>
      <p className=' text-text font-light w-100 text-center text-lg'>here is the best when you choose exprience designer and logic</p>
      <div className='flex  justify-center w-full gap-5 px-40 relative mt-20  '>
        <img className=' absolute top-[-90px] sm:top-[-100px] h-110 sm:w-230' src="/public/folder.png" alt="" />
        <div className='sm:w-full min-w-100  gap-4 h-110 sm:h-150 bg-ui-color/40 rounded-3xl  border-ui-color border-2 backdrop-blur-2xl flex flex-col p-4'>
            <h1 className=' font-semibold text-text ml-1'>Web Projects</h1>
            <div className='flex items-center justify-between '>
                <div className='size-28 bg-violet-400 rounded-2xl'></div>
                <div className='size-28 bg-violet-400 rounded-2xl'></div>
                <div className='size-28 bg-violet-400 rounded-2xl'></div>
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default Projects