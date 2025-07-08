"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
	return (
		<section className="w-full h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden p-10">
			<div className="relative w-full h-full rounded-4xl">
				{/* Clipped Background Container */}
				<div className="absolute inset-0 w-full h-full overflow-hidden rounded-4xl">
					<div className="hero-container">
						<div className="hero-bg">
							{/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="relative w-full h-full z-10 py-20 px-10">
					<div className="h-full flex gap-4 items-center">
						{/* Navigation dots */}
						{/* <motion.div
						className="h-full flex flex-col justify-around"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="w-10 h-10 rounded-full bg-opacity-20 flex items-center justify-center text-white font-bold text-lg border-2 border-white border-opacity-30">
							1
						</div>
						<div className="w-10 h-10 rounded-full bg-opacity-10 flex items-center justify-center text-white font-bold text-lg border-2 border-white border-opacity-20">
							2
						</div>
						<div className="w-10 h-10 rounded-full bg-opacity-10 flex items-center justify-center text-white font-bold text-lg border-2 border-white border-opacity-20">
							3
						</div>
					</motion.div> */}

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.3 }}
							className="w-full flex-1"
						>
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
								LADWA
								<br />
								Making The World Safer.
							</h1>
							<p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
								India's Leading EHS Innovator. Trusted Globally.
							</p>
							<Button
								size="lg"
								className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
							>
								Get Started
							</Button>
						</motion.div>
					</div>
				</div>

				{/* Floating Action Button */}
				<motion.div
					className="fixed bottom-8 right-8 z-20"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					<div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl hover:bg-teal-700 transition-all duration-300 cursor-pointer hover:scale-110">
						<ArrowUpRight className="w-8 h-8" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
