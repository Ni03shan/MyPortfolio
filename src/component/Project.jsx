import React from 'react'
import Navbar from './Navbar'
import Card from './card'

function Project() {
  return (
    <>
   <div className="min-h-screen w-full bg-[#212121] text-[#fbf2f2] flex flex-col justify-center items-center gap-12 px-4 md:px-8 lg:px-16">
  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold absolute top-6 left-6 sm:top-8 sm:left-10 md:top-10 md:left-12">
    Projects
  </p>
  <Card />
  <Navbar />
</div>
    </>
  )
}

export default Project