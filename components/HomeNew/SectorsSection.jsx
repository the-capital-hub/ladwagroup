"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
	Logo6,
	Logo7,
	Logo8,
	Logo9,
	Logo10,
	Logo11,
	Logo12,
} from "@/public/images/NewHome";

export default function SectorsSection() {
	const sectors = [
		{ icon: Logo8, title: "Road Safety Equipment" },
		{ icon: Logo9, title: "Industrial Safety Gear" },
		{ icon: Logo10, title: "Fire Safety Solutions" },
		{ icon: Logo11, title: "Personal Protective Equipment (PPE)" },
		{ icon: Logo12, title: "Traffic Management & Smart Safety Systems" },
		{
			icon: Logo8,
			title: "Emergency & Safety Kits – for homes, offices, hospitals, schools",
		},
	];

	const features = [
		{
			title: "Client-Centric Experience",
			description: [
				"Dedicated after-sales service teams",
				"Global feedback loop for continuous innovation",
				"Custom safety solutions based on local..",
			],
		},
		{
			title: "Certifications & Awards We Pursue",
			description: [
				"Red Dot Design Award (Product Excellence)",
				"Export Excellence Award",
				"Sustainability & Innovation Awards",
			],
		},
		{
			title: "Our Presence",
			description: [
				"Offices and warehousing across major Indian cities",
				"Export operations in 20+ countries",
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="py-10 bg-gradient-to-br from-teal-50 to-cyan-50">
			<div className="px-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-6xl font-bold text-gray-900 mb-4">
						Sectors we cater
					</h2>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{sectors.map((sector, index) => {
						return (
							<motion.div
								key={index}
								className="bg-white p-6 border-2 border-teal-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
								variants={cardVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								transition={{ duration: 0.2 }}
							>
								<div className="flex items-center space-x-4">
									<motion.div
										className="flex items-center justify-center"
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.5 }}
									>
										<img
											src={sector.icon.src}
											className="w-12 h-12 text-teal-600"
										/>
									</motion.div>
									<h3 className="font-semibold text-gray-900">
										{sector.title}
									</h3>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.div
					className="grid lg:grid-cols-2 gap-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<motion.div
						className="bg-white p-8 border-2 border-teal-200 rounded-2xl shadow-sm"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Global Strategy & Partnerships
						</h3>
						<p className="text-gray-600 font-semibold mb-6">
							LADWA is actively expanding its global footprint through:
						</p>
						<div className="space-y-2 text-gray-600 mb-6">
							<p className="w-fit font-semibold p-3 bg-teal-50 border-2 border-teal-200 rounded-full">
								International distributor partnerships
							</p>
							<p className="w-fit font-semibold p-3 bg-teal-50 border-2 border-teal-200 rounded-full">
								Participation in top global expos (A+A, Intersec, NSC)
							</p>
						</div>
						<div className="flex justify-between">
							<Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full">
								Know More
							</Button>
							<img src={Logo6.src} />
						</div>
					</motion.div>

					<motion.div
						className="flex flex-col items-center justify-center bg-white border-2 border-teal-200 p-8 rounded-2xl shadow-sm"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<img src={Logo7.src} />
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Partner With LADWA
						</h3>
						<p className="text-gray-600 font-semibold mb-6">
							Whether you're an importer, distributor, EPC contractor, or
							government procurement agency — LADWA is your strategic ally for
							compliant, innovative, and scalable EHS products.
						</p>
						<Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full">
							Know More
						</Button>
					</motion.div>
				</motion.div>

				{/* Features cards section */}
				<motion.div
					className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					{features.map((feature, index) => {
						return (
							<motion.div
								key={index}
								className="bg-white p-6 border-2 border-teal-200 rounded-xl shadow-sm"
								variants={cardVariants}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.2 }}
							>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{feature.title}
								</h3>
								<ul className="space-y-2">
									{feature.description.map((description, descIndex) => (
										<li
											key={descIndex}
											className="text-gray-600 flex items-start"
										>
											{description}
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
