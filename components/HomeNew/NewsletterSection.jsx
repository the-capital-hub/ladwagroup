"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Picture from "@/public/images/NewHome/picture8.png";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});
const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

// Animation variants
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};
const fadeUp = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

export default function NewsletterSection() {
	return (
		<section className="py-10 bg-white w-full max-w-7xl mx-auto md:mt-14">
			<motion.div
				className="max-w-8xl mx-auto text-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight"
					variants={fadeUp}
				>
					Join our Movement
				</motion.h2>

				<motion.p
					className={`md:text-base text-sm text-gray-600 md:mb-6 mb-4 max-w-5xl mx-auto ${outfit.className}`}
					variants={fadeUp}
				>
					Whether you're a safety officer, city planner, industry head, or
					concerned citizen - partner with us to build a safer, smarter, and more
					sustainable future.
				</motion.p>
				<Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
							Join
				</Button>

				<motion.div
					className="max-w-5xl mx-auto relative md:mb-6 mb-6"
					variants={fadeUp}
				>
					<Image
						src={Picture}
						alt="Team collaboration"
						width={300}
						height={100}
						className="w-full aspect-video rounded-[30px] mx-auto"
					/>
				</motion.div>

				{/* <motion.h3
					className={`text-xl lg:text-4xl font-bold text-gray-900 ${inter.className}`}
					variants={fadeUp}
				>
					LADWA – Making the World Safer.
				</motion.h3> */}

				{/* Optional Subscription Form (currently commented) */}
				{/* <motion.div className="max-w-md mx-auto mt-8" variants={fadeUp}>
					<div className="flex gap-4">
						<Input
							type="email"
							placeholder="Enter your email address"
							className="flex-1"
						/>
						<Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
							Subscribe
						</Button>
					</div>
					<p className="text-sm text-gray-500 mt-4">
						Get the latest updates on safety innovations and industry
						insights.
					</p>
				</motion.div> */}
			</motion.div>
		</section>
	);
}
