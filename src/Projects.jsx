import { FireIcon, QuestionMarkCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex items-center justify-center  mt-10 flex-col gap-3 p-9'>
      <h1 className="text-text  font-semibold text-3xl w-90  sm:text-4xl text-center sm:w-130 tracking-tight leading-12">View One Of The Greatest Well Designed  <span className='bg-ui-color px-3 p-0.5 rounded-xl drop-shadow-[0_0_25px]  drop-shadow-ui-color/50 text-invert-text '>Projects</span></h1>
      <p className=' text-text font-light w-100 text-center text-lg'>here is the best when you choose exprience designer and logic</p>
      <div className='flex  justify-center w-full gap-5 px-40 relative mt-20  '>
        <img className=' absolute top-[-90px] sm:top-[-100px] h-110 sm:w-230' src="/public/folder.png" alt="" />
        <div className='sm:w-full min-w-87  gap-4 h-fit sm:h-175 bg-blue-400/40 rounded-3xl  border-blue-400 border-2 backdrop-blur-2xl flex flex-col p-4'>
            <h1 className=' font-semibold text-lg border-b-2 border-b-blue-200/40 pb-3 text-ui-color-text ml-1 flex items-center gap-1'>
              Web Projects
              <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1 ml-5'>
                <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                <span className='text-sm text-ui-color-text font-semibold'>More</span>
              </button>
            </h1>
            <div className='flex items-center sm:justify-between  group relative flex-col sm:flex-row justify-stretch'>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                
                
            </div>
                <h1 className=' font-semibold text-lg border-b-2 border-b-blue-200/40 pb-3 text-ui-color-text ml-1 flex flex-col sm:flex-row sm:items-center items-start gap-1 '>
                  Web Projects
                  <div className='sm:ml-4 flex items-start sm:items-center gap-2 flex-wrap sm:no-wrap'>
                    <button className=' py-1 px-2 rounded-2xl bg-invert text-sm text-ui-color'>Photoshop •</button> 
                    <button className=' py-1 px-2 rounded-2xl border-2 border-ui-color-text/50 text-sm text-ui-color-text'>Graphic Design •</button> 
                    <button className=' py-1 px-2 rounded-2xl border-2 border-ui-color-text/50 text-sm text-ui-color-text'>After Effect •</button> 
                    <button className=' py-1 px-2 rounded-2xl border-2 border-ui-color-text/50 text-sm text-ui-color-text'>Illustrator •</button> 
                    <button className=' py-1 px-2 rounded-2xl border-2 border-ui-color-text/50 text-sm text-ui-color-text'>Video Editing •</button> 
                  </div>
                </h1>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between '>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
                <div className='flex flex-col mb-2  w-full sm:w-fit border-b-2 border-b-ui-color-text pb-2'>
                  <div className=' flex items-start justify-end p-3 bg-ui-color/25 rounded-2xl mb-1.5 gap-2 w-full h-45 sm:size-45'>
                    <button className='cursor-pointer transition-all ease-in-out hover:scale-104 active:scale-98 flex items-center gap-1'>
                      <QuestionMarkCircleIcon className='size-5 text-ui-color-text '/> 
                      <span className='text-sm text-ui-color-text font-semibold'>More</span>
                    </button>
                  </div>
                  <h1 className=' font-semibold text-[17px] flex item-centar gap-1.5 text-ui-color-text ml-1 '> <FireIcon className='size-6'/> Debt Track App</h1>
                  <p className='text-ui-color-text/60 ml-1 w-50 line-clamp-2 '>this app simplifies a debt track for companies</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  ) 
}

export default Projects