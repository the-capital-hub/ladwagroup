import { Package, Settings, Truck, Leaf } from "lucide-react";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "@/public/images/NewHome";
import { Button } from "@/components/ui/button";

export default function GlobalBuyersSection() {
	const benefits = [
		{
			icon: Logo2,
			title: "Wide Export Portfolio",
			description: "Road safety, industrial safety, PPE, systems, and tools.",
		},
		{
			icon: Logo3,
			title: "Custom Manufacturing",
			description:
				"Private labeling, bespoke and packaging to meet local compliance standards.",
		},
		{
			icon: Logo4,
			title: "Efficient Logistics",
			description:
				"Streamlined supply chain, global shipments, full export documentation, and distributor support.",
		},
		{
			icon: Logo5,
			title: "Sustainability Focus",
			description:
				"Eco-friendly manufacturing, compliance and biodegradable goods — aligned with modern procurement goals.",
		},
	];

	return (
		<section className="py-10 bg-white">
			<div className="px-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
					<div className="col-span-1">
						<div className="flex flex-col justify-center items-center border-2 border-teal-200 p-8 rounded-2xl">
							<img
								src={Logo1.src}
								className="w-32 h-32 text-white object-cover"
							/>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								International Certifications
							</h3>
							<p className="text-gray-600 mb-6">
								CE, ISO, ANSI, and OSHA compliance ensures global market
								readiness, seamless integration, and trust.
							</p>
							<Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full">
								Know More
							</Button>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-2">
						<h2 className="text-4xl font-bold text-gray-900 mb-8">
							Why Global Buyers Choose LADWA
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{benefits.map((benefit, index) => {
								return (
									<div
										key={index}
										className="flex items-center justify-center space-x-4 p-4 border-2 border-teal-200 bg-linear-to-r/srgb from-white to-teal-200 rounded-2xl"
									>
										<img
											src={benefit.icon.src}
											className="w-12 h-12 text-teal-600"
										/>
										<div>
											<h4 className="font-bold text-gray-900 mb-2">
												{benefit.title}
											</h4>
											<p className="text-gray-600">{benefit.description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
