import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const App = () => {
  return (
    <div className='w-full h-fit sm:h-screen bg-primary p-3'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App