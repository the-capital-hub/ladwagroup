"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Picture from "@/public/images/NewHome/picture8.png";
import { Inter, Outfit } from "next/font/google";
import { useRouter } from "next/navigation";

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

const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
                opacity: 1,
                scale: 1,
                transition: {
                        duration: 0.7,
                        ease: "easeOut",
                },
        },
};

export default function NewsletterSection() {
        const navigate = useRouter();
        return (
                <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#EEFFFD] to-white">
                        <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 bg-teal-300 opacity-30 rounded-full blur-3xl" />
                        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-teal-200 opacity-40 rounded-full blur-2xl" />
                        <motion.div
                                className="relative max-w-7xl mx-auto text-center px-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                        >
                                <motion.h2
                                        className="md:text-5xl text-3xl font-bold text-gray-900 md:mb-6 mb-4"
                                        variants={fadeUp}
                                >
                                        Join the LADWA Movement
                                </motion.h2>

                                <motion.p
                                        className={`md:text-lg text-sm text-gray-600 md:mb-8 mb-5 max-w-4xl mx-auto ${outfit.className}`}
                                        variants={fadeUp}
                                >
                                        Whether you're a safety officer, city planner, industry head, or
                                        concerned citizen—partner with us to build a safer, smarter, and more
                                        sustainable future.
                                </motion.p>

                                <motion.div
                                        className="max-w-5xl mx-auto relative md:mb-8 mb-6"
                                        variants={imageVariants}
                                >
                                        <Image
                                                src={Picture}
                                                alt="Team collaboration"
                                                width={700}
                                                height={400}
                                                className="w-full aspect-video rounded-[30px] mx-auto shadow-xl"
                                        />
                                </motion.div>

                                <motion.h3
                                        className={`text-xl lg:text-4xl font-bold text-gray-900 ${inter.className}`}
                                        variants={fadeUp}
                                >
                                        LADWA – Making the World Safer.
                                </motion.h3>

                                <motion.div className="mt-6" variants={fadeUp}>
                                        <Button onClick={() => {navigate.push('/contact-us')}} className="bg-gradient-to-b from-[#097362] to-[#0FA78E] hover:bg-teal-700 text-white px-8 py-3 rounded-full">
                                                Join Now
                                        </Button>
                                </motion.div>

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
