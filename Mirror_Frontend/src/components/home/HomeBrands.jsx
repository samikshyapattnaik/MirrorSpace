import React from 'react'
import  logo2 from '../../assets/Brands/asian.png'
import  logo3 from '../../assets/Brands/centuryPly.png'
import  logo5 from '../../assets/Brands/havells.png'
import  logo6 from '../../assets/Brands/kajaria.png'
import  logo7 from '../../assets/Brands/somany.png'
import  logo8 from '../../assets/Brands/yale.png'
const HomeBrand = () => {
  return (
    <>
       <section className='bg-gray-100 rounded-circles-lg'>
       <div className="container flex flex-col items-center justify-center w-full h-full mt-10">
            <h1 className="text-3xl font-bold text-center"> Our Brands</h1>
            <div className="grid grid-cols-6 gap-3 mt-3 md:grid align-items-center">
            <img src={logo2} alt="Brand 2" className="w-56 h-auto rounded-xl" />
            <img src={logo3} alt="Brand 3" className="w-56 h-auto rounded-xl" />
            <img src={logo5} alt="Brand 5" className="w-56 h-auto rounded-xl" />
            <img src={logo6} alt="Brand 6" className='w-56 h-auto rounded-xl' />
            <img src={logo7} alt="Brand 7" className='w-56 h-auto rounded-xl' />
            <img src={logo8} alt="Brand 8" className='w-56 h-auto rounded-xl' />
            </div>
        </div>
       </section>
       
    </>
  )
}

export default HomeBrand