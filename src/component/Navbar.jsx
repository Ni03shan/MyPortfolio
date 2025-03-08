import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
<>
<div className='flex justify-around items-center h-17 w-full max-w-[60%] bg-[#f6e4e448]  rounded-xl absolute top-[80%]  md:max-w-[40%] md:flex-row md:justify-around md:max-h-17 lg:h-40'>
    <Link to="/">
    <section className="group relative h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
        <img src="https://i.ibb.co/W40tKGqT/home-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="" className="h-7 w-7" />
        <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Home
    </span>
    </section>
    </Link>
        <Link to="/Education">
    <section className="group h-12 w-12 rounded-[50%] bg-[#8a8989] flex justify-center items-center hover:scale-115 transition-transform duration-300">
        <img src="https://i.ibb.co/jkCg9jd5/school-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="" className="h-7 w-7" />
        <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Education
    </span>
    </section>
        </Link>
     <Link to="/Projects">
    <section className="group h-12 w-12 rounded-[50%] bg-[#8a8989] flex justify-center items-center hover:scale-115 transition-transform duration-300">
     <img src="https://i.ibb.co/DPK2QJkc/project-management.png" alt="" className="h-6 w-6"/> 
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        Projects
    </span>
     </section>
     </Link>
    <section className="group h-12 w-12 rounded-[50%] bg-[#8a8989] flex justify-center items-center hover:scale-115 transition-transform duration-300">
      <a href="https://www.linkedin.com/in/nishandas03/">
      <img src="https://i.ibb.co/XZn2ph1h/linkedin.png" alt="" className="h-6 w-6"/> 
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       Linkedin
    </span>
    </a>
    </section>
    <section className="group h-12 w-12 rounded-[50%] bg-[#8a8989] flex justify-center items-center hover:scale-115 transition-transform duration-300">
      <a href="https://github.com/Ni03shan">
     <img src="https://i.ibb.co/VW9PNDSt/github.png" alt="" className="h-6 w-6"/>
       <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Github
    </span>
      </a>
    </section>
    <Link to="/Contact">
    <section className="group h-12 w-12 rounded-[50%] bg-[#8a8989] flex justify-center items-center hover:scale-115 transition-transform duration-300">
      <img src="https://i.ibb.co/JwLC05LW/contacts-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="" className="h-6 w-6" /> 
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Contract
    </span></section>
    </Link>
 </div>
</>  
)
}

export default Navbar