"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 4000, stopOnInteraction: false }),
	]);

	const testimonials = [
		{
			name: "Ethan Williams",
			role: "Digital Marketing Specialist",
			rating: 5,
			text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes transactions easy and stress-free. Say goodbye to confusing and hello to clarity.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
		{
			name: "David Thompson",
			role: "Product Designer",
			rating: 5,
			text: "Discover a payment app focused on transparency. Enjoy a seamless experience with no hidden fees, making every transaction easy and stress-free. It's designed to put your peace of mind first.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
		{
			name: "Sarah Johnson",
			role: "Safety Manager",
			rating: 5,
			text: "LADWA's safety equipment has transformed our workplace safety standards. The quality and reliability of their products is unmatched in the industry.",
			avatar: "/placeholder.svg?height=60&width=60",
		},
	];

	return (
		<section className="py-10">
			<div className="container mx-auto px-4">
				<motion.div
					className="max-w-7xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-16">
						<motion.p
							className="text-teal-400 font-semibold mb-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							TESTIMONIAL
						</motion.p>
						<motion.h2
							className="text-4xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							We've built trust with reviews from real users
						</motion.h2>
						<motion.p
							className="max-w-2xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Boost your credibility by featuring genuine testimonials from real
							users, showcasing their positive experiences and establishing
							trust with your service.
						</motion.p>
					</div>

					<div className="embla overflow-hidden" ref={emblaRef}>
						<div className="embla__container flex">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] px-4"
								>
									<motion.div
										className="bg-teal-50 p-8 rounded-2xl h-full"
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										whileHover={{ scale: 1.02 }}
									>
										<div className="flex mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
												/>
											))}
										</div>
										<p className="mb-6 leading-relaxed">{testimonial.text}</p>
										<div className="flex items-center gap-4">
											<Avatar className="w-12 h-12 rounded-full object-cover">
												<AvatarImage
													src="https://github.com/shadcn.png"
													alt="Avatar"
												/>
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="font-semibold">{testimonial.name}</h4>
												<p className="text-sm">{testimonial.role}</p>
											</div>
										</div>
									</motion.div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
