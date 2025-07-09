import React from 'react'
import Image from "next/image"
import ball from "@/public/images/NewHome/3d ball.png"
import img1 from "@/public/images/NewHome/Picture2.png"
import img2 from "@/public/images/NewHome/Picture3.png"
import img3 from "@/public/images/NewHome/Picture4.png"
import img4 from "@/public/images/NewHome/Picture5.png"
import img5 from "@/public/images/NewHome/Picture6.png"

const Carousel = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto bg-white">      
      {/* Main carousel container */}
      <div className="relative py-8 px-4">
        {/* Images container */}
        <div className="flex items-center justify-center lg:gap-12 gap-5 max-w-7xl mx-auto">
          {/* First image - grayscale */}
          <div className="relative">
            <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-[25vw] lg:h-[70vh] rounded-[30px] overflow-hidden">
              <Image
                src={img1}
                alt="Gallery image 1"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          
          {/* Second image - grayscale */}
          <div className="relative">
            <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-[25vw] lg:h-[70vh] rounded-[30px] overflow-hidden">
              <Image
                src={img2}
                alt="Gallery image 2"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-60 p-1  lg:w-[28vw] lg:h-[75vh] rounded-[30px] overflow-hidden shadow-lg"
             style={{
                background: 'linear-gradient(to bottom, #097362, #ffffff)'
              }}
            >
              <Image
                src={img3}
                alt="Gallery image 3"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
          
          {/* Fourth image - grayscale */}
          <div className="relative">
            <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-[25vw] lg:h-[70vh]  rounded-[30px] overflow-hidden">
              <Image
                src={img4}
                alt="Gallery image 4"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          
          {/* Fifth image - grayscale */}
          <div className="relative">
            <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-[25vw] lg:h-[70vh]  rounded-[30px] overflow-hidden">
              <Image
                src={img5}
                alt="Gallery image 5"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
        
        {/* 3D Ball positioned at bottom center of middle image */}
        <div className="absolute -bottom-5 lg:-bottom-22 left-1/2 transform -translate-x-1/2  z-0">
          <div className="w-[20vw] h-[20vh] md:w-[40vw] md:h-[40vh]">
            <Image
              src={ball}
              alt="3D Ball"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;