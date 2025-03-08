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
      <div className='h-[100vh] w-full text-[#fbf2f2] bg-[#212121] flex flex-col justify-center items-center'>
        <div onClick={prev}>
            <img src="https://i.ibb.co/fGtP4XkG/arrow-back-ios-30dp-FDF3-D0-FILL0-wght400-GRAD0-opsz24.png" alt="" className='absolute h-[8%] left-[13%] hover:cursor-pointer' />
        </div>
              <p className='text-7xl absolute top-[6%] left-[10%] font-bold '>Education</p>
            <div className='flex flex-col bg-[#212121] gap-1.5 h-auto h-[40%] w-[50%] p-4 rounded-3xl shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]'>
              <ul type='cycle' className=' ml-[4%] mt-[1.4%]' >
                 <li  className='text-3xl font-semibold'>{naame[current].name}</li>
                 <li  className='text-1.2xl font-medium mt-[2%] ml-[3%]'>{naame[current].degree}</li>
                 <li className='ml-[80%] mt-[-5%] font-bold text-[11.5px] lg:ml-[80%] lg:mt-[-2.5%] lg:text-[13.5px]'>{naame[current].year}</li>
                 <li className='text-1.2xl font-medium  ml-[3%]'>{naame[current].Marks}</li>
                 <li className='text-1.2xl font-medium  ml-[3%]'>{naame[current].Place}</li>
                 <li  className='text-1.2xl font-medium mt-[1.8%] ml-[3%]'>{naame[current].Describ}</li>
              </ul>
            </div>
        <div onClick={next}>
         <img src="https://i.ibb.co/QvRw4QvG/chevron-right-30dp-FDF3-D0-FILL0-wght400-GRAD0-opsz24.png" alt=""className='absolute h-[13%] right-[10%] mt-[-3%] hover:cursor-pointer'/>
        </div>
        <Navbar/>
      </div>
    )
}

export default Education