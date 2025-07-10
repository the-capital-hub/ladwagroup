"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import heroimg from "../../public/images/NewHome/HeroImg.png";

import { Inter, Outfit } from 'next/font/google';

const outfit = Outfit({
    variable:"--font-outfit",
    subsets:["latin"]

})
 const inter = Inter ({
	variable:"--font-outfit",
    subsets:["latin"]

 })
export default function HeroSection() {
    return (
        <section className="w-full lg:min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-full lg:h-screen max-w-7xl ">
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full lg:p-3 p-5 mx-auto lg:mt-5 overflow-hidden ">
                    <Image 
                        src={heroimg} 
                        alt="LADWA Safety Professional" 
                        className="w-full h-full  rounded-3xl"
                        
                        priority
                    />
                   
               
                </div>

                {/* Content Container */}
                <div className="relative w-full h-full z-10 flex">
                    {/* Left Side - Vertical Navigation */}
                    <motion.div
                        className="flex flex-col justify-center items-center py-8 px-4 sm:px-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Navigation Numbers */}
                        <div className={`${outfit.className} flex flex-col items-center relative left-5 lg:left-12 space-y-8 lg:space-y-12`}>
                            <div className="relative flex flex-col items-center  top-12">
                                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-black font-bold text-sm sm:text-lg border-2 border-white border-opacity-40 backdrop-blur-sm">
                                    1
                                </div>
                                {/* Connecting line */}
                                <div className="w-0.5 h-14 sm:h-20 bg-white bg-opacity-30 "></div>
                            </div>
                            
                            <div className="relative flex flex-col items-center">
                                <div className="w-8 h-8  rounded-full  bg-opacity-10 flex items-center justify-center text-white font-bold text-sm sm:text-lg border-2 border-white border-opacity-20 backdrop-blur-sm">
                                    2
                                </div>
                                {/* Connecting line */}
                                <div className="w-0.5 h-14 sm:h-20 bg-white bg-opacity-30 "></div>
                            </div>
                            
                            <div className="relative flex flex-col items-center bottom-12">
                                <div className="w-8 h-8  rounded-full  bg-opacity-10 flex items-center justify-center text-white font-bold text-sm sm:text-lg border-2 border-white border-opacity-20 backdrop-blur-sm">
                                    3
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex-1 flex items-center justify-start px-4 sm:px-8 lg:px-16 py-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-full max-w-4xl"
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-[80px] font-bold text-white mb-4 sm:mb-6 leading-tight">
                                LADWA
                                <br />
								<span className="font-thin">
                                Making The World Safer.</span>
                            </h1>
                            <p className={`text-base md:text-lg md:text-[22px] text-gray-200 mb-6 sm:mb-8 max-w-2xl ${inter.className}`}>
                                India's Leading EHS Innovator. Trusted Globally.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-b from-[#097362] to-[#0FA78E] hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Action Button */}
                <motion.div
                    className="absolute bottom-3 right-0.5 lg:bottom-0 lg:right-8  z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <div className="w-12 h-12 lg:w-22 lg:h-22 bg-gradient-to-r from-[#1A907D] to-[#029981]  rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl hover:bg-teal-700 transition-all duration-300 cursor-pointer hover:scale-110">
                        <ArrowUpRight className="w-6 h-6 lg:w-12 lg:h-12" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}