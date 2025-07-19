"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useInquiryStore } from "@/components/Solutions/Inquiry.js";

const InquiryForm = () => {
	const [store, setStore] = useState(useInquiryStore.getState());
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	React.useEffect(() => {
		const unsubscribe = useInquiryStore.subscribe(setStore);
		return unsubscribe;
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", { product: store.product, ...formData });
		useInquiryStore.closeInquiry();
		alert("Your inquiry has been submitted successfully!");
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<AnimatePresence>
			{store.isOpen && (
				<motion.div
					className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => useInquiryStore.closeInquiry()}
				>
					<motion.div
						className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="grid grid-cols-1 md:grid-cols-2">
							{/* Product Info Section */}
							<div className="bg-teal-600 p-6 text-white">
								<h2 className="text-2xl font-bold mb-4">Product Enquiry</h2>
								{store.product && (
									<div className="space-y-4">
										<h3 className="font-semibold text-lg">
											{store.product.name}
										</h3>
										<p className="text-sm text-teal-100 leading-relaxed">
											{store.product.description}
										</p>
										<div className="relative h-48 bg-teal-700/50 rounded-lg overflow-hidden">
											<img
												src={
													store.product.image ||
													"/placeholder.svg?height=300&width=400"
												}
												alt={store.product.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="bg-teal-700/30 p-3 rounded-lg">
											<p className="text-sm">
												<span className="font-medium">Price: </span>₹{" "}
												{store.product.price.toLocaleString()}
											</p>
										</div>
									</div>
								)}
							</div>

							{/* Form Section */}
							<div className="p-6 relative">
								<button
									onClick={() => useInquiryStore.closeInquiry()}
									className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
								>
									<X size={24} />
								</button>
								<h3 className="text-xl font-semibold mb-6 text-gray-900">
									Send Inquiry
								</h3>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												First Name *
											</label>
											<Input
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												required
												className="w-full"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Last Name *
											</label>
											<Input
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												required
												className="w-full"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Email *
										</label>
										<Input
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Phone Number *
										</label>
										<Input
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleChange}
											required
											className="w-full"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Message
										</label>
										<Textarea
											name="message"
											rows={4}
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell us about your requirements..."
											className="w-full"
										/>
									</div>
									<Button
										type="submit"
										className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-semibold"
									>
										Submit Inquiry
									</Button>
								</form>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default InquiryForm;
