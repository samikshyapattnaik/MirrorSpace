import React from 'react'
import { SlNote } from "react-icons/sl";
import { MdOutlineHighQuality } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

const SkiillsDate =[
   {
    name:"Experience",
    icon:(
        <SlNote className='text-5xl text-orange-600 group-hover:text-black duration-300'/>
    
    ),
   
    Link:"#",
    Description:"We have over 10 years of experience in the field, ensuring that we understand the nuances of our industry and can provide top-notch service to our clients.",
    aosDelay:"0",
   },
    {
     name:"Quality",
     icon:(
          <MdOutlineHighQuality  className='text-5xl text-orange-600 group-hover:text-black duration-300'/>
     
     ),
     Link:"#",
     Description:"We prioritize quality in every project we undertake, ensuring that our clients receive the best possible results.",
     aosDelay:"200",
    },
    {
     name:"Customer Service",
     icon:(
          <MdMiscellaneousServices  className='text-5xl text-orange-600 group-hover:text-black duration-300'/>
     
     ),
     Link:"#",
     Description:"Our customer service team is always ready to assist you with any inquiries or concerns you may have.",
     aosDelay:"400",
    },
    {
     name:"Innovation",
     icon:(
          <MdOutlineLocalOffer className='text-5xl text-orange-600 group-hover:text-black duration-500'/>
     
     ),
     Link:"#",
     Description:"We embrace innovation and continuously seek new ways to improve our services and offerings.",
     aosDelay:"600",
    }
]
const About = () => {
  return (
    <div className="py-14 dark:bg:black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center ">
        <div className="container bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className="pb-12">
            <h1 className='text-3xl front-semibold text-center font-serif sm:text-4xl group-hover:text-white  '>Why Choose Us</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {
              SkiillsDate.map((skill)=>(
                <div key={skill.name} 
                data-aos="fade-up" 
                data-aos-delay={skill.aosDelay} 
                // className='card texcenter group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg'>
                 className='group flex flex-col items-center justify-center gap-4 p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-300 dark:bg-slate-800 dark:border-slate-700'>
                    <div className='text-5xl text-primary group-hover:text-black duration-300'>{skill.icon}</div>
                    <h1 className='text-2xl font-semibold'>{skill.name}</h1>
                    <p className='text-slate-600 dark:text-slate-400'>{skill.Description}</p>
                    <a href={skill.Link} className='text-primary hover:text-blue-600'>Learn More</a>

                </div>
              ))  
            }
        </div>
    </div>
    </div>
  )
}

export default About