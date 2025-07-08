import React from 'react'
import { Linkedin } from 'lucide-react';
import sunil from "../../public/images/aboutus/SunilLadwaPic.png"
import sumithra from "../../public/images/aboutus/SumithraLadwaPic.png"
import chethan from "../../public/images/aboutus/ChethanKumarPic.png"
import Nagraj from "../../public/images/aboutus/NagrajPic.png"
import deepak from "../../public/images/aboutus/DeepakPic.png"
import Image from 'next/image';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    variable:"--font-outfit",
    subsets:["latin"]

})

const TopManagement = () => {
    const topManagementData = [
        {
            id: 1,
            name: "Sunil Ladwa",
            position: "Director - Business Development",
            image: sunil,
            linkedIn: "#"
        },
        {
            id: 2,
            name: "Sumithra Ladwa",
            position: "Director - Admin & HR",
            image: sumithra,
            linkedIn: "#"
        }
    ];

    const teamData = [
        {
            id: 1,
            name: "Chethan Kumar M",
            position: "Inventory specialist",
            image: chethan,
            linkedIn: "#"
        },
        {
            id: 2,
            name: "Nagraj",
            position: "Asst Manager - Sales",
            image: Nagraj,
            linkedIn: "#"
        },
        {
            id: 3,
            name: "Deepak",
            position: "Customer support executive",
            image: deepak,
            linkedIn: "#"
        }
    ];

    const TeamCard = ({ member, isTopManagement = false }) => (
        <div className="relative group">
            <div className={`bg-[#D7FFF8] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${outfit.className}`}>
                <div className="flex space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <Image
                            src={member.image}
                            alt={member.name}
                            className="lg:w-[20vw] lg:h-[43vh] w-[50vw] h-[50vh] rounded-full object-cover border-[12px] border-[#097362]/30 shadow-md filter grayscale"
                        />
                    </div>
                </div>
            </div>
            <div className='my-7'>
                <div className="flex justify-center mb-4">
                    <a
                        href={member.linkedIn}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={16} />
                    </a>
                </div>
                <div className="text-center">
                    <h3 className="text-gray-800 font-bold text-[25px] mb-2">{member.name}</h3>
                    <p className="text-[#097362] text-[20px] font-medium  leading-relaxed">{member.position}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className=" py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Top Management
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {topManagementData.map((member) => (
                            <TeamCard key={member.id} member={member} isTopManagement={true} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Our Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {teamData.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                            See all team members
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopManagement;