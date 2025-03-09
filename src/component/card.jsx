import React from 'react'

function card() {
  return (
    <>
    <div className='flex h-auto w-auto flex-wrap justify-center item-center gap-10 mt-30 sm:mt-20 sm:gap-15'>

    <article className="relative w-64 h-64 bg-[#212121] overflow-hidden rounded-2xl text-[#2e2d31] group shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
      <div className="font-bold text-xl  p-2 text-white"><img src="https://i.ibb.co/N2FxtDKT/Screenshot-2025-03-05-124429.png" alt="" className='object-contain w-[98%] h-[100%] rounded-2xl'  /></div>
      <div className="absolute left-0 bottom-[-5px] w-full p-9.5 bg-[#f2f2f2] rounded-tl-2xl transform translate-y-[150px] transition-transform duration-300 group-hover:translate-y-0 group-hover:m-0 ">
        <div className="absolute top-[-50px] right-[-50px] w-25 h-26 rotate-[-175deg] rounded-full shadow-[inset_48px_48px_#f2f2f2] " ></div>

        <span className="font-bold absolute h-0 top-5 text-black leading-1 group-hover:opacity-0">Dice Guessing Game</span>

        <span className="block h-5 text-[14px] text-right font-medium  group-hover:opacity-0">- Personal Project</span>
         <div className='flex flex-wrap absolute ml-1.5 top-[23%] gap-2.5 mb-[-40%]' >
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >HTML</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >CSS</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >JavaScript</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >ReactJS</span>
        </div>
        <p className="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-0 group-hover:min-w-full delay-200 p-[0%]">
        The Dice Guessing Game is an interactive ReactJS-based game where users guess the outcome of a dice roll. It combines simple state management and event handling to create an engaging experience.
        <a href="https://github.com/Ni03shan/Dice-Guessing-Game" >
          <img src="https://i.ibb.co/VW9PNDSt/github.png" alt="" className='h-7 w-7 mt-4 ml-38' />
        </a>
        </p>
      </div>
    </article>
    
    <article className="relative w-64 h-64 bg-[#212121] overflow-hidden rounded-2xl text-[#2e2d31] group shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
      <div className="font-bold text-xl  p-2 text-white"><img src="https://i.ibb.co/354c08Nq/Screenshot-2025-03-07-123248.png" alt="" className='object-contain w-[98%] min-h-[70%] rounded-2xl'  /></div>
      <div className="absolute left-0 bottom-[-5px] w-full p-8 bg-[#f2f2f2] rounded-tl-2xl transform translate-y-[150px] transition-transform duration-300 group-hover:translate-y-0 group-hover:m-0 ">
        <div className="absolute top-[-50px] right-[-50px] w-25 h-26 rotate-[-175deg] rounded-full shadow-[inset_48px_48px_#f2f2f2] " ></div>

        <span className="font-bold absolute h-0 top-5 text-black leading-1 group-hover:opacity-0">Foody Zone</span>

        <span className="block h-5 text-[14px] text-right font-medium  group-hover:opacity-0">- Personal Project</span>
         <div className='flex flex-wrap absolute ml-1.5 top-[23%] gap-2.5 mb-[-40%]' >
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >HTML</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >CSS</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >JavaScript</span>
            <span className='bg-[black] text-[white] w-auto p-1 text-[12px] rounded-[10%] font-bold group-hover:opacity-0' >ReactJS</span>
        </div>
        <p className="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-0 group-hover:min-w-full delay-200 p-[0%]">
        Foody Zone is a user-friendly food menu website where users can browse a variety of dishes, view prices, and search for specific items effortlessly, making it easy to explore and discover delicious meals.  <a href="" >
          <img src="https://i.ibb.co/VW9PNDSt/github.png" alt="" className='h-7 w-7 mt-4 ml-38' />
        </a>
        </p>
      </div>
    </article>

    </div>
     </>
  )
}

export default card