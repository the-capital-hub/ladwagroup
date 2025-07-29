"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";
import BlogCard from "@/components/Blog/BlogCard.jsx";
import LoadingSpinner from "@/components/Admin/Blogs/LoadingSpinner.jsx";
import Image from "next/image";
import BannerImg from "@/public/images/blog/banner.png";

const Blogs = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [categories, setCategories] = useState(["All"]);
	const [stats, setStats] = useState({
		total: 0,
		published: 0,
	});

	// Fetch blogs from database
	const fetchBlogs = async (pageNum = 1, reset = false) => {
		try {
			if (pageNum === 1) setLoading(true);
			else setLoadingMore(true);

			const params = new URLSearchParams();
			params.append("status", "published"); // Only show published blogs
			params.append("page", pageNum.toString());
			params.append("limit", "6");

			if (selectedCategory !== "All") {
				params.append("category", selectedCategory);
			}

			const res = await fetch(`/api/blogs?${params}`);
			const data = await res.json();

			if (res.ok) {
				const fetchedBlogs = data.blogs || [];

				if (reset || pageNum === 1) {
					setBlogs(fetchedBlogs);
				} else {
					setBlogs((prev) => [...prev, ...fetchedBlogs]);
				}

				setHasMore(data.pagination?.page < data.pagination?.pages);
				setPage(pageNum);

				// Update stats
				setStats({
					total: data.pagination?.total || 0,
					published: data.pagination?.total || 0,
				});

				// Extract unique categories
				const uniqueCategories = [
					"All",
					...new Set(fetchedBlogs.map((blog) => blog.category)),
				];
				setCategories(uniqueCategories);
			}
		} catch (error) {
			console.error("Failed to fetch blogs:", error);
		} finally {
			setLoading(false);
			setLoadingMore(false);
		}
	};

	// Initial fetch
	useEffect(() => {
		fetchBlogs(1, true);
	}, [selectedCategory]);

	// Filter blogs based on search term
	const filteredBlogs = blogs.filter(
		(blog) =>
			blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
			blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(blog.tags &&
				blog.tags.some((tag) =>
					tag.toLowerCase().includes(searchTerm.toLowerCase())
				))
	);

	const handleLoadMore = () => {
		if (!loadingMore && hasMore) {
			fetchBlogs(page + 1, false);
		}
	};

	const handleRefresh = () => {
		setPage(1);
		fetchBlogs(1, true);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setPage(1);
		setSearchTerm("");
	};

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
						src={BannerImg || "/placeholder.svg"}
						alt="LADWA Safety Professional"
						className="w-full h-full object-cover"
						priority
						fill
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
								repeat: Number.POSITIVE_INFINITY,
								delay: i * 1.3,
							}}
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
						/>
					))}
				</div>

				<div className="relative container mx-auto px-4 text-center z-20">
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
							OUR{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600">
								BLOGS
							</span>
						</motion.h1>
						<motion.p
							variants={itemVariants}
							className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
						>
							Discover insights, tips, and innovations in safety, technology,
							and industry best practices
						</motion.p>

						{/* Stats Display */}
						<motion.div
							variants={itemVariants}
							className="flex justify-center gap-8 mb-8 text-white"
						>
							<div className="text-center">
								<div className="text-3xl font-bold text-teal-400">
									{stats.total}
								</div>
								<div className="text-sm opacity-80">Articles</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-teal-400">
									{categories.length - 1}
								</div>
								<div className="text-sm opacity-80">Categories</div>
							</div>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<div className="relative">
								<Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
								<input
									type="text"
									placeholder="Search articles..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-teal-500/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-500/50 w-64"
								/>
							</div>
							{/* <Button
								onClick={handleRefresh}
								variant="outline"
								className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
								disabled={loading}
							>
								<RefreshCw
									className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
								/>
								Refresh
							</Button> */}
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
								onClick={() => handleCategoryChange(category)}
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
								disabled={loading}
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
					{/* Loading State */}
					{loading ? (
						<div className="flex flex-col items-center justify-center py-16">
							<LoadingSpinner size="lg" className="mb-6" />
							<motion.p
								className="text-gray-600 text-lg"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Loading amazing content...
							</motion.p>
						</div>
					) : filteredBlogs.length === 0 ? (
						/* Empty State */
						<motion.div
							className="text-center py-16"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
						>
							<div className="text-gray-400 mb-6">
								<Search className="h-20 w-20 mx-auto mb-4" />
							</div>
							<h3 className="text-2xl font-bold text-gray-700 mb-4">
								No Articles Found
							</h3>
							<p className="text-gray-600 mb-8 max-w-md mx-auto">
								{searchTerm
									? `No articles found for "${searchTerm}". Try different keywords.`
									: "We're working on creating amazing content for you. Check back soon!"}
							</p>
							{searchTerm && (
								<Button
									onClick={() => setSearchTerm("")}
									className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
								>
									Clear Search
								</Button>
							)}
						</motion.div>
					) : (
						/* Blog Cards */
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							{filteredBlogs.map((blog, index) => (
								<BlogCard key={blog._id || blog.id} blog={blog} index={index} />
							))}
						</motion.div>
					)}

					{/* Load More Button */}
					{!loading && filteredBlogs.length > 0 && hasMore && !searchTerm && (
						<motion.div
							className="text-center mt-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<Button
								onClick={handleLoadMore}
								disabled={loadingMore}
								size="lg"
								className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								{loadingMore ? (
									<>
										<LoadingSpinner size="sm" className="mr-2" />
										Loading More...
									</>
								) : (
									"Load More Articles"
								)}
							</Button>
						</motion.div>
					)}

					{/* Results Info */}
					{!loading && (
						<motion.div
							className="text-center mt-8 text-gray-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							{searchTerm && (
								<p>
									Showing {filteredBlogs.length} result
									{filteredBlogs.length !== 1 ? "s" : ""} for "{searchTerm}"
								</p>
							)}
							{selectedCategory !== "All" && !searchTerm && (
								<p>
									Showing {filteredBlogs.length} article
									{filteredBlogs.length !== 1 ? "s" : ""} in {selectedCategory}
								</p>
							)}
						</motion.div>
					)}
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
							<Button className="h-[57.6px] bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
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
