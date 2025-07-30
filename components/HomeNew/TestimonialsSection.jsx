"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Outfit, Raleway } from "next/font/google";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});
const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
});

export default function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
  {
    name: "MV KRISHNA",
    role: "Head of Administration at Greenwood High International School",
    rating: 5,
    text: "LADWA has been a good vendor and service provider. We have been going back to them time and again for quality products and services",
    avatar: "/mnt/data/4b03ee6c-03eb-4ef9-9c8e-cb49e5d09748.jpg"
  },
  {
    name: "KUSHALA KUSH",
    role: "Contracts, Purchase, QS, Billing",
    rating: 5,
    text: "Experience working with LADWA has been good, and they are proficient in traffic safety products.",
    avatar: "/mnt/data/4b03ee6c-03eb-4ef9-9c8e-cb49e5d09748.jpg"
  },
  {
    name: "GIRISH PANDEY",
    role: "Assistant Manager in Godrej & Boyce",
    rating: 5,
    text: "Ladwa delivers good Quality and commitment to works. My experience with Ladwa has been good.",
    avatar: "/mnt/data/4b03ee6c-03eb-4ef9-9c8e-cb49e5d09748.jpg"
  }
];


	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	const getVisibleTestimonials = () => {
		const visible = [];
		for (let i = 0; i < 2; i++) {
			const index = (currentIndex + i) % testimonials.length;
			visible.push(testimonials[index]);
		}
		return visible;
	};

	const visibleTestimonials = getVisibleTestimonials();

	return (
		<section className="my-5 overflow-hidden">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.2 } },
						}}
					>
						{/* Left Content */}
						<motion.div
							className="lg:col-span-2 lg:sticky lg:top-8"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
							}}
						>
							<p
								className={`text-black text-[16px] font-semibold mb-3 text-sm uppercase tracking-wider ${outfit.className}`}
							>
								TESTIMONIAL
							</p>
							<h2 className={`${raleway.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight`}>
								We've built trust with reviews from real users
							</h2>
							<p className={`${outfit.className} text-gray-600 mb-8 text-base`}>
								Boost your credibility by featuring genuine testimonials from
								real users, showcasing their positive experiences and
								establishing trust with Monks Pay services.
							</p>
							<div className="flex gap-3">
								<button
									onClick={prevSlide}
									className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
									aria-label="Previous testimonial"
								>
									<ChevronLeft className="w-5 h-5 text-gray-600" />
								</button>
								<button
									onClick={nextSlide}
									className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1D9481] to-[#029981] flex items-center justify-center hover:bg-teal-700 transition-all duration-200 shadow-sm"
									aria-label="Next testimonial"
								>
									<ChevronRight className="w-5 h-5 text-white" />
								</button>
							</div>
						</motion.div>

						{/* Right Content */}
						<div className="lg:col-span-3">
							<div
								className={`${outfit.className} grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[18rem]`}
							>
								{visibleTestimonials.map((testimonial, index) => (
									<motion.div
										key={`${currentIndex}-${index}`}
										className="bg-white p-6 lg:w-[33vw] lg:p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow duration-200"
										variants={{
											hidden: { opacity: 0, y: 30 },
											visible: {
												opacity: 1,
												y: 0,
												transition: { duration: 0.6, delay: index * 0.2 },
											},
										}}
									>
										<div className="flex mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
												/>
											))}
										</div>
										<p className="mb-6 leading-relaxed text-gray-700 text-sm lg:text-base">
											{testimonial.text}
										</p>
										<div className="flex items-center gap-4">
											<Avatar className="w-12 h-12 border-2 border-gray-100">
												<AvatarImage
													src={testimonial.avatar}
													alt={`${testimonial.name} avatar`}
												/>
												<AvatarFallback className="bg-teal-100 text-teal-600 font-semibold">
													{testimonial.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="font-semibold text-gray-900 text-sm lg:text-base">
													{testimonial.name}
												</h4>
												<p className="text-xs lg:text-sm text-gray-500">
													{testimonial.role}
												</p>
											</div>
										</div>
									</motion.div>
								))}
							</div>

							{/* Mobile Dots */}
							<div className="flex justify-center mt-8 md:hidden">
								<div className="flex gap-2">
									{testimonials.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentIndex(index)}
											className={`w-2 h-2 rounded-full transition-colors duration-200 ${
												index === currentIndex ? "bg-teal-600" : "bg-gray-300"
											}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
