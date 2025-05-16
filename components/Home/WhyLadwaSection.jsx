"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/Home/FeatureCard.jsx";
import WLImg1 from "@/public/images/home/WLImg1.png";
import WLImg2 from "@/public/images/home/WLImg2.png";
import WLImg3 from "@/public/images/home/WLImg3.png";
import WLImg4 from "@/public/images/home/WLImg4.png";

export default function WhyLadwaSection() {
	const features = [
		{
			title: "PRACTICAL INNOVATION",
			description:
				"Being inventive at work helps us think ahead and engineer products and solutions that enable our clients with better products",
			icon: WLImg1.src,
			bgColor: "bg-teal-50",
			iconBgColor: "bg-white",
			isReversed: true,
		},
		{
			title: "BEST VALUE DELIVERED",
			description:
				"With main production facility at North India and subsidiary facilities at West India and South of India. We are never too far from our customers.",
			icon: WLImg2.src,
			bgColor: "bg-white",
			iconBgColor: "bg-teal-50",
			isReversed: false,
		},
		{
			title: "EFFICIENT & COMPETITIVE",
			description:
				"Be it our machines or materials, We practice Green and with over 20 years of experience in Industrial and Road Safety Products Manufacturing.",
			icon: WLImg3.src,
			bgColor: "bg-white",
			iconBgColor: "bg-teal-50",
			isReversed: true,
		},
		{
			title: "RELIABLE QUALITY",
			description:
				"Being in the market for decades tells a lot about us. We have in house design, tool making, sampling and testing facilities.",
			icon: WLImg4.src,
			bgColor: "bg-teal-50",
			iconBgColor: "bg-white",
			isReversed: false,
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="px-10">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="text-gray-700 mb-2">Your Safety Is Our Concern</div>
					<h2 className="text-3xl font-bold">
						Why <span className="text-teal-700">LADWA</span>
					</h2>
					<p className="text-gray-600 max-w-3xl mx-auto mt-4">
						LADWA is committed to excellence in PPE and remains at the forefront
						of regulations and technologies related to hand protection and other
						personal protective equipment.
					</p>
				</motion.div>

				<div className="w-full flex justify-center">
					<div className="flex flex-col gap-8 relative z-10">
						{features.slice(0, 2).map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index < 2 ? 0 : 0.2 }}
							>
								<FeatureCard
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									bgColor={feature.bgColor}
									iconBgColor={feature.iconBgColor}
									isReversed={feature.isReversed}
								/>
							</motion.div>
						))}
					</div>

					{/* Road Line */}
					<div className=" w-28 bg-[#252424] mx-10 md:mx-20 hidden md:block">
						<div className="h-full w-1/2 mx-auto flex flex-col justify-center items-center">
							<div className="h-full w-0 border-l-4 border-dashed border-yellow-400"></div>
						</div>
					</div>

					<div className="flex flex-col gap-8 relative z-10">
						{features.slice(2, 4).map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index < 2 ? 0 : 0.2 }}
							>
								<FeatureCard
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									bgColor={feature.bgColor}
									iconBgColor={feature.iconBgColor}
									isReversed={feature.isReversed}
								/>
							</motion.div>
						))}
					</div>
				</div>

				<div className="flex justify-center mt-12">
					<Button className="bg-teal-700 hover:bg-teal-800">
						GET STARTED
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
