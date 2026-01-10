import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'

const App = () => {
  return (
    <div className='w-full h-fit sm:h-fit bg-gradient-to-t bg-primary from-ui-color/5 via-blue-300/10 to-ui-color/10 p-3'>
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App