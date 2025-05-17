"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import TeamMemberCard from "@/components/TeamMemberCard";
import HeroImg from "@/public/images/aboutus/AboutUsHeroImg.jpg";
import AboutUsImg from "@/public/images/aboutus/AboutUsImg.png";
import OurMissionImg from "@/public/images/aboutus/OurMissionImg.png";

import SunilLadwaPic from "@/public/images/aboutus/SunilLadwaPic.png";
import SumithraLadwaPic from "@/public/images/aboutus/SumithraLadwaPic.png";
import ChethanKumarPic from "@/public/images/aboutus/ChethanKumarPic.png";
import NagrajPic from "@/public/images/aboutus/NagrajPic.png";
import DeepakPic from "@/public/images/aboutus/DeepakPic.png";
import TelephoneLogo from "@/public/images/aboutus/TelephoneLogo.png";

import "./styles.css";

const founders = [
	{
		name: "Sunil Ladwa",
		position: "Director- Business Developmentr",
		image: SunilLadwaPic.src,
		linkedinUrl: "https://linkedin.com",
	},
	{
		name: "Sumithra Ladwa",
		position: "Director- Admin & HR",
		image: SumithraLadwaPic.src,
		linkedinUrl: "https://linkedin.com",
	},
];

const teamMembers = [
	{
		name: "Chethan Kumar M",
		position: "Inventory Specialist",
		image: ChethanKumarPic.src,
		linkedinUrl: "https://linkedin.com",
	},
	{
		name: "Nagraj",
		position: "Asst Manager - Sales",
		image: NagrajPic.src,
		linkedinUrl: "https://linkedin.com",
	},
	{
		name: "Deepak",
		position: "Customer Support Executive",
		image: DeepakPic.src,
		linkedinUrl: "https://linkedin.com",
	},
];

export default function AboutPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[300px] md:h-[400px]">
				<Image
					src={HeroImg.src}
					alt="About Hero"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-white"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						About us
					</motion.h1>
				</div>
			</div>

			{/* About Content */}
			<div className="py-12">
				<motion.div
					className="bg-white rounded-r-4xl overflow-hidden shadow-lg mb-16 mr-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="flex flex-col justify-center items-center md:flex-row bg-teal-700 text-white p-6">
						<div className="p-8 md:w-1/2 h-fit">
							<span className="text-sm uppercase">LADWA</span>
							<h2 className="text-3xl font-bold mt-2 mb-4">About Us</h2>
							<p className="text-sm leading-relaxed">
								Ladwa Solutions is a pioneer in the manufacture, exporter, and
								supplier of safety equipment, traffic safety equipment, security
								equipment, petroleum & refinery equipment, fire safety
								equipment, and personal protective equipment. Our products meet
								the highest standards of quality, health and environmental needs
								to offer improved operational efficiency, regulatory compliance.
							</p>
							<p className="text-sm leading-relaxed mt-4">
								We understand the exact requirements of customers, which always
								enable us to deliver quality products. Our customer-oriented and
								quality approach have positioned us in large market clientele
								base that includes general industry, offshore & oil safety
								companies, health care, utilities and government.
							</p>
						</div>
						<div className="md:w-1/2 p-0 md:!h-[80dvh]">
							<Image
								src={AboutUsImg.src}
								alt="About Us Image"
								width={800}
								height={400}
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</motion.div>

				{/* Mission and Vision */}
				<motion.div
					className="flex flex-col md:flex-row gap-8 md:!h-[85dvh] px-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="md:w-1/2">
						<Image
							src={OurMissionImg.src}
							alt="Mission Image"
							width={500}
							height={400}
							className="rounded-lg w-full h-full object-contain"
						/>
					</div>
					<div className="md:w-1/2 flex flex-col justify-center">
						<h3 className="text-xl font-bold mb-2">Our Mission</h3>
						<p className="text-gray-600 mb-4 pl-5 border-l-4 border-teal-700">
							Ladwa Solutions is a manufacturer and supplier of Safety Equipment
							company with strong management and business ethics. We lay
							emphasis on the quality of Traffic Safety Equipment, Industrial
							Safety Equipment, Security Equipment, petroleum & refinery
							equipment, fire safety equipment, and personal protective
							equipment which have high on quality environmental friendly
							towards cost effective.
						</p>
						<h3 className="text-xl font-bold mb-2">Our Vision</h3>
						<p className="text-gray-600 mb-4  pl-5 border-l-4 border-teal-700">
							To become the leading provider of safety solutions that protect
							people and assets across industries worldwide.
						</p>
						<div className="mt-4 flex items-center gap-4">
							<Button className="bg-teal-700 hover:bg-teal-800">
								LEARN MORE
							</Button>
							<div className="flex items-center">
								<Image
									src={TelephoneLogo.src}
									alt="Telephone Logo"
									width={50}
									height={50}
									className="mr-4"
								/>
								<div className="flex flex-col">
									<h3>Want to Discuss:</h3>
									<span className="text-black text-xl font-bold mr-2">
										+91(123)456789
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Divider - Road */}
				<div className="w-full h-28 bg-[#252424] hidden md:block my-12">
					<div className="h-full w-full flex flex-col justify-center items-center">
						<div className="h-0 w-full border-t-4 border-dashed border-yellow-400"></div>
					</div>
				</div>

				{/* Management Team */}
				<motion.div
					className="mb-16 mt-10 md:mt-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<h2 className="text-3xl font-bold text-center mb-12">
						Top Management
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl md:mx-auto mx-6">
						{founders.map((member, index) => (
							<TeamMemberCard key={index} member={member} index={index} />
						))}
					</div>
				</motion.div>

				{/* Team Members */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl  md:mx-auto mx-6">
						{teamMembers.map((member, index) => (
							<TeamMemberCard key={index} member={member} index={index} />
						))}
					</div>

					<div className="flex justify-center mt-8">
						<Button className="bg-teal-700 hover:bg-teal-800">
							See all team members
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
