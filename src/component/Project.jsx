import React from 'react'
import Navbar from './Navbar'
import Card from './card'

function Project() {
  return (
    <>
    <div className='h-[100vh] w-full bg-[#212121] text-[#fbf2f2] relative flex justify-center gap-12 items-center'>
      <p className='text-7xl absolute top-[6%] left-[10%] font-bold '>Projects</p>
      <Card/>
    <Navbar/>
    </div>
    </>
  )
}

export default Project