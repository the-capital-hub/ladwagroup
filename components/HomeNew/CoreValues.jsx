"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CoreValues() {
	const [hoveredCard, setHoveredCard] = useState(null);

	const values = [
		{
			number: "01",
			title: "Innovation",
			description:
				"We embrace forward-thinking ideas to develop cutting-edge EHS solutions. Innovation drives us to stay ahead in a dynamic world.",
		},
		{
			number: "02",
			title: "Reliability",
			description:
				"Our clients trust us for consistent performance and dependable products. We deliver on our promises — every time.",
		},
		{
			number: "03",
			title: "Customer",
			description:
				"Customers are at the heart of our business. We listen, adapt, and serve with unmatched dedication. Our goal is to exceed expectations and build lasting relationships.",
		},
		{
			number: "04",
			title: "Integrity",
			description:
				"We operate with honesty, transparency, and ethical responsibility. Integrity defines our relationships and reputation.",
		},
		{
			number: "05",
			title: "Quality First",
			description:
				"We prioritize quality in every detail to ensure long-lasting safety. Excellence is not a goal - it's our standard.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className="py-10 bg-gray-50">
			<div className="px-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Core Values
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						At LADWA, our values are the foundation of everything we do — shaping our actions, guiding our growth, and driving our mission to make the world safer.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{values.map((value, index) => (
						<motion.div
							key={index}
							className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl border-2 border-teal-200 cursor-pointer transition-all duration-300 min-h-[280px] flex flex-col justify-between"
							variants={cardVariants}
							onHoverStart={() => setHoveredCard(index)}
							onHoverEnd={() => setHoveredCard(null)}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							<div className={`h-full flex flex-col justify-between ${hoveredCard === index ? "gap-0" : " gap-12"} text-center`}>
								<motion.div
									className="text-6xl font-bold mb-4 text-teal-600"
									animate={{
										scale: hoveredCard === index ? 0.8 : 1,
										opacity: hoveredCard === index ? 0.7 : 1,
									}}
									transition={{ duration: 0.2 }}
								>
									{value.number}
								</motion.div>

								<motion.h3
									className="text-xl font-bold text-teal-600 mb-4"
									animate={{
										fontSize: hoveredCard === index ? "1.125rem" : "2.25rem",
										rotate: hoveredCard === index ? 0 : 90,
									}}
									transition={{ duration: 0.2 }}
								>
									{value.title}
								</motion.h3>

								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{
										opacity: hoveredCard === index ? 1 : 0,
										height: hoveredCard === index ? "auto" : 0,
									}}
									transition={{ duration: 0.3 }}
									className="overflow-hidden"
								>
									<p className="text-gray-600 mb-4 text-sm leading-relaxed">
										{value.description}
									</p>
									<Button
										size="sm"
										className="bg-teal-600 hover:bg-teal-700 text-white rounded-full"
									>
										Know More
									</Button>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full">
						View All
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
