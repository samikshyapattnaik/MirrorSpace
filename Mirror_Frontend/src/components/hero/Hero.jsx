import React from 'react'

const Hero = () => {
  return (
       <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src="/home.jpeg" 
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content on Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mirror Space</h1>
        <p className="text-lg mb-6 max-w-xl">
          Explore our world of design, innovation, and creative possibilities.
        </p>
        {/* <a href="https://bricknbar.com/"> */}
        <button className="bg-red-700 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300">
          Get Started
        </button>
        {/* </a> */}
        
      </div>
    </section>
    // </div>
  )
  
}

export default Hero

