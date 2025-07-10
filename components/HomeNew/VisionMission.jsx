"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bulb from "../../public/images/aboutus/bulb.png";
import { Outfit, Manrope } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});
const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export default function VisionMission() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="py-10 bg-white w-full max-w-7xl lg:mt-12 mx-auto">
			<div className="px-10">
				<motion.div
					className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 text-center mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<h1 className="text-3xl md:text-[64px] font-bold">
						Welcome to <span className="text-[#097362]">Ladwa</span>
					</h1>

					<p
						className={`${manrope.className} leading-relaxed text-[#3F3F3F] font-semibold text-[20px]`}
					>
						LADWA is a globally trusted brand in the Environment, Health, and
						Safety (EHS) sector, delivering world-class products and solutions
						that protect people, infrastructure, and the environment. With deep
						Indian roots and an expanding international presence, we are
						redefining safety across industries, cities, and communities.
					</p>

					<Button
						onClick={() => {navigate.push('/contact-us')}}
						size="sm"
						className="bg-gradient-to-b from-[#097362] to-[#0FA78E] text-white rounded-full"
					>
						Know More
					</Button>
				</motion.div>

				<motion.div
					className="w-[70vw] mx-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="flex justify-center flex-col lg:flex-row items-center gap-6 md:gap-3">
						{/* Vision */}
						<motion.div
							variants={cardVariants}
							className="bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl w-full"
						>
							<div className="flex justify-center w-full items-center py-2 gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-white to-[#9FFFF0] rounded-3xl md:w-[48vw] px-3 sm:px-4 flex-col sm:flex-row">
								<Image
									src={bulb}
									alt="bulb icon"
									className="w-12 h-12 sm:w-16 sm:h-16 md:w-[4vw] md:h-[8vh] flex-shrink-0"
								/>
								<div className="text-center sm:text-left">
									<h1 className="text-lg sm:text-xl md:text-[24px] font-semibold mb-2">
										Our Vision
									</h1>
									<p
										className={`text-xs sm:text-sm md:text-[16px] ${outfit.className}`}
									>
										To be the leading Indian brand with a global footprint in
										Environment, Health, and Safety solutions—championing
										innovation, setting safety standards, and shaping a world
										where every workplace, road, and community is safer and
										more sustainable.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Mission */}
						<motion.div
							variants={cardVariants}
							className="bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl"
						>
							<div className="flex justify-center items-center w-full py-2 gap-3 sm:gap-4 md:gap-6 bg-gradient-to-r from-white to-[#9FFFF0] rounded-3xl md:w-[48vw] px-3 sm:px-4 md:px-5 flex-col sm:flex-row">
								<Image
									src={bulb}
									alt="bulb icon"
									className="w-12 h-12 sm:w-16 sm:h-16 md:w-[4vw] md:h-[8vh] flex-shrink-0"
								/>
								<div className="text-center sm:text-left">
									<h1 className="text-lg sm:text-xl md:text-[24px] font-semibold mb-2">
										Our Mision
									</h1>
									<p
										className={`text-xs sm:text-sm md:text-[16px] ${outfit.className}`}
									>
										LADWA is dedicated to delivering reliable, innovative, and
										affordable EHS solutions. We strive to safeguard lives
										through high-quality products, service excellence, and
										impactful awareness campaigns that foster a global culture
										of safety and responsibility.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
