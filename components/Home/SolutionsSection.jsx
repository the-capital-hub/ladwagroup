"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SolutionCard from "@/components/Home/SolutionCard.jsx";

export default function SolutionsSection({
	safetyProfessionalImg,
	roadSafetyImg,
	fireSafetyImg,
	industrialSafetyImg,
	reflectiveSignageImg,
}) {
	const solutions = [
		{
			title: "Road Safety",
			description:
				"The entire range of Road Safety Product Manufacturer and parking products solutions.",
			image: roadSafetyImg,
			delay: 0.1,
		},
		{
			title: "Fire Safety",
			description:
				"The entire range of Road Safety Product Manufacturer and parking products solutions.",
			image: fireSafetyImg,
			delay: 0.2,
		},
		{
			title: "Industrial Safety",
			description:
				"The entire range of Road Safety Product Manufacturer and parking products solutions.",
			image: industrialSafetyImg,
			delay: 0.3,
		},
		{
			title: "Reflective Signage",
			description:
				"The entire range of Road Safety Product Manufacturer and parking products solutions.",
			image: reflectiveSignageImg,
			delay: 0.4,
		},
	];

	const getCardPosition = (index, totalItems) => {
		// Define positions for each card to create a circular layout
		const positions = [
			"-top-10 left-0 md:left-4 lg:left-70", // top left position
			"-top-10 right-0 md:right-4 lg:right-24", // top right position
			"-bottom-20 left-0 md:left-4 lg:left-10", // bottom left position
			"-bottom-40 right-0 md:right-4 lg:right-70", // bottom right position
		];

		return positions[index % totalItems];
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
					<p className="text-gray-600 max-w-3xl mx-auto">
						We offer the best product solutions in the Road Safety equipments,
						Industrial Safety, Reflective signs, and Fire Safety Sectors.
					</p>
				</motion.div>

				<div className="relative">
					<motion.div
						className="flex justify-center mb-12"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="relative w-64 h-64 md:w-96 md:h-80 rounded-full bg-teal-50 flex items-center justify-center">
							<Image
								src={safetyProfessionalImg.src || "/placeholder.svg"}
								alt="Safety Professional"
								width={1000}
								height={1000}
								className="rounded-full object-cover"
							/>
						</div>
					</motion.div>

					{solutions.map((solution, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: solution.delay }}
							className={`absolute ${getCardPosition(
								index,
								solutions.length
							)} max-w-xs`}
						>
							<SolutionCard
								title={solution.title}
								description={solution.description}
								image={solution.image}
							/>
						</motion.div>
					))}

				</div>
			</div>
		</section>
	);
}
