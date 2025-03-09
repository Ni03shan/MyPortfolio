import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
<>
<div className="flex justify-around gap-4  flex-wrap h-auto p-3 items-center w-full max-w-[80%] bg-[#f6e4e448] rounded-xl relative lg:mt-20 mt-20 md:max-w-[50%] lg:max-w-[40%] lg:h-auto bottom-8 sm:bottom-7">
  <Link to="/">
    <section className="group relative h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/W40tKGqT/home-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="Home" className="h-7 w-7" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Home
      </span>
    </section>
  </Link>

  <Link to="/Education">
    <section className="group h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/jkCg9jd5/school-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="Education" className="h-7 w-7" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Education
      </span>
    </section>
  </Link>

  <Link to="/Projects">
    <section className="group h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/DPK2QJkc/project-management.png" alt="Projects" className="h-6 w-6" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Projects
      </span>
    </section>
  </Link>

  <a href="https://www.linkedin.com/in/nishandas03/">
    <section className="group h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/XZn2ph1h/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        LinkedIn
      </span>
    </section>
  </a>

  <a href="https://github.com/Ni03shan">
    <section className="group h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/VW9PNDSt/github.png" alt="GitHub" className="h-6 w-6" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        GitHub
      </span>
    </section>
  </a>

  <Link to="/Contact">
    <section className="group h-12 w-12 rounded-full bg-[#8a8989] flex justify-center items-center transition-transform duration-300 hover:scale-110">
      <img src="https://i.ibb.co/JwLC05LW/contacts-16dp-1-F1-F1-F-FILL0-wght400-GRAD0-opsz20.png" alt="Contact" className="h-6 w-6" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Contact
      </span>
    </section>
  </Link>
</div>

</>  
)
}

export default Navbar