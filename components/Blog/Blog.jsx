"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import BlogCard from "@/components/Blog/BlogCard.jsx";
import Image from "next/image";
import BannerImg from "@/public/images/blog/banner.png";

const Blogs = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const blogPosts = [
		{
			id: 1,
			title:
				"Stay Safe and Visible: Ladwa's Reflective Jacket – Perfect for India's Workplaces",
			description:
				"Stay Safe and Visible: Ladwa's Reflective Jacket – Perfect for India's Workplaces In a fast-paced country like India, safety often gets overlooked in the hustle and bustle of daily work life.",
			image:
				"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
			category: "Safety Equipment",
			date: "March 24, 2025",
			comments: 5,
		},
		{
			id: 2,
			title:
				"Enhancing Road Safety with High-Quality Speed Breakers: A Comprehensive Guide",
			description:
				"Enhancing Road Safety with High-Quality Speed Breakers: A Comprehensive Guide by Ladwa Solutions Road safety is a critical concern in today's fast-paced world, where vehicular traffic continues to grow exponentially.",
			image:
				"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
			category: "Road Safety",
			date: "March 18, 2025",
			comments: 8,
		},
		{
			id: 3,
			title:
				"Traffic Cones & Accessories in India: Ultimate Guide to Road Safety & Usage",
			description:
				"The Ultimate Guide to Traffic Cones & Accessories: Ensuring Safety on Indian Roads When it comes to road safety, traffic cones and accessories play a crucial role in maintaining order and preventing accidents.",
			image:
				"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=300&fit=crop",
			category: "Traffic Management",
			date: "February 25, 2025",
			comments: 12,
		},
		{
			id: 4,
			title: "Advanced Personal Protective Equipment for Industrial Safety",
			description:
				"Discover the latest innovations in personal protective equipment designed specifically for industrial environments. Learn about the importance of proper safety gear and how it can prevent workplace accidents.",
			image:
				"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
			category: "Safety Equipment",
			date: "March 20, 2025",
			comments: 6,
		},
		{
			id: 5,
			title: "Smart Traffic Management Systems: The Future of Urban Planning",
			description:
				"Explore how smart traffic management systems are revolutionizing urban transportation. From AI-powered traffic lights to real-time monitoring, discover the technologies shaping our cities.",
			image:
				"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
			category: "Technology",
			date: "March 15, 2025",
			comments: 15,
		},
		{
			id: 6,
			title: "Workplace Safety Culture: Building a Safer Tomorrow",
			description:
				"Learn how to establish and maintain a strong safety culture in your workplace. Discover best practices, employee engagement strategies, and the role of leadership in promoting safety.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
			category: "Safety Culture",
			date: "March 10, 2025",
			comments: 9,
		},
	];

	const categories = [
		"All",
		"Safety Equipment",
		"Road Safety",
		"Traffic Management",
		"Technology",
		"Safety Culture",
	];

	const filteredPosts =
		selectedCategory === "All"
			? blogPosts
			: blogPosts.filter((post) => post.category === selectedCategory);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
			{/* Hero Section */}
			<motion.section
				className="relative py-24 px-10 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src={BannerImg.src}
            width={1000}
            height={500}
						alt="LADWA Safety Professional"
						className="w-full h-full object-cover"
						priority
					/>
				</div>

				<div className="absolute inset-0 bg-black/50"></div>

				{/* Animated background elements */}
				<div className="absolute z-10">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
							initial={{ scale: 0, opacity: 0 }}
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.6, 0.3],
								x: [0, 100, 0],
								y: [0, -50, 0],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								delay: i * 1.3,
							}}
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
						/>
					))}
				</div>

				<div className="relative container mx-auto px-4 text-center">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="max-w-4xl mx-auto"
					>
						<motion.h1
							variants={itemVariants}
							className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
						>
							OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600">BLOGS</span>
						</motion.h1>
						<motion.p
							variants={itemVariants}
							className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
						>
							Discover insights, tips, and innovations in safety, technology,
							and industry best practices
						</motion.p>
						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<div className="relative">
								<Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
								<input
									type="text"
									placeholder="Search articles..."
									className="pl-10 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-teal-500/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-500/50 w-64"
								/>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			{/* Category Filter */}
			<motion.section
				className="py-10 px-10 bg-white/50 backdrop-blur-sm border-b border-gray-200"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap gap-3 justify-center">
						{categories.map((category, index) => (
							<motion.button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
									selectedCategory === category
										? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
										: "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700 border border-gray-200"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								{category}
							</motion.button>
						))}
					</div>
				</div>
			</motion.section>

			{/* Blog Cards Grid */}
			<motion.section
				className="py-16 px-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{filteredPosts.map((blog, index) => (
							<BlogCard key={blog.id} blog={blog} index={index} />
						))}
					</motion.div>

					{/* Load More Button */}
					<motion.div
						className="text-center mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Button
							size="lg"
							className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
						>
							Load More Articles
						</Button>
					</motion.div>
				</div>
			</motion.section>

			{/* Newsletter Section */}
			<motion.section
				className="py-16 px-10 bg-gradient-to-r from-teal-600 to-emerald-600"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Stay Updated with Latest Insights
						</h2>
						<p className="text-teal-100 mb-8 max-w-2xl mx-auto">
							Subscribe to our newsletter and get the latest safety tips,
							industry news, and product updates delivered to your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
							/>
							<Button className="h-[57.6px] bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold cursor-pointer">
								Subscribe
							</Button>
						</div>
					</motion.div>
				</div>
			</motion.section>
		</div>
	);
};

export default Blogs;
