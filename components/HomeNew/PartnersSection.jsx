"use client";

import Image from "next/image";
import logo from "@/public/images/NewHome/partner.png";
import { motion } from "framer-motion";

export default function PartnersSection() {
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
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
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="py-2 md:py-12 bg-white"
		>
			<motion.div variants={fadeInUp} className="md:pb-6">
				<h2 className="text-center md:text-xl text-3xl font-medium text-gray-700 md:mb-8 mb-3">
					Our Partners
				</h2>

				<motion.div
					variants={fadeInUp}
					className="flex flex-wrap justify-center items-center gap-4 md:gap-12"
				>
					<Image
						src={logo}
						alt="our partners"
						className="scale-[2] md:scale-100"
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
