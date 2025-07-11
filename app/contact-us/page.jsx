"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
	initial: { opacity: 0, x: -60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
	initial: { opacity: 0, x: 60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.6, ease: "easeOut" }
};

const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

const staggerItem = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: "easeOut" }
};

const contactInfoStagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2
		}
	}
};

const contactInfoItem = {
	initial: { opacity: 0, x: -30 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.5, ease: "easeOut" }
};

export default function ContactUsPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [focusedField, setFocusedField] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setShowSuccess(true);
			console.log("Form submitted:", formData);
			
			// Reset form and show success for 3 seconds
			setTimeout(() => {
				setShowSuccess(false);
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					message: "",
				});
			}, 3000);
		}, 2000);
	};

	const handleFocus = (fieldName) => {
		setFocusedField(fieldName);
	};

	const handleBlur = () => {
		setFocusedField(null);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto py-8 px-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.h1 
						className="text-3xl md:text-5xl font-bold mb-2"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Contact Us
					</motion.h1>
					<motion.p 
						className="text-gray-600 md:text-base text-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Our experts will be happy to assist you with your queries
					</motion.p>
				</motion.div>

				{/* Main Contact Container */}
				<motion.div
					className="max-w-4xl mx-auto border-2 border-[#097362] p-2 bg-white rounded-2xl shadow-md overflow-hidden"
					variants={scaleIn}
					initial="initial"
					animate="animate"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.3 }}
				>
					<div className="flex flex-col md:flex-row">
						{/* Contact Information */}
						<motion.div 
							className="bg-gradient-to-b from-[#097362] to-[#0FA78E] rounded-2xl text-white p-8 md:w-2/5"
							variants={fadeInLeft}
							initial="initial"
							animate="animate"
						>
							<motion.h2 
								className="md:text-xl text-center md:text-left text-lg font-bold mb-4"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
							>
								Contact Information
							</motion.h2>
							<motion.p 
								className="mb-8 text-teal-100 text-sm md:text-base text-center md:text-left"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								Say something to start a live chat!
							</motion.p>

							<motion.div 
								className="space-y-6"
								variants={contactInfoStagger}
								initial="initial"
								animate="animate"
							>
								<motion.div 
									className="flex items-start"
									variants={contactInfoItem}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Phone className="h-5 w-5 mr-4 mt-1" />
									<p>+1(123)456-789</p>
								</motion.div>
								<motion.div 
									className="flex items-start"
									variants={contactInfoItem}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Mail className="h-5 w-5 mr-4 mt-1" />
									<p>demo@gmail.com</p>
								</motion.div>
								<motion.div 
									className="flex items-start"
									variants={contactInfoItem}
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<MapPin size={40} className="mr-4 mt-1" />
									<p>
										132 Dartmouth Street Boston, Massachusetts 02156 United
										States
									</p>
								</motion.div>
							</motion.div>							
						</motion.div>

						{/* Contact Form */}
						<motion.div 
							className="p-8 md:w-3/5"
							variants={fadeInRight}
							initial="initial"
							animate="animate"
						>
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name Fields */}
								<motion.div 
									className="grid grid-cols-1 md:grid-cols-2 gap-6"
									variants={staggerContainer}
									initial="initial"
									animate="animate"
								>
									<motion.div variants={staggerItem}>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium mb-1"
										>
											First Name
										</label>
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileFocus={{ scale: 1.02 }}
										>
											<Input
												id="firstName"
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												onFocus={() => handleFocus('firstName')}
												onBlur={handleBlur}
												className="w-full transition-all duration-300"
												style={{
													borderColor: focusedField === 'firstName' ? '#097362' : '',
													boxShadow: focusedField === 'firstName' ? '0 0 0 2px rgba(9, 115, 98, 0.2)' : ''
												}}
												disabled={isSubmitting || showSuccess}
											/>
										</motion.div>
									</motion.div>
									<motion.div variants={staggerItem}>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium mb-1"
										>
											Last Name
										</label>
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileFocus={{ scale: 1.02 }}
										>
											<Input
												id="lastName"
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												onFocus={() => handleFocus('lastName')}
												onBlur={handleBlur}
												className="w-full transition-all duration-300"
												style={{
													borderColor: focusedField === 'lastName' ? '#097362' : '',
													boxShadow: focusedField === 'lastName' ? '0 0 0 2px rgba(9, 115, 98, 0.2)' : ''
												}}
												disabled={isSubmitting || showSuccess}
											/>
										</motion.div>
									</motion.div>
								</motion.div>

								{/* Email and Phone Fields */}
								<motion.div 
									className="grid grid-cols-1 md:grid-cols-2 gap-6"
									variants={staggerContainer}
									initial="initial"
									animate="animate"
								>
									<motion.div variants={staggerItem}>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-1"
										>
											Email
										</label>
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileFocus={{ scale: 1.02 }}
										>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												onFocus={() => handleFocus('email')}
												onBlur={handleBlur}
												className="w-full transition-all duration-300"
												style={{
													borderColor: focusedField === 'email' ? '#097362' : '',
													boxShadow: focusedField === 'email' ? '0 0 0 2px rgba(9, 115, 98, 0.2)' : ''
												}}
												disabled={isSubmitting || showSuccess}
											/>
										</motion.div>
									</motion.div>
									<motion.div variants={staggerItem}>
										<label
											htmlFor="phone"
											className="block text-sm font-medium mb-1"
										>
											Phone Number
										</label>
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileFocus={{ scale: 1.02 }}
										>
											<Input
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												onFocus={() => handleFocus('phone')}
												onBlur={handleBlur}
												className="w-full transition-all duration-300"
												style={{
													borderColor: focusedField === 'phone' ? '#097362' : '',
													boxShadow: focusedField === 'phone' ? '0 0 0 2px rgba(9, 115, 98, 0.2)' : ''
												}}
												disabled={isSubmitting || showSuccess}
											/>
										</motion.div>
									</motion.div>
								</motion.div>

								{/* Message Field */}
								<motion.div
									variants={staggerItem}
									initial="initial"
									animate="animate"
								>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-1"
									>
										Message
									</label>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileFocus={{ scale: 1.02 }}
									>
										<Textarea
											id="message"
											name="message"
											placeholder="Write your message..."
											value={formData.message}
											onChange={handleChange}
											onFocus={() => handleFocus('message')}
											onBlur={handleBlur}
											className="w-full h-32 transition-all duration-300"
											style={{
												borderColor: focusedField === 'message' ? '#097362' : '',
												boxShadow: focusedField === 'message' ? '0 0 0 2px rgba(9, 115, 98, 0.2)' : ''
											}}
											disabled={isSubmitting || showSuccess}
										/>
									</motion.div>
								</motion.div>

								{/* Submit Button */}
								<motion.div 
									className="flex justify-end"
									variants={staggerItem}
									initial="initial"
									animate="animate"
								>
									<motion.div
										className="relative"
										whileHover={{ scale: isSubmitting || showSuccess ? 1 : 1.05 }}
										whileTap={{ scale: isSubmitting || showSuccess ? 1 : 0.95 }}
									>
										<motion.div
											className="relative w-32 h-10 rounded-full bg-gradient-to-b from-[#097362] to-[#0FA78E] overflow-hidden"
											layout
										>
											{/* Loading State */}
											<motion.div
												className="absolute inset-0 flex items-center justify-center"
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ 
													opacity: isSubmitting ? 1 : 0,
													scale: isSubmitting ? 1 : 0.8
												}}
												transition={{ duration: 0.3 }}
											>
												<motion.div
													className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
													animate={{ rotate: 360 }}
													transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
												/>
											</motion.div>

											{/* Success State */}
											<motion.div
												className="absolute inset-0 flex items-center justify-center"
												initial={{ opacity: 0, scale: 0.5 }}
												animate={{ 
													opacity: showSuccess ? 1 : 0,
													scale: showSuccess ? 1 : 0.5
												}}
												transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
											>
												<motion.div
													className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
													initial={{ scale: 0, rotate: -180 }}
													animate={{ 
														scale: showSuccess ? 1 : 0,
														rotate: showSuccess ? 0 : -180
													}}
													transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
												>
													<motion.svg
														className="w-4 h-4 text-[#097362]"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														initial={{ pathLength: 0 }}
														animate={{ pathLength: showSuccess ? 1 : 0 }}
														transition={{ duration: 0.6, delay: 0.2 }}
													>
														<motion.path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M5 13l4 4L19 7"
														/>
													</motion.svg>
												</motion.div>
											</motion.div>

											{/* Normal State */}
											<motion.div
												className="absolute inset-0"
												initial={{ opacity: 1 }}
												animate={{ 
													opacity: (isSubmitting || showSuccess) ? 0 : 1,
													scale: (isSubmitting || showSuccess) ? 0.9 : 1
												}}
												transition={{ duration: 0.3 }}
											>
												<Button
													type="submit"
													className="w-full h-full bg-transparent hover:bg-white/10 text-white border-0 rounded-full transition-all duration-200"
													disabled={isSubmitting || showSuccess}
												>
													{isSubmitting ? 'Sending...' : 'Send Message'}
												</Button>
											</motion.div>
										</motion.div>
									</motion.div>
								</motion.div>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}