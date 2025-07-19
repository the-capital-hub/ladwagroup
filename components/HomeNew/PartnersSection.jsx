"use client";

import Image from "next/image";
import {
        Logo1,
        Logo2,
        Logo3,
        Logo4,
        Logo5,
        Logo6,
        Logo7,
        Logo8,
        Logo9,
        Logo10,
        Logo11,
        Logo12,
} from "@/public/images/NewHome";
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

        const logos = [
                Logo1,
                Logo2,
                Logo3,
                Logo4,
                Logo5,
                Logo6,
                Logo7,
                Logo8,
                Logo9,
                Logo10,
                Logo11,
                Logo12,
        ];

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
                                        className="overflow-hidden"
                                >
                                        <div className="flex w-max space-x-8 animate-marquee">
                                                {logos.concat(logos).map((img, index) => (
                                                        <Image
                                                                key={index}
                                                                src={img}
                                                                alt={`partner logo ${index % logos.length + 1}`}
                                                                className="h-12 w-auto"
                                                        />
                                                ))}
                                        </div>
                                </motion.div>
                        </motion.div>
                </motion.section>
        );
}
