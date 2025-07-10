import { Package, Settings, Truck, Leaf } from "lucide-react";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "@/public/images/NewHome";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
const inter = Inter({
    variable: "--font-inter",
	subsets: ["latin"],
})

export default function GlobalBuyersSection() {
	const benefits = [
		{
			icon: Logo2,
			title: "Wide Export Portfolio",
			description: "Road safety, industrial safety, PPE, emergency kits, smart traffic systems, and more.",
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
		<section className=" bg-white mx-auto relative my-24">
				<div className="absolute inset-0  md:flex items-center hidden justify-center">
					<div className="w-[90%] h-[115%] bg-gradient-to-b from-[#009D84] to-white rounded-full opacity-30"></div>
				</div>
				<div className="absolute inset-0 md:flex hidden items-center justify-center ">
					<div className="w-[75%] h-[95%] bg-gradient-to-b from-[#009D84] border-6 border-white to-white rounded-full opacity-40"></div>
				</div>
			<div className="p-10 relative ">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
					<div className="col-span-1">
						<div className={`flex flex-col mx-3 mt-3 bg-white justify-center items-center border-2 border-teal-200 p-8 rounded-2xl ${inter.className}`}>
							<img
								src={Logo1.src}
								className="w-28 h-28 text-white object-cover"
							/>
							<h3 className="text-[25px] font-medium text-gray-900 mb-4">
								International Certifications
							</h3>
							<p className="text-gray-600 mb-6 text-[20px] text-center">
								CE, ISO, ANSI, and OSHA compliance ensures global market
								readiness, seamless integration, and trust.
							</p>
							<Button className="bg-gradient-to-b from-[#097362] to-[#029981] hover:bg-teal-700 text-white rounded-full">
								Know More
							</Button>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-2">
						<h2 className="text-[45px] font-bold text-gray-900 mb-8">
							Why Global Buyers Choose LADWA
						</h2>
						<div className={`${inter.className} grid grid-cols-1 md:grid-cols-2 gap-2`}>
							{benefits.map((benefit, index) => {
								return (
									<div className='bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl w-full h-full'>

									<div
										key={index}
										className="flex items-center justify-center space-x-8 p-5 h-full bg-gradient-to-r from-white to-teal-200 rounded-3xl"
									>
										<img
											src={benefit.icon.src}
											className="w-12 h-12 text-teal-600"
										/>
										<div>
											<h4 className="font-medium text-[24px] text-gray-900 mb-2">
												{benefit.title}
											</h4>
											<p className="text-gray-600 text-[16px]">{benefit.description}</p>
										</div>
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
