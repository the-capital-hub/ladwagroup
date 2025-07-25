import React from "react";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AppStore from "@/public/images/footer/AppStore.png";
import GooglePlay from "@/public/images/footer/GooglePlay.png";

export default function ModernFooter() {
	const companyLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Solutions", href: "/solutions" },
		{ name: "Contact Us", href: "/contact-us" },
	];

	const resourcesLinks = [
		{ name: "Blogs", href: "/blog" },
		{ name: "Certificates", href: "/contact-us" },
		{ name: "Terms and Conditions", href: "/contact-us" },
		{ name: "Privacy Policy", href: "/contact-us" },
	];

	const supportLinks = [
		{ name: "Mandatory Signs", href: "/contact-us" },
		{ name: "Informatory Signs", href: "/contact-us" },
		{ name: "Floor Marking Tapes", href: "/contact-us" },
		{ name: "Traffic Cones & Accessories", href: "/contact-us" },
		{ name: "Road Humps / Speed Breakers", href: "/contact-us" },
	];

	const featuresLinks = [
		{ name: "Road Signs", href: "/category/road-signs" },
		{ name: "Road Safety Equipment & Traffic Safety Product", href: "/category/road-traffic-safety" },
		{ name: "Industrial Safety", href: "/category/industrial-safety-products" },
		{ name: "First Aid Kit Box", href: "/category/first-aid-kit-box" },
	];

	const socialLinks = [
		{ icon: Facebook, href: "https://www.facebook.com/ladwa.Inc/", label: "Facebook" },
		{ icon: Twitter, href: "https://x.com/Ladwa_solutions?t=XSd2oXxlWQJRNbpZZGxelg&s=09", label: "X" },
		{ icon: Youtube, href: "https://www.youtube.com/channel/UC5QKEkNyiib6_ATyO5aTCRQ", label: "Youtube" },
		{
			icon: Instagram,
			href: "https://www.instagram.com/ladwa_solutions?igsh=ZmN0NGJuOWJ4bzR2",
			label: "Instagram",
		},
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/company/ladwa-solutions-inc/",
			label: "LinkedIn",
		},
		// { icon: Github, href: "https://github.com/ladwa", label: "GitHub" },
	];

	const LinkSection = ({ title, links }) => (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold  mb-4">{title}</h3>
			<ul className="space-y-2">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
							className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<footer className="bg-gradient-to-br from-teal-50 to-teal-400 text-black font-semibold">
			<div className="container mx-auto px-10 py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
					{/* Company Brand & Description */}
					<div className="lg:col-span-4 space-y-6">
						<div className="flex items-center space-x-3">
							<Image
								src="/images/logo.png"
								alt="Ladwa Logo"
								width={160}
								height={50}
								className="md:mt-12 mt-16"
							/>
						</div>


						<p className="text-gray-700 text-sm leading-relaxed max-w-md">
							Ladwa is a thriving community where innovators, professionals, and
							enthusiasts come together to share knowledge, collaborate, and
							grow. Building the future of technology together.
						</p>

						{/* Social Links */}
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<Link
									key={index}
									href={social.href}
									className="bg-teal-600 hover:bg-teal-500 p-2 rounded-full transition-colors duration-200"
									aria-label={social.label}
								>
									<social.icon className="w-4 h-4 text-white" />
								</Link>
							))}
						</div>
					</div>

					{/* Navigation Links */}
					<div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
						<LinkSection title="Company" links={companyLinks} />
						<LinkSection title="Resources" links={resourcesLinks} />
						<LinkSection title="Popular Categories" links={featuresLinks} />
						<LinkSection title="Popular Products" links={supportLinks} />
					</div>

					{/* App Download Section */}
					<div className="lg:col-span-2">
						<h3 className="text-lg font-semibold mb-4">Install App</h3>
						<div className="space-y-4">
							<Link href="/contact-us" className="block">
								<Image
									src={AppStore.src}
									alt="App Store"
									width={170}
									height={50}
									className="rounded-lg"
								/>
							</Link>
							<Link href="/contact-us" className="block">
								<Image
									src={GooglePlay.src}
									alt="Google Play"
									width={170}
									height={50}
									className="rounded-lg"
								/>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-teal-600">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-center md:text-left">
							<p className="text-gray-700 text-sm">
								© 2025 All rights reserved by LADWA
							</p>
						</div>

						<div className="flex flex-wrap justify-center md:justify-end gap-6">
							<Link
								href="/contact-us"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Terms of Use
							</Link>
							<Link
								href="/contact-us"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Privacy Policy
							</Link>
							<Link
								href="/contact-us"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Legal
							</Link>
							<Link
								href="/contact-us"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Site Map
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
