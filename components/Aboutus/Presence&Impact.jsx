import React from 'react'
import Image from "next/image"
import map1 from "../../public/images/aboutus/map.png"
import globe from "../../public/images/aboutus/globe.png"
import trust from "../../public/images/aboutus/trust.png"
import map2 from "../../public/images/aboutus/map.png"

const Presence = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
     
      <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-gray-900 text-center mb-8 md:mb-12">
        Presence & Impact
      </h2>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className='bg-gradient-to-b from-[#A2FFF0] h-[22vh] to-[#fffff] p-1 rounded-2xl'>
        {/* Card 1*/}
        <div className="bg-gradient-to-r  from-[#ffffff] gap-4 to-[#9FFFF0]/20 rounded-2xl h-[20vh] items-center p-6 md:p-5 flex  space-y-4">
          <div className="w-10 h-10 md:w-12 md:h-13 flex-shrink-0">
            <Image
              src={map1}
              alt="PAN India distribution network"
              width={54}
              height={54}
              className="w-full h-full object-contain"
            />
            </div>
            <h3 className="text-lg md:text-[18px] font-semibold text-gray-900 leading-tight">
              PAN India distribution network
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-gradient-to-b from-[#A2FFF0] h-[22vh] to-[#fffff] p-1 rounded-2xl'>
        <div className="bg-gradient-to-r  from-[#ffffff] gap-4 to-[#9FFFF0]/20 rounded-2xl p-6 md:p-5 h-[20vh] flex items-center  space-y-4">
          <div className="w-12 h-12 md:w-16 md:h-13 flex-shrink-0">
            <Image
              src={globe}
              alt="Global exports to over 20 countries"
              width={54}
              
              className="w-full h-full object-contain"
            />
          </div>
            <h3 className="text-lg md:text-[18px] font-semibold text-gray-900 leading-tight">
              Global exports to over <br className='md:block hidden'/>20 countries
            </h3>
         
        </div>
</div>
        {/* Card 3  */}
        <div className='bg-gradient-to-b from-[#A2FFF0] h-[22vh] to-[#fffff] p-1 rounded-2xl'>
        <div className="bg-cyan-50 rounded-2xl p-6 md:p-5 h-[20vh] w- gap-4 items-center flex space-y-4">
          <div className="w-10 h-10 md:w-12 md:h-13 flex-shrink-0">
            <Image
              src={trust}
              alt="Trusted by industries, governments & corporates"
              width={54}
              className="w-full h-full object-contain"
            />
          </div>
            <h3 className="text-lg md:text-[18px] font-semibold text-gray-900 leading-tight">
              Trusted by industries, governments & corporates
            </h3>
          </div>
        </div>

        {/* Card 4  */}
        <div className='bg-gradient-to-b from-[#A2FFF0] h-[22vh] to-[#fffff] p-1 rounded-2xl md:col-span-2 lg:col-span-1 lg:col-start-2'>

        <div className="bg-cyan-50 rounded-2xl p-6 md:p-5 gap-4 h-[20vh] flex items-center space-y-4 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <div className="w-10 h-10 md:w-12 md:h-13 flex-shrink-0">
            <Image
              src={map2}
              alt="Proud contributor to India's Make in India initiative"
              width={54}
              className="w-full h-full object-contain"
            />
          </div>
            <h3 className="text-lg md:text-[18px] font-semibold text-gray-900 leading-tight">
              Proud contributor to India's "Make in India" initiative
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presence