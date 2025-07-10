"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Outfit, Raleway } from "next/font/google";
const outfit = Outfit({
    variable:"--font-outfit",
    subsets:["latin"]

})
const raleway = Raleway({
    variable:"--font-raleway",
    subsets:["latin"]

})

export default function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			name: "Ethan Williams",
			role: "Digital Marketing Specialist",
			rating: 5,
			text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes transactions easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
		{
			name: "Daniel Thompson",
			role: "Product Designer",
			rating: 5,
			text: "Discover a payment app focused on transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put your peace of mind first with your payments.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
		{
			name: "Sarah Johnson",
			role: "Safety Manager",
			rating: 5,
			text: "LADWA's safety equipment has transformed our workplace safety standards. The quality and reliability of their products is unmatched in the industry. Highly recommended for all safety needs.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	// Get visible testimonials for current view
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
		<section className="py-16 lg:py-24">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
						{/* Left Content */}
						<div className="lg:col-span-2">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="lg:sticky lg:top-8"
							>
								<p className={`text-black text-[16px] font-semibold mb-3 text-sm uppercase tracking-wider ${outfit.className}`}>
									TESTIMONIAL
								</p>
								<h2 className={`${raleway.className}text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-gray-900 leading-tight`}>
									We've built trust with reviews from real users
								</h2>
								<p className={`${outfit.className} text-gray-600 mb-8  text-base`}>
									Boost your credibility by featuring genuine testimonials from real
									users, showcasing their positive experiences and establishing
									trust with Monks Pay services.
								</p>
								
								{/* Navigation Buttons */}
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
						</div>

						{/* Right Content - Testimonials */}
						<div className="lg:col-span-3">
							<div className={`${outfit.className} grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[18rem]`}>
								{visibleTestimonials.map((testimonial, index) => (
									<motion.div
										key={`${currentIndex}-${index}`}
										className="bg-white p-6 lg:w-[33vw] lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										{/* Star Rating */}
										<div className="flex mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
												/>
											))}
										</div>
										
										{/* Testimonial Text */}
										<p className="mb-6 leading-relaxed text-gray-700 text-sm lg:text-base">
											{testimonial.text}
										</p>
										
										{/* User Info */}
										<div className="flex items-center gap-4">
											<Avatar className="w-12 h-12 border-2 border-gray-100">
												<AvatarImage
													src="https://github.com/shadcn.png"
													alt={`${testimonial.name} avatar`}
												/>
												<AvatarFallback className="bg-teal-100 text-teal-600 font-semibold">
													{testimonial.name.split(' ').map(n => n[0]).join('')}
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

							{/* Mobile Navigation Dots */}
							<div className="flex justify-center mt-8 md:hidden">
								<div className="flex gap-2">
									{testimonials.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentIndex(index)}
											className={`w-2 h-2 rounded-full transition-colors duration-200 ${
												index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
											}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}