import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
const BlogCard = ({ blog, index }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="group cursor-pointer"
		>
			<Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-teal-200 transition-all duration-500 bg-white/80 backdrop-blur-sm py-0">
				<div className="relative overflow-hidden">
					<motion.img
						src={blog.image}
						alt={blog.title}
						className="w-full h-64 object-cover"
						animate={{
							scale: isHovered ? 1.1 : 1,
						}}
						transition={{ duration: 0.6, ease: "easeOut" }}
					/>
					<motion.div
						className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
						animate={{
							opacity: isHovered ? 0.8 : 0.3,
						}}
						transition={{ duration: 0.3 }}
					/>
					<motion.div
						className="absolute top-4 left-4"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2 }}
					>
						<span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
							{blog.category}
						</span>
					</motion.div>
				</div>

				<CardContent className="p-6">
					<motion.h3
						className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300"
						animate={{
							x: isHovered ? 5 : 0,
						}}
						transition={{ duration: 0.3 }}
					>
						{blog.title}
					</motion.h3>

					<motion.p
						className="text-gray-600 mb-4 line-clamp-3 leading-relaxed"
						animate={{
							x: isHovered ? 5 : 0,
						}}
						transition={{ duration: 0.3, delay: 0.05 }}
					>
						{blog.description}
					</motion.p>

					<motion.div
						animate={{
							x: isHovered ? 5 : 0,
						}}
						transition={{ duration: 0.3, delay: 0.1 }}
					>
						<Button
							variant="ghost"
							className="p-0 h-auto font-semibold text-teal-600 hover:text-teal-700 group/btn"
						>
							Read More
							<motion.div
								animate={{
									x: isHovered ? 5 : 0,
								}}
								transition={{ duration: 0.3 }}
							>
								<ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
							</motion.div>
						</Button>
					</motion.div>

					<motion.div
						className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100"
						animate={{
							y: isHovered ? -2 : 0,
						}}
						transition={{ duration: 0.3 }}
					>
						<div className="flex items-center text-gray-500 text-sm">
							<Calendar className="h-4 w-4 mr-2" />
							{blog.date}
						</div>
						<div className="flex items-center text-gray-500 text-sm">
							<MessageCircle className="h-4 w-4 mr-2" />
							{blog.comments} Comments
						</div>
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default BlogCard;
