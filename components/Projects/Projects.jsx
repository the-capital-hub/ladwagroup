"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import rightImg from "../../public/images/projects/topimg1.png"
import gridimg1 from "../../public/images/projects/grid_img1.png"
import gridimg2 from "../../public/images/projects/grid_img2.png"
import gridimg3 from "../../public/images/projects/grid_img3.png"
import leftImg from "../../public/images/projects/topimg1.png"
import grid1img1 from "../../public/images/projects/grid2img1.png"
import grid2img2 from "../../public/images/projects/grid2img2.png"
import grid3img3 from "../../public/images/projects/grid2img3.png"
import topimg2 from "../../public/images/projects/topimg2.png"
import midimg from "../../public/images/projects/middleimg.png"
import baricade from "../../public/images/projects/baricade.png"

import { Outfit } from 'next/font/google'

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const Project1 = () => {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail('')
            // Add your subscription logic here
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <div className={`${outfit.className} w-full max-w-full bg-gray-50 py-12 px-4 relative`}>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-[64px] font-bold text-center mb-8'>Projects</h1>
                <div className='flex flex-col lg:flex-row items-start gap-8 mb-12'>
                    {/* Left Content */}
                    <div className='flex-1'>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className='flex-shrink-0'>
                                <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                    1
                                </h1>
                            </div>
                            <div className='flex-1 w-full max-w-lg'>
                                <h2 className='text-2xl md:text-[37px] font-semibold text-black'>
                                    Vaishnavi Tech Park<br /> Parking Safety Works by<br /> LADWA
                                </h2>
                            </div>
                        </div>
                        <div className='pl-6 w-full max-w-xl'>
                            <p className='text-gray-600 md:text-[20px] leading-relaxed'>
                                At LADWA, we are dedicated to redefining safety through cutting-edge road safety solutions, industrial protection, and PPE innovation. As a pioneer in the EHS industry, we combine global compliance with local insight to protect lives and promote road safety awareness across communities.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='flex-shrink-0'>
                        <div className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'>
                            <Image
                                src={rightImg}
                                alt='Vaishnavi Tech Park project'
                                className='lg:w-[90vh] rounded-xl'
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Grid Images */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={gridimg1}
                            alt='Construction workers with safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                        />
                    </div>

                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={gridimg2}
                            alt='Safety cones and road equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </div>

                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={gridimg3}
                            alt='Industrial road safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </div>
                </div>
                <div className='border border-[#097362] my-12'></div>
                {/* Project 2 */}
                <div className='max-w-7xl mx-auto  bg-gray-100 p-4 rounded-2xl'>
                    {/* Top Section - Reversed Layout */}
                    <div className='flex flex-col lg:flex-row-reverse items-start gap-8 mb-12'>
                        {/* Right Content */}
                        <div className='flex-1'>
                            <div className='flex items-center gap-6 mb-6'>
                                <div className='flex-shrink-0'>
                                    <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                        2
                                    </h1>
                                </div>
                                <div className='flex-1 w-full max-w-lg'>
                                    <h2 className='text-2xl md:text-[37px] font-semibold text-black'>
                                        Solar Energy Implementation at Green Valley Residential Complex
                                    </h2>
                                </div>
                            </div>
                            <div className='pl-6 w-full max-w-xl'>
                                <p className='text-gray-600 md:text-[20px] leading-relaxed'>
                                    This project showcases LADWA's commitment to sustainability and innovation, integrating solar solutions to enhance energy efficiency for residents.                                </p>
                            </div>
                        </div>

                        {/* Left Image */}
                        <div className='flex-shrink-0'>
                            <div className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'>
                                <Image
                                    src={leftImg}
                                    alt='Second project'
                                    className='lg:w-[90vh] rounded-xl'
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Grid Images */}
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className=' rounded-2xl overflow-hidden'>
                            <Image
                                src={grid1img1}
                                alt='Project 2 image 1'
                                className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                            />
                        </div>

                        <div className=' rounded-2xl overflow-hidden'>
                            <Image
                                src={grid2img2}
                                alt='Project 2 image 2'
                                className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                            />
                        </div>

                        <div className=' rounded-2xl overflow-hidden'>
                            <Image
                                src={grid3img3}
                                alt='Project 2 image 3'
                                className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className='border border-[#097362] my-12'></div>
                {/* Project 3 */}
                <div className='flex flex-col lg:flex-row items-start gap-8 my-12'>
                    {/* Left Content */}
                    <div className='flex-1'>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className='flex-shrink-0'>
                                <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                    3
                                </h1>
                            </div>
                            <div className='flex-1 w-full max-w-lg'>
                                <h2 className='text-2xl md:text-[37px] font-semibold text-black'>
                                    Smart Water Management System for Urban City
                                </h2>
                            </div>
                        </div>
                        <div className='pl-6 w-full max-w-xl'>
                            <p className='text-gray-600 md:text-[20px] leading-relaxed'>
                                At LADWA, we are dedicated to redefining safety through cutting-edge road safety solutions, industrial protection, and PPE innovation. As a pioneer in the EHS industry, we combine global compliance with local insight to protect lives and promote road safety awareness across communities.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='flex-shrink-0'>
                        <div className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'>
                            <Image
                                src={topimg2}
                                alt='Vaishnavi Tech Park project'
                                className='lg:w-[90vh] w-[100vh] rounded-xl'
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Grid Images */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={gridimg2}
                            alt='Construction workers with safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </div>

                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={midimg}
                            alt='Safety cones and road equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                        />
                    </div>

                    <div className=' rounded-2xl overflow-hidden'>
                        <Image
                            src={grid2img2}
                            alt='Industrial road safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </div>
                </div>
            </div>
{/*News letter ui*/}
            <div className='relative z-40 mt-16 mb-[-90px] flex'>
                <div className='max-w-4xl mx-auto px-4 w-full'>
                    <div className='bg-[#097367] rounded-3xl p-6 lg:p-8 shadow-xl relative overflow-visible'>

                        <div className='hidden lg:block absolute left-0 bottom-3 w-[350px] h-[120%] pointer-events-none z-20'>
                            <Image
                                src={baricade}
                                alt='Safety baricade'
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Content */}
                        <div className='relative z-10 lg:ml-80'>
                            <div className='flex flex-col gap-6'>

                                {/* Text Content */}
                                <div className='max-w-lg text-center lg:text-left mx-auto lg:mx-0'>
                                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight'>
                                        Subscribe to our newsletter for the latest updates and insights.
                                    </h3>
                                    <p className='text-white/80 text-base leading-relaxed'>
                                        Stay ahead with the latest updates, insights, and events from Meqaul Magazine.
                                    </p>
                                </div>

                                {/* Form */}
                                <div className='w-full max-w-md mx-auto lg:mx-0'>
                                    <form onSubmit={handleSubscribe} className='relative'>
                                        <div className='relative'>
                                            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white'>
                                                @
                                            </span>
                                            <input
                                                type='email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='Enter your email'
                                                className='w-full lg:w-[28vw] pl-12 pr-28 py-3 rounded-full border-0 bg-black backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white'
                                                required
                                            />
                                            <button
                                                type='submit'
                                                className='absolute right-2 lg:right-18 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white text-[#2D5A52] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 text-sm'
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                    {isSubscribed && alert("Thanks for subscribing")}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project1