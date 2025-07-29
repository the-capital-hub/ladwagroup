"use client";

import { motion } from "framer-motion";
import { ScrollText, Shield, FileText, Eye } from "lucide-react";

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
	initial: { opacity: 0, x: -60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const staggerItem = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: "easeOut" },
};

export default function TermsPrivacyPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto py-8 px-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.h1
						className="text-3xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Legal Information
					</motion.h1>
					<motion.p
						className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Please read our terms and conditions and privacy policy carefully to
						understand how we operate and protect your information.
					</motion.p>
				</motion.div>

				{/* Navigation Cards */}
				<motion.div
					className="grid md:grid-cols-2 gap-6 mb-12"
					variants={staggerContainer}
					initial="initial"
					animate="animate"
				>
					<motion.div
						variants={staggerItem}
						className="bg-gradient-to-br from-[#097362] to-[#0FA78E] rounded-2xl p-6 text-white cursor-pointer"
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ duration: 0.3 }}
						onClick={() =>
							document
								.getElementById("terms")
								.scrollIntoView({ behavior: "smooth" })
						}
					>
						<div className="flex items-center mb-4">
							<ScrollText className="h-8 w-8 mr-3" />
							<h3 className="text-xl font-bold">Terms & Conditions</h3>
						</div>
						<p className="text-teal-100">
							Learn about our service terms, user responsibilities, and legal
							agreements.
						</p>
					</motion.div>

					<motion.div
						variants={staggerItem}
						className="bg-gradient-to-br from-[#097362] to-[#0FA78E] rounded-2xl p-6 text-white cursor-pointer"
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ duration: 0.3 }}
						onClick={() =>
							document
								.getElementById("privacy")
								.scrollIntoView({ behavior: "smooth" })
						}
					>
						<div className="flex items-center mb-4">
							<Shield className="h-8 w-8 mr-3" />
							<h3 className="text-xl font-bold">Privacy Policy</h3>
						</div>
						<p className="text-teal-100">
							Understand how we collect, use, and protect your personal
							information.
						</p>
					</motion.div>
				</motion.div>

				{/* Terms & Conditions Section */}
				<motion.section
					id="terms"
					className="mb-16"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					<div className="max-w-4xl mx-auto border-2 border-[#097362] rounded-2xl overflow-hidden">
						<div className="bg-gradient-to-r from-[#097362] to-[#0FA78E] p-6">
							<div className="flex items-center text-white">
								<FileText className="h-6 w-6 mr-3" />
								<h2 className="text-2xl md:text-3xl font-bold">
									Terms & Conditions
								</h2>
							</div>
						</div>

						<div className="p-8 bg-white">
							<motion.div
								className="space-y-6"
								variants={staggerContainer}
								initial="initial"
								animate="animate"
							>
								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										1. Acceptance of Terms
									</h3>
									<p className="text-gray-700 leading-relaxed">
										By accessing and using LADWA's services, you accept and
										agree to be bound by the terms and provision of this
										agreement. These terms apply to all visitors, users, and
										others who access or use our services.
									</p>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										2. Use License
									</h3>
									<p className="text-gray-700 leading-relaxed mb-3">
										Permission is granted to temporarily access our services for
										personal, non-commercial transitory viewing only. This is
										the grant of a license, not a transfer of title, and under
										this license you may not:
									</p>
									<ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
										<li>modify or copy the materials</li>
										<li>
											use the materials for any commercial purpose or for any
											public display
										</li>
										<li>
											attempt to reverse engineer any software contained on our
											platform
										</li>
										<li>
											remove any copyright or other proprietary notations from
											the materials
										</li>
									</ul>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										3. Product Information
									</h3>
									<p className="text-gray-700 leading-relaxed">
										We strive to provide accurate product information, including
										specifications, certifications, and compliance details.
										However, we do not warrant that product descriptions or
										other content is accurate, complete, reliable, current, or
										error-free.
									</p>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										4. Limitation of Liability
									</h3>
									<p className="text-gray-700 leading-relaxed">
										In no event shall LADWA or its suppliers be liable for any
										damages (including, without limitation, damages for loss of
										data or profit, or due to business interruption) arising out
										of the use or inability to use our services.
									</p>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										5. Governing Law
									</h3>
									<p className="text-gray-700 leading-relaxed">
										These terms and conditions are governed by and construed in
										accordance with the laws of India, and you irrevocably
										submit to the exclusive jurisdiction of the courts in
										Bengaluru, Karnataka.
									</p>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.section>

				{/* Privacy Policy Section */}
				<motion.section
					id="privacy"
					className="mb-8"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
				>
					<div className="max-w-4xl mx-auto border-2 border-[#097362] rounded-2xl overflow-hidden">
						<div className="bg-gradient-to-r from-[#097362] to-[#0FA78E] p-6">
							<div className="flex items-center text-white">
								<Eye className="h-6 w-6 mr-3" />
								<h2 className="text-2xl md:text-3xl font-bold">
									Privacy Policy
								</h2>
							</div>
						</div>

						<div className="p-8 bg-white">
							<motion.div
								className="space-y-6"
								variants={staggerContainer}
								initial="initial"
								animate="animate"
							>
								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										Information We Collect
									</h3>
									<p className="text-gray-700 leading-relaxed mb-3">
										We collect information you provide directly to us, such as
										when you:
									</p>
									<ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
										<li>Fill out contact forms or request information</li>
										<li>Subscribe to our newsletters or communications</li>
										<li>Participate in surveys or provide feedback</li>
										<li>Contact us for customer support</li>
									</ul>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										How We Use Your Information
									</h3>
									<p className="text-gray-700 leading-relaxed mb-3">
										We use the information we collect to:
									</p>
									<ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
										<li>Provide, maintain, and improve our services</li>
										<li>Process transactions and send related information</li>
										<li>
											Send you technical notices, updates, and support messages
										</li>
										<li>
											Respond to your comments, questions, and customer service
											requests
										</li>
										<li>
											Communicate with you about products, services, and events
										</li>
									</ul>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										Information Sharing
									</h3>
									<p className="text-gray-700 leading-relaxed">
										We do not sell, trade, or otherwise transfer your personal
										information to third parties without your consent, except as
										described in this policy. We may share your information with
										trusted partners who assist us in operating our website and
										conducting our business.
									</p>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										Data Security
									</h3>
									<p className="text-gray-700 leading-relaxed">
										We implement appropriate security measures to protect your
										personal information against unauthorized access,
										alteration, disclosure, or destruction. However, no method
										of transmission over the internet is 100% secure.
									</p>
								</motion.div>

								<motion.div variants={staggerItem}>
									<h3 className="text-xl font-semibold mb-3 text-[#097362]">
										Contact Information
									</h3>
									<p className="text-gray-700 leading-relaxed">
										If you have any questions about this Privacy Policy, please
										contact us at:
									</p>
									<div className="mt-3 p-4 bg-gray-50 rounded-lg">
										<p className="text-gray-700">
											<strong>Email:</strong> sales@ladwas.com
											<br />
											<strong>Phone:</strong> +91-9945234161
											<br />
											<strong>Address:</strong> NO. 3,4 AND 9, Khata No. 37/1,
											Singasandra Village, Begur Hobli, Bengaluru-560068
										</p>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
