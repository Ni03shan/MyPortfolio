import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';



const naame=[
  {
    name:'Dr.B.C.Roy Academic of Proffesional Courses',
    degree:'Bachelor of Computer Application',
    year:'2023-2027',
    Marks:'GPA : 7.5',
    Place:'Place : Durgapur, West Bengal ',
    Describ: 'Description: Dr. B.C. Roy Academy of Professional Courses offers a four-year BCA program, focusing on programming, networking, and web development, preparing students for careers in software development, database management, and IT administration.'
 },
 {
  name:'Durgapur M.A.M.C Township Modern High School',
  degree:'Commerce',
  year:'2021-2023',
  Marks:'Percentage(12th): 75%',
  Place:'Place : Durgapur, West Bengal ',
  Describ:'Description : Durgapur M.A.M.C. Township Modern High School is a co-educational institution offering primary to higher secondary education, emphasizing moral development and academic excellence'
 },
];

function Education() {
   const [current,setCurrent]=useState(0)
   const next=()=>{
    if (current + 1 >= naame.length) {
      alert("Press the previous button");
    } else {
      setCurrent(current + 1);
    }
  }
   const prev=()=>{
       if (current-1<0){
         alert("Press the next button");
        } 
        else{
         setCurrent(current-1)
       }
   }
    return (
      <div className="min-h-screen w-full text-[#fbf2f2] bg-[#212121] flex flex-col justify-center items-center relative px-4 md:px-12">

  <p className="text-3xl md:text-5xl lg:text-7xl font-bold absolute top-[5%] left-[10%]">
    Education
  </p>

  <div className="flex flex-col bg-[#212121] gap-3 w-full max-w-2xl p-6 rounded-3xl shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] mt-25 md:mt-24">
    <ul className="ml-2 sm:ml-4">
      <li className="text-xl sm:text-2xl md:text-3xl font-semibold">{naame[current].name}</li>
      <li className="text-lg sm:text-xl mt-2 ml-3">{naame[current].degree}</li>
      <li className="text-xs sm:text-sm mt-[-2%] ml-[80%] md:text-base font-bold sm:mt-[-4%] md:mt-[-5%]">
        {naame[current].year}
      </li>
      <li className="text-lg sm:text-xl ml-3">{naame[current].Marks}</li>
      <li className="text-lg sm:text-xl ml-3">{naame[current].Place}</li>
      <li className="text-lg sm:text-xl mt-2 ml-3">{naame[current].Describ}</li>
    </ul>
  </div>
  <div onClick={prev} className="sm:absolute mr-12 mt-5  lg:left-[15%] lg:top-[48%] sm:left-[49%] sm:top-[66%] cursor-pointer">
    <img
      src="https://i.ibb.co/fGtP4XkG/arrow-back-ios-30dp-FDF3-D0-FILL0-wght400-GRAD0-opsz24.png"
      alt="Back"
      className="h-6 md:h-8 font-extrabold lg:h-10"
    />
  </div>

  <div onClick={next} className="sm:absolute ml-[15%] mt-0 lg:right-[15%] md:top-[46.5%] sm:top-[68%] sm:right-[35%] cursor-pointer">
    <img
      src="https://i.ibb.co/QvRw4QvG/chevron-right-30dp-FDF3-D0-FILL0-wght400-GRAD0-opsz24.png"
      alt="Next"
      className="h-10 md:h-14 lg:h-16"
    />
  </div>

  <Navbar />
</div>

    )
}

export default Education