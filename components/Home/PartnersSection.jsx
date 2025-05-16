"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo1 from "@/public/images/logos/amazon-pay.png";
import Logo2 from "@/public/images/logos/zoom.png";
import Logo3 from "@/public/images/logos/asus.png";
import Logo4 from "@/public/images/logos/oracle.png";
import Logo5 from "@/public/images/logos/siemens.png";
import Logo6 from "@/public/images/logos/sony.png";
import Logo7 from "@/public/images/logos/stripe.png";
import Logo8 from "@/public/images/logos/uber.png";

export default function PartnersSection() {
	const partners = [
		{ image: Logo1.src, name: "Amazon Pay" },
		{ image: Logo2.src, name: "Zoom" },
		{ image: Logo3.src, name: "ASUS" },
		{ image: Logo4.src, name: "Oracle" },
		{ image: Logo5.src, name: "Siemens" },
		{ image: Logo6.src, name: "Sony" },
		{ image: Logo7.src, name: "Stripe" },
		{ image: Logo8.src, name: "Uber" },
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
		<section className="py-6 md:py-12 bg-white">
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
					className="flex flex-wrap justify-center items-center gap-4 md:gap-12"
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
								src={partner.image}
								alt={partner.name}
								width={120}
								height={30}
								className="object-contain w-20 h-16 md:w-32 md:h-24"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
