import React from 'react'
import { testimonials } from '../constants'

export default function Testimonilas() {
  return (
    <div className='mt-10 sm:mt-20 tracking-wide'>
      <h1 className='text-center text-3xl sm:5xl my-10 sm:my-20 lg:text-6xl'>What People are saying</h1>
      <div className='flex flex-wrap justify-center '>
        {/* testimonilas */}
        {testimonials.map(({user, company, image, text}, index) => (
            <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                <div className='bg-neutral border  border-neutral-700 p-6 rounded-lg text-md font-thin'>
                    <p className='mb-8 leading-7 '>{text}</p>
                    <div className='flex items-start'>
                        <img className='w-12 h-12 rounded-full border-2 border-neutral-300' src={image} alt={user} />
                        <div className='flex flex-col ml-4'>
                            <h6>{user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{company}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
