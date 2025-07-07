import Image from 'next/image'
import React from 'react'
import img from "../../public/images/aboutus/our-vision-img.png"
import bulb from "../../public/images/aboutus/bulb.png"
import { Outfit } from 'next/font/google'

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});


const OurVision = () => {
    return (
        <div className='w-full max-w-full mx-auto'>
            <div className=' flex justify-between flex-col md:flex-row max-w-7xl mx-auto gap-6  my-12 items-center w-full px-4 md:px-6 lg:px-1'>
                <div className=' xl:w-[40vw] w-full md:w-auto rounded-3xl'>
                    <Image src={img} alt="our vision image" className='rounded-3xl w-full h-auto' />
                </div>
                <div className='flex flex-col w-full md:w-[48vw] justify-center items center gap-6 sm:gap-8 md:gap-12'>
                    <div className='bg-gradient-to-b  from-[#A2FFF0] to-white p-1 rounded-3xl w-full'>
                        <div className='flex justify-center w-full items-center py-2 gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-white to-[#9FFFF0] rounded-3xl md:w-[48vw]  px-3 sm:px-4 flex-col sm:flex-row'>
                            <Image src={bulb} alt=" abulb icon" className='w-12 h-12 sm:w-16 sm:h-16 md:w-[4vw] md:h-[8vh] flex-shrink-0'/>
                            <div className='text-center sm:text-left'>
                            <h1 className='text-lg sm:text-xl md:text-[24px] font-semibold mb-2'>Our Vision</h1>
                            <p className={`text-xs sm:text-sm md:text-[16px] ${outfit.className}` }>To be the leading Indian brand with a global footprint in Environment, Health, and Safety solutions—championing innovation, setting safety standards, and shaping a world where every workplace, road, and community is safer and more sustainable.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl '>
                    <div className='flex justify-center items-center w-full py-2 gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-white to-[#9FFFF0] rounded-3xl md:w-[48vw]  px-3 sm:px-4 md:px-5 flex-col sm:flex-row'>
                            <Image src={bulb} alt=" abulb icon" className='w-12 h-12 sm:w-16 sm:h-16 md:w-[4vw] md:h-[8vh] flex-shrink-0'/>
                            <div className='text-center sm:text-left'>
                            <h1 className='text-lg sm:text-xl md:text-[24px] font-semibold mb-2'>Our Mision</h1>
                            <p className={`text-xs sm:text-sm md:text-[16px] ${outfit.className}` }>LADWA is dedicated to delivering reliable, innovative, and affordable EHS solutions. We strive to safeguard lives through high-quality products, service excellence, and impactful awareness campaigns that foster a global culture of safety and responsibility.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVision