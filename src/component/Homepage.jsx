import React from 'react'
import Navbar from './Navbar';
import RotatingText from './Intro';
function Homepage() {
  return (
    <>
    <div className="h-screen w-full flex flex-wrap flex-col justify-center items-center relative bg-[#212121] text-[#ebe6de]">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://media-hosting.imagekit.io//4af8016e92304c82/Background Video.mp4?Expires=1836049116&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LpE2zIX22tfz-zW8JwliGRZ9LxY4gGU5zk7gizZbDmAaEOx4n3Nx~KYVr9oGQP~QmCX~HVXhkJP2gNFSrehLToLV6h4VPOGN9cGZZJb6CoWl1OFlDXZb9w~Kjyk~qRfghnsfa00P04d~ciEixacA5rpHKljCFMRalOtUQ45lR2OrzrSBhWkqtrescq3AW6FJMlhTf-dcsJg48rXLFyPFoXiRoMQR~fI-OIjLs1SB5rd6pFT3QfJpAH2fSNh~swLfXgqHDeXEDYt8P-u~s9l7DjgynrW4XkxmNURWtqzYUZL8TA5kvKQtRN~mt5zrrf1LNNh9N3-kNGrsT-Wt-ajMYQ__"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex flex-col text-center px-6">
        <p className="text-5xl md:text-7xl font-semibold">Hello World,</p>
        <p className="text-3xl md:text-6xl font-semibold mt-4 flex justify-center gap-2">
          I am
          <RotatingText
            texts={['Nishan Das', 'Web Developer', 'Tech Nerd', 'Learner']}
            mainClassName="px-1 text-white overflow-hidden"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-160%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </p>
        <p className="text-lg md:text-xl font-light mt-6 max-w-3xl mx-auto leading-relaxed">
          A web developer, software engineer, and tech enthusiast passionate about creating dynamic, user-friendly experiences. I specialize in building efficient, high-performing websites and applications, constantly exploring new technologies to innovate and improve.
        </p>

        <a
          href="https://drive.google.com/file/d/1n0VBHHnaAn6tTJxXbcZC0DM9kKaCFlSi/view?usp=sharing"
          className="mt-8 inline-block"
        >
          <button className=" relative flex ml-[65%] items-center mt-[1%] w-[125px]  gap-1 px-8 py-2 border-4 border-transparent text-lg font-semibold text-[white] bg-inherit rounded-2xl shadow-[0_0_0_2px_white] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-[white] hover:align-middle hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px_white] group">
      <svg
        className="absolute left-[-20%] w-6 fill-[white] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-2 group-hover:fill-[white]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>

      <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#f6e4e42f] rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2"></span>

      <span className="relative ml-[-15%] z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform -translate-x-3 group-hover:translate-x-1">
        Resume
      </span>

      <svg
        className="absolute right-2 w-6 fill-[white] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-20%] group-hover:fill-[#212121]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
        </a>
      </div>

      <Navbar />
    </div>
    </>
  )
}

export default Homepage