"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const staggerItem = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
}

const numberAnimation = {
    initial: { opacity: 0, scale: 0.5, rotate: -10 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
}

const Project1 = () => {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setIsLoading(true)
            
        
            setTimeout(() => {
                setIsLoading(false)
                setShowSuccess(true)
                setEmail('')
                
     
                setTimeout(() => {
                    setShowSuccess(false)
                }, 2000)
            }, 1500) 
        }
    }

    return (
        <div className={`${outfit.className} w-full max-w-full  px-4 relative`}>
            <div className='max-w-7xl mx-auto'>
                {/* Main Title */}
                <motion.h1 
                    className='text-[64px] font-bold text-center mb-8'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Projects
                </motion.h1>

                {/* Project 1 */}
                <motion.div 
                    className='flex flex-col lg:flex-row items-start gap-8 mb-12'
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Content */}
                    <motion.div className='flex-1' variants={fadeInLeft}>
                        <div className='flex items-center gap-6 mb-6'>
                            <motion.div className='flex-shrink-0' variants={numberAnimation}>
                                <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                    1
                                </h1>
                            </motion.div>
                            <motion.div 
                                className='flex-1 w-full max-w-lg'
                                variants={fadeInUp}
                            >
                                <h2 className='text-2xl md:text-4xl font-semibold text-black'>
                                    Vaishnavi Tech Park<br /> Parking Safety Works by<br /> LADWA
                                </h2>
                            </motion.div>
                        </div>
                        <motion.div 
                            className='pl-6 w-full max-w-xl'
                            variants={fadeInUp}
                        >
                            <p className='text-gray-600 md:text-[20px] text-sm leading-relaxed'>
                                At LADWA, we are dedicated to redefining safety through cutting-edge road safety solutions, industrial protection, and PPE innovation. As a pioneer in the EHS industry, we combine global compliance with local insight to protect lives and promote road safety awareness across communities.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div className='flex-shrink-0' variants={scaleIn}>
                        <motion.div 
                            className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={rightImg}
                                alt='Vaishnavi Tech Park project'
                                className='lg:w-[90vh] rounded-xl'
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom Grid Images - Project 1 */}
                <motion.div 
                    className='flex flex-col md:flex-row gap-4'
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={gridimg1}
                            alt='Construction workers with safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                        />
                    </motion.div>

                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={gridimg2}
                            alt='Safety cones and road equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </motion.div>

                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={gridimg3}
                            alt='Industrial road safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div 
                    className='border border-[#097362] my-8'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Project 2 */}
                <motion.div 
                    className='max-w-7xl mx-auto bg-gray-100 p-4 rounded-2xl'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Top Section - Reversed Layout */}
                    <motion.div 
                        className='flex flex-col lg:flex-row-reverse items-start gap-8 mb-12'
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Right Content */}
                        <motion.div className='flex-1' variants={fadeInRight}>
                            <div className='flex items-center gap-6 mb-6'>
                                <motion.div className='flex-shrink-0' variants={numberAnimation}>
                                    <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                        2
                                    </h1>
                                </motion.div>
                                <motion.div 
                                    className='flex-1 w-full max-w-lg'
                                    variants={fadeInUp}
                                >
                                    <h2 className='text-2xl md:text-4xl font-semibold text-black'>
                                        Solar Energy Implementation at Green Valley Residential Complex
                                    </h2>
                                </motion.div>
                            </div>
                            <motion.div 
                                className='pl-6 w-full max-w-xl'
                                variants={fadeInUp}
                            >
                                <p className='text-gray-600 md:text-xl text-sm leading-relaxed'>
                                    This project showcases LADWA's commitment to sustainability and innovation, integrating solar solutions to enhance energy efficiency for residents.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Left Image */}
                        <motion.div className='flex-shrink-0' variants={scaleIn}>
                            <motion.div 
                                className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={leftImg}
                                    alt='Second project'
                                    className='lg:w-[90vh] rounded-xl'
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Grid Images - Project 2 */}
                    <motion.div 
                        className='flex flex-col md:flex-row gap-4'
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div 
                            className='rounded-2xl overflow-hidden'
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={grid1img1}
                                alt='Project 2 image 1'
                                className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                            />
                        </motion.div>

                        <motion.div 
                            className='rounded-2xl overflow-hidden'
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={grid2img2}
                                alt='Project 2 image 2'
                                className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                            />
                        </motion.div>

                        <motion.div 
                            className='rounded-2xl overflow-hidden'
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={grid3img3}
                                alt='Project 2 image 3'
                                className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div 
                    className='border border-[#097362] my-8'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Project 3 */}
                <motion.div 
                    className='flex flex-col lg:flex-row items-start gap-8 my-12'
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Content */}
                    <motion.div className='flex-1' variants={fadeInLeft}>
                        <div className='flex items-center gap-6 mb-6'>
                            <motion.div className='flex-shrink-0' variants={numberAnimation}>
                                <h1 className='text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-gradient-to-b from-[#097362] to-[#ffffff] bg-clip-text text-transparent leading-none'>
                                    3
                                </h1>
                            </motion.div>
                            <motion.div 
                                className='flex-1 w-full max-w-lg'
                                variants={fadeInUp}
                            >
                                <h2 className='text-2xl md:text-4xl  font-semibold text-black'>
                                    Smart Water Management System for Urban City
                                </h2>
                            </motion.div>
                        </div>
                        <motion.div 
                            className='pl-6 w-full max-w-xl'
                            variants={fadeInUp}
                        >
                            <p className='text-gray-600 md:text-xl text-sm leading-relaxed'>
                                At LADWA, we are dedicated to redefining safety through cutting-edge road safety solutions, industrial protection, and PPE innovation. As a pioneer in the EHS industry, we combine global compliance with local insight to protect lives and promote road safety awareness across communities.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div className='flex-shrink-0' variants={scaleIn}>
                        <motion.div 
                            className='border-2 border-[#097362]/20 p-2 rounded-2xl bg-white shadow-lg'
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={topimg2}
                                alt='Smart Water Management project'
                                className='lg:w-[90vh] w-[100vh] rounded-xl'
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom Grid Images - Project 3 */}
                <motion.div 
                    className='flex flex-col md:flex-row gap-4'
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={gridimg2}
                            alt='Construction workers with safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </motion.div>

                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={midimg}
                            alt='Safety cones and road equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[90vh] object-cover'
                        />
                    </motion.div>

                    <motion.div 
                        className='rounded-2xl overflow-hidden'
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={grid2img2}
                            alt='Industrial road safety equipment'
                            className='w-full h-[200px] md:h-[250px] md:w-[65vh] object-cover'
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Newsletter Section */}
            <motion.div 
                className='relative z-40 mt-16 mb-[-90px] flex'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='max-w-4xl mx-auto px-4 w-full'>
                    <motion.div 
                        className='bg-[#097367] rounded-3xl p-6 lg:p-8 shadow-xl relative overflow-visible'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className='hidden lg:block absolute left-0 bottom-3 w-[350px] h-[120%] pointer-events-none z-20'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image
                                src={baricade}
                                alt='Safety baricade'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>

                        {/* Content */}
                        <div className='relative z-10 lg:ml-80'>
                            <motion.div 
                                className='flex flex-col gap-6'
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                {/* Text Content */}
                                <motion.div 
                                    className='max-w-lg text-center lg:text-left mx-auto lg:mx-0'
                                    variants={staggerItem}
                                >
                                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight'>
                                        Subscribe to our newsletter for the latest updates and insights.
                                    </h3>
                                    <p className='text-white/80 text-base leading-relaxed'>
                                        Stay ahead with the latest updates, insights, and events from Meqaul Magazine.
                                    </p>
                                </motion.div>

                                {/* Form */}
                                <motion.div 
                                    className='w-full max-w-md mx-auto lg:mx-0'
                                    variants={staggerItem}
                                >
                                    <form onSubmit={handleSubscribe} className='relative'>
                                        <motion.div 
                                            className='relative'
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className={`relative w-full h-12 rounded-full bg-black backdrop-blur-sm overflow-hidden`}
                                                layout
                                            >
                                                {/* Loading State */}
                                                <motion.div
                                                    className='absolute inset-0 flex items-center justify-center'
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ 
                                                        opacity: isLoading ? 1 : 0,
                                                        scale: isLoading ? 1 : 0.8
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <motion.div
                                                        className='w-6 h-6 border-2 border-white border-t-transparent rounded-full'
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                </motion.div>

                                                {/* Success State */}
                                                <motion.div
                                                    className='absolute inset-0 flex items-center justify-center'
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ 
                                                        opacity: showSuccess ? 1 : 0,
                                                        scale: showSuccess ? 1 : 0.5
                                                    }}
                                                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                                                >
                                                    <motion.div
                                                        className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ 
                                                            scale: showSuccess ? 1 : 0,
                                                            rotate: showSuccess ? 0 : -180
                                                        }}
                                                        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                                                    >
                                                        <motion.svg
                                                            className='w-5 h-5 text-white'
                                                            fill='none'
                                                            stroke='currentColor'
                                                            viewBox='0 0 24 24'
                                                            initial={{ pathLength: 0 }}
                                                            animate={{ pathLength: showSuccess ? 1 : 0 }}
                                                            transition={{ duration: 0.6, delay: 0.2 }}
                                                        >
                                                            <motion.path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                strokeWidth={2}
                                                                d='M5 13l4 4L19 7'
                                                            />
                                                        </motion.svg>
                                                    </motion.div>
                                                </motion.div>

                                                {/* Normal State */}
                                                <motion.div
                                                    className='absolute inset-0'
                                                    initial={{ opacity: 1 }}
                                                    animate={{ 
                                                        opacity: (isLoading || showSuccess) ? 0 : 1,
                                                        scale: (isLoading || showSuccess) ? 0.9 : 1
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white'>
                                                        @
                                                    </span>
                                                    <input
                                                        type='email'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder='Enter your email'
                                                        className='w-full h-full pl-12 pr-28 bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white rounded-full'
                                                        required
                                                        disabled={isLoading || showSuccess}
                                                    />
                                                    <motion.button
                                                        type='submit'
                                                        className='absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white text-[#2D5A52] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed'
                                                        whileHover={{ scale: isLoading || showSuccess ? 1 : 1.05 }}
                                                        whileTap={{ scale: isLoading || showSuccess ? 1 : 0.95 }}
                                                        disabled={isLoading || showSuccess}
                                                    >
                                                        {isLoading ? 'Loading...' : 'Subscribe'}
                                                    </motion.button>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </form>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Project1