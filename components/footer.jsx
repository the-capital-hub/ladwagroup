import React from "react";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AppStore from "@/public/images/footer/AppStore.png";
import GooglePlay from "@/public/images/footer/GooglePlay.png";

export default function ModernFooter() {
	const companyLinks = [
		{ name: "About Us", href: "/about" },
		{ name: "Features", href: "/features" },
		{ name: "Services", href: "/services" },
		{ name: "Works", href: "/works" },
		{ name: "Career", href: "/career" },
		{ name: "Contact Us", href: "/contact" },
	];

	const resourcesLinks = [
		{ name: "Free eBooks", href: "/ebooks" },
		{ name: "How to - Blog", href: "/blog" },
		{ name: "Watch a Demo", href: "/demo" },
		{ name: "Webinars", href: "/webinars" },
		{ name: "Youtube Playlist", href: "/youtube" },
		{ name: "Security", href: "/security" },
	];

	const supportLinks = [
		{ name: "Customer Support", href: "/support" },
		{ name: "Help Center", href: "/help" },
		{ name: "Delivery Details", href: "/delivery" },
		{ name: "Live Chat", href: "/chat" },
	];

	const featuresLinks = [
		{ name: "Product Tours", href: "/product-tours" },
		{ name: "Analytics", href: "/analytics" },
		{ name: "Integrations", href: "/integrations" },
		{ name: "Mobile App", href: "/mobile-app" },
		{ name: "API Access", href: "/api-access" },
		{ name: "Security", href: "/security" },
	];

	const socialLinks = [
		{ icon: Facebook, href: "https://facebook.com/ladwa", label: "Facebook" },
		{ icon: Twitter, href: "https://twitter.com/ladwa", label: "Twitter" },
		{
			icon: Instagram,
			href: "https://instagram.com/ladwa",
			label: "Instagram",
		},
		{
			icon: Linkedin,
			href: "https://linkedin.com/company/ladwa",
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
							<span className="text-3xl lg:text-4xl font-bold text-teal-700 md:mt-12  mt-16">
								LADWA
							</span>
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
						<LinkSection title="Features" links={featuresLinks} />
						<LinkSection title="Support" links={supportLinks} />
					</div>

					{/* App Download Section */}
					<div className="lg:col-span-2">
						<h3 className="text-lg font-semibold mb-4">Install App</h3>
						<div className="space-y-4">
							<Link href="#" className="block">
								<Image
									src={AppStore.src}
									alt="App Store"
									width={170}
									height={50}
									className="rounded-lg"
								/>
							</Link>
							<Link href="#" className="block">
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
								href="/terms"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Terms of Use
							</Link>
							<Link
								href="/privacy"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Privacy Policy
							</Link>
							<Link
								href="/legal"
								className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
							>
								Legal
							</Link>
							<Link
								href="/sitemap"
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
