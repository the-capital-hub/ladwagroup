import React from 'react'

const CoreValues = () => {
  const values = [
    {
      number: "1",
      title: "Quality First",
      description: "Consistently delivering products that meet or exceed global standards"
    },
    {
      number: "2", 
      title: "Reliability",
      description: "Proven performance under real-world conditions"
    },
    {
      number: "3",
      title: "Innovation", 
      description: "Embracing technology to redefine safety"
    },
    {
      number: "4",
      title: "Customer-Centric",
      description: "Tailored solutions that prioritize safety needs"
    },
    {
      number: "5",
      title: "Integrity",
      description: "Ethical practices and transparent communication"
    },
    {
      number: "6",
      title: "Global Vision",
      description: "Scaling Indian safety innovations to the world stage"
    }
  ]

  return (
    <div className="min-h-screen  p-8 relative overflow-hidden">
      <div className="absolute inset-0 md:flex items-center hidden justify-center">
        <div className="w-full h-full bg-gradient-to-b from-[#009D84] to-white rounded-full opacity-30"></div>
      </div>
      <div className="absolute inset-0 md:flex hidden items-center justify-center ">
        <div className="w-[80%] h-[80%] bg-gradient-to-b from-[#009D84] border-6 border-white to-white rounded-full opacity-40"></div>
      </div>
      
      <div className="relative z-10 mt-15 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Core Brand Values</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {values.map((value, index) => (
            <div 
              key={index}
              className="md:bg-white/50 bg-white/50 rounded-2xl p-6 shadow-lg border-2 border-[#A7DED5]"
            >
              <div className="mb-4">
                <span className="text-5xl font-bold text-black">{value.number}</span>
              </div>
              <h3 className="text-xl lg:text-[32px] font-bold text-black mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm lg:text-[20px] font-light leading-tight">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoreValues