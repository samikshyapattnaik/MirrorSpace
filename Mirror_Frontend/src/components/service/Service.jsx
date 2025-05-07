import React from 'react'
import { useNavigate } from 'react-router-dom'
import kitchenImg from '../../assets/kitchen.jpeg'
import hallImg from '../../assets/Hall.jpeg'
import commercialImg from '../../assets/commercial_interiors.jpeg'
import bathroomImg from '../../assets/bathroom.jpeg'
import livingroomImg from '../../assets/livingroom.jpeg'
import residentialImg from '../../assets/residential.jpeg'

const services = [
  {
    title: 'KITCHEN INTERIORS',
    description:
      'Our materials are sourced from trusted suppliers and tested for durability, moisture resistance, and daily wear — perfect for long-lasting kitchens.',
    image: kitchenImg,
    path: '/kitchen', //  add path for navigation
  },
  {
    title: 'HALL INTERIORS',
    description:
      'Elegant finishes that impress — from matte wood panels to glossy wall claddings, our materials elevate your living room with a luxurious, welcoming feel.',
    image: hallImg,
    path: '/hall', //  add path for navigation
  },
  {
    title: 'COMMERCIAL INTERIORS',
    description:
      'Create impressive workspaces with materials that combine sleek aesthetics and high-performance finishes — perfect for offices, showrooms, and retail spaces.',
    image: commercialImg,
    path: '/commercial', //  add path for navigation
  },
  {
    title: 'BATHROOM INTERIORS',
    description:
      'Stylish & functional designs — our bathroom products blend elegance with everyday practicality, from sleek vanities to modern fixtures.',
    image: bathroomImg,
    path: '/bathroom', //  add path for navigation
  },
  {
    title: 'HOUSE INTERIORS',
    description:
      'Aesthetic appeal for every room — from cozy living rooms to elegant bedrooms, our materials suit every part of your home.',
    image: livingroomImg,
    path: '/home', //  add path for navigation
  },
  {
    title: 'RESIDENTIAL INTERIORS',
    description:
      'Whether you love minimal, traditional, or contemporary designs, we offer materials that match your personal taste and elevate every room.',
    image: residentialImg,
    path: '/residential', //  add path for navigation
  },
]

const Service = () => {
  const navigate = useNavigate()
  return (
    <section className='container mx-auto mb-10 py-8 px-4 bg-slate-200 dark:bg-slate-900 dark:text-white'>
      <h1 className='mb-8 border-l-8 border-black py-2 pl-4 text-center text-3xl font-bold'>
        Our Latest Services
      </h1> 
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10  bg-slate-200 dark:bg-slate-900 dark:text-white'>
        {services.map((service, index) => (
          <div
            key={index}
            className=' shadow-lg rounded-lg overflow-hidden p-4  bg-slate-200 dark:bg-slate-700 dark:text-white'
          >
            <div className='relative group overflow-hidden rounded-lg'>
              {/* Image with hover effect */}
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-48 object-cover rounded-lg '
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
              <button
                  className='bg-red-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-black-200'
                  onClick={() => navigate(service.path)} // 👈 navigate to the path
                >
                  View More
                </button>
              </div>
            </div>
            <h2 className='text-xl font-semibold mt-4  bg-slate-200 dark:bg-slate-700 dark:text-white '>{service.title}</h2>
            <p className='text-gray-600 mt-2  bg-slate-200 dark:bg-slate-700 dark:text-white' >{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
