"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersSection() {
	const partners = [
		"rudderstack",
		"atlassian",
		"zapler",
		"quantum",
		"sentry",
		"appfire",
		"pennylane",
	];

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<section className="py-12 bg-white">
			<div className="pb-6 shadow-lg">
				<motion.h2
					className="text-center text-xl font-medium text-gray-700 mb-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Our Partners
				</motion.h2>

				<motion.div
					className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{partners.map((partner, index) => (
						<motion.div
							key={index}
							className="grayscale hover:grayscale-0 transition-all duration-300"
							variants={fadeIn}
						>
							<Image
								src={`/placeholder.svg?height=30&width=120&text=${partner}`}
								alt={partner}
								width={120}
								height={30}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
