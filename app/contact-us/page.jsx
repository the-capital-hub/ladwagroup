"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Add your form submission logic here
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto py-8 px-10">
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
					<p className="text-gray-600">
						Our experts will be happy to assist you with your queries
					</p>
				</motion.div>

				<motion.div
					className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="flex flex-col md:flex-row">
						{/* Contact Information */}
						<div className="bg-teal-700 text-white p-8 md:w-2/5">
							<h2 className="text-xl font-bold mb-4">Contact Information</h2>
							<p className="mb-8 text-teal-100">
								Say something to start a live chat!
							</p>

							<div className="space-y-6">
								<div className="flex items-start">
									<Phone className="h-5 w-5 mr-4 mt-1" />
									<p>+1(123)456-789</p>
								</div>
								<div className="flex items-start">
									<Mail className="h-5 w-5 mr-4 mt-1" />
									<p>demo@gmail.com</p>
								</div>
								<div className="flex items-start">
									<MapPin className="h-5 w-5 mr-4 mt-1" />
									<p>
										132 Dartmouth Street Boston, Massachusetts 02156 United
										States
									</p>
								</div>
							</div>

							{/* Decorative Circle */}
							<div className="relative mt-16">
								<div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600 rounded-full opacity-50"></div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="p-8 md:w-3/5">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium mb-1"
										>
											First Name
										</label>
										<Input
											id="firstName"
											name="firstName"
											value={formData.firstName}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium mb-1"
										>
											Last Name
										</label>
										<Input
											id="lastName"
											name="lastName"
											value={formData.lastName}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-1"
										>
											Email
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium mb-1"
										>
											Phone Number
										</label>
										<Input
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-1"
									>
										Message
									</label>
									<Textarea
										id="message"
										name="message"
										placeholder="Write your message..."
										value={formData.message}
										onChange={handleChange}
										className="w-full h-32"
									/>
								</div>

								<div className="flex justify-end">
									<Button
										type="submit"
										className="bg-teal-700 hover:bg-teal-800"
									>
										Send Message
									</Button>
								</div>
							</form>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
