import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
	const footerSections = [
		{
			title: "Pricing",
			links: [
				"Use Cases",
				"Support",
				"Engage",
				"Convert",
				"Company Size",
				"Mid-Market / Enterprise",
				"Small Business",
				"Early Stage",
			],
		},
		{
			title: "Features",
			links: [
				"Business Messenger",
				"Customizable bots",
				"Automated answers",
				"Product Tours",
				"Outbound Messages",
				"Inbox",
				"Help Center Articles",
				"Apps + Integrations",
				"Customer data",
				"Live Chat",
				"Mobile Apps",
				"Mobile Carousels",
				"Series",
				"Transactional Messaging",
				"Surveys",
				"Switch",
				"SMS",
			],
		},
		{
			title: "Resources",
			links: [
				"Blog",
				"Watch a Demo",
				"Glossary",
				"Academy",
				"Webinars",
				"Product Changes",
				"App Store",
				"Docs",
				"Developers",
				"Status",
				"Security",
				"Books and Guides",
				"Support ROI Calculator",
				"Services",
			],
		},
		{
			title: "Company",
			links: [
				"About",
				"Customers",
				"Community Forum",
				"Careers",
				"Newsroom",
				"App Partner Program",
				"Service Partner Program",
				"Contact Us",
				"Terms",
				"Privacy",
			],
		},
		{
			title: "Industries",
			links: ["Financial Services", "E-commerce", "Education", "Healthcare"],
		},
	];

	const languages = [
		"English (United States)",
		"German",
		"Spanish",
		"French",
		"Portuguese (Brazil)",
	];

	const bottomLinks = [
		"Terms",
		"Privacy",
		"Status",
		"Security",
		"Do not share my personal information",
	];

	return (
		<footer className="bg-gradient-to-b from-teal-50 to-teal-400 text-gray-800 font-semibold">
			<div className="container mx-auto px-10 py-16">
				{/* Main footer content */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
					{footerSections.map((section, index) => (
						<div key={index}>
							<h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
							<ul className="space-y-2">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href="#"
											className="text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200"
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Language selector */}
				<div className="mb-8">
					<div className="flex items-center space-x-2 mb-4">
						<Globe className="w-5 h-5 text-gray-700" />
						<span className="font-semibold text-gray-900">
							Choose your language
						</span>
					</div>
					<div className="flex flex-wrap gap-4">
						{languages.map((language, index) => (
							<Link
								key={index}
								href="#"
								className="text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200"
							>
								{language}
							</Link>
						))}
					</div>
				</div>

				{/* Bottom links */}
				<div className="pt-8 border-t border-teal-300">
					<div className="flex flex-wrap gap-6">
						{bottomLinks.map((link, index) => (
							<Link
								key={index}
								href="#"
								className="text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200"
							>
								{link}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
