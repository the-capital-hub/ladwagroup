"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Eye } from "lucide-react";
import { Logo1 } from "@/public/images/NewHome";

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
		<section className="py-10 bg-white">
			<div className="px-10">
				<motion.div
					className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 text-center mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<h1 className="text-3xl md:text-5xl font-bold">
						Welcome to <span className="text-teal-600">Ladwa</span>
					</h1>

					<p className="leading-relaxed">
						LADWA is a globally trusted brand in the Environment, Health, and
						Safety (EHS) sector, delivering world-class products and solutions
						that protect people, infrastructure, and the environment. With deep
						Indian roots and an expanding international presence, we are
						redefining safety across industries, cities, and communities.
					</p>

					<Button
						size="sm"
						className="bg-teal-600 hover:bg-teal-700 text-white rounded-full"
					>
						Know More
					</Button>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Our Vision */}
					<motion.div
						className="bg-gradient-to-br from-teal-50 to-teal-200 p-8 rounded-2xl"
						variants={cardVariants}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<div className="flex items-center mb-6">
							<motion.div
								className="flex items-center justify-center mr-4"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<img src={Logo1.src} className="w-12 h-12" />
							</motion.div>
							<h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
						</div>
						<p className="text-gray-700 leading-relaxed">
							To be the leading Indian brand with a global footprint in
							Environment, Health, and Safety (EHS) sector—championing
							innovation, setting safety standards, and shaping a future where
							every workplace, road, and community is safer and more
							sustainable.
						</p>
					</motion.div>

					{/* Our Mission */}
					<motion.div
						className="bg-gradient-to-br from-white to-teal-200 p-8 rounded-2xl"
						variants={cardVariants}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<div className="flex items-center mb-6">
							<motion.div
								className="flex items-center justify-center mr-4"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<img src={Logo1.src} className="w-12 h-12" />
							</motion.div>
							<h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
						</div>
						<p className="text-gray-700 leading-relaxed">
							LADWA is dedicated to delivering reliable, innovative, and
							influential EHS solutions that protect lives through high-quality
							products, service excellence, and impactful awareness campaigns
							that foster a global culture of safety and responsibility.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
