import React from 'react'
import img from "../../public/images/aboutus/WhatLadwaImage.png"
import Image from 'next/image'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
    variable: "--font-manrope",
	subsets: ["latin"],
})

const WhatLadwaStandsFor = () => {
    return (
        <div className='w-full max-w-full mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto items-center'>
                <div className=' p-6 lg:p-8 xl:p-12'>
                    <div className='space-y-6 lg:space-y-8'>
                        <div className='border-b border-black pb-3 '>
                            <h2 className={`text-black text-xl sm:text-2xl items-center gap-2 flex lg:text-[32px] font-medium ${manrope.className}`}>
                                <span className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold '>L</span>eadership in safety innovation
                            </h2>
                        </div>
                        <div className='border-b border-black pb-3'>
                        <h2 className={`text-black text-xl sm:text-2xl items-center flex gap-2 lg:text-[32px] font-medium ${manrope.className}`}>
                        <span className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>A</span>ssurance of quality and compliance
                            </h2>
                        </div>
                        <div className='border-b border-black pb-3'>
                        <h2 className={`text-black text-xl sm:text-2xl items-center flex gap-2 lg:text-[32px] font-medium ${manrope.className}`}>
                        <span className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>D</span>ependability in every solution
                            </h2>
                        </div>
                        <div className='border-b border-black pb-3'>
                        <h2 className={`text-black text-xl sm:text-2xl items-center flex gap-2 lg:text-[32px] font-medium ${manrope.className}`}>
                        <span className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>W</span>orldwide reach with Indian roots
                            </h2>
                        </div>
                        <div className='border-b border-black pb-3'>
                        <h2 className={`text-black text-xl sm:text-2xl items-center flex gap-2 lg:text-[32px] font-medium ${manrope.className}`}>
                        <span className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>A</span>ccountability to people and planet
                            </h2>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='xl:text-[45px] text-3xl md:text-5xl md:text-center font-bold'>What <span className=' text-transparent' style={{
                        WebkitTextStroke: '2px black',
                        textStroke: '2px black'
                    }}>LADWA</span> Stands For</h1>
                    <Image src={img} alt='image' className='xl:w-[40vw] w-[70vw] mx-auto rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default WhatLadwaStandsFor