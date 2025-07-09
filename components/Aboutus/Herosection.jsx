import Image from 'next/image'
import React from 'react'
import heroimg from "../../public/images/aboutus/hero image.png"
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const Herosection = () => {
  return (
    <div className='w-full max-w-full mx-auto'>
      <div className='w-full max-w-7xl mx-auto relative'>
        <Image src={heroimg} alt="hero image" className='rounded-3xl w-full h-auto object-cover' priority />

        {/* Text overlay */}
        <div className='absolute inset-0 bg-black/50  rounded-3xl flex flex-col justify-center items-center sm:items-start p-4 sm:p-8 md:p-12 lg:p-16 text-center sm:text-left lg:min-h-[400px]'>
          <div className='text-white w-full'>
            <p className='text-xs sm:text-base md:text-[32px] font-bold mb-2 sm:mb-4 tracking-wide'>
              ABOUT US
            </p>

            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] font-bold mb-4 sm:mb-6 leading-tight'>
              <span className='block mb-1 sm:mb-2 text-transparent' style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white'
              }}>
                LADWA
              </span>
              <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[70px] font-bold leading-tight'>
                Defining Safety. Delivering Trust.
              </span>
            </h1>

            <p className={`text-xs sm:text-sm md:text-[20px] leading-relaxed text-gray-200 ${outfit.className}`}>
              LADWA is a pioneer and leader in the Environment, Health, and Safety (EHS) sector, providing high-quality safety products and services across India and global markets. Our name is synonymous with innovation, compliance, and uncompromised quality in road safety, industrial safety, fire protection, and personal protective equipment (PPE).
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Herosection
