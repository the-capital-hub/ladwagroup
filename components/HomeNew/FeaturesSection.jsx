import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "@/public/images/NewHome";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
    variable: "--font-manrope",
	subsets: ["latin"],
})
const inter = Inter({
    variable: "--font-inter",
	subsets: ["latin"],
})
export default function FeaturesSection() {
	const features = [
		{
			icon: Logo1,
			title: "Innovation-Driven Safety",
			description: "Proprietary tech in PPE, road & industrial safety gear",
		},
		{
			icon: Logo2,
			title: "Global-Quality Standards",
			description: "ISO, CE, ANSI, and OSHA certified products",
		},
		{
			icon: Logo3,
			title: "Eco-Friendly Solutions",
			description: "Recycled, biodegradable, and sustainable product lines",
		},
		{
			icon: Logo4,
			title: "Pan-India to Global Reach",
			description: "Serving 20+ countries with growing export networks",
		},
		{
			icon: Logo5,
			title: "Thought Leadership",
			description: "Safety white papers, case studies, and training academies",
		},
	];

	return (
		<section className=" w-full max-w-7xl mx-auto  rounded-[30px] p-1 bg-gradient-to-b from-[#A2FFF0]  to-white">
			<div className="p-10 bg-gradient-to-b from-[#BAFFF4] to-[#FFFFFF] rounded-[30px]">
				<div className="text-center mb-16">
					<h2 className="text-[64px] font-bold text-black mb-4">
						What Sets LADWA Apart
					</h2>
					<p className={`text-xl ${manrope.className} font-semibold text-[#3F3F3F] max-w-4xl mx-auto`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
						massa et amet nibh blandit vel adipiscing elit. Lorem ipsum dolor
						sit amet.
					</p>
				</div>

				<div className={`${inter.className} grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16`}>
					{features.slice(0, 3).map((feature, index) => {
						// const IconComponent = feature.icon;
						return (
							<div className='bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl w-full'>

							<div
								key={index}
								className="flex justify-center items-center gap-5 bg-gradient-to-r from-[#fff] to-[#9FFFF0] p-8 rounded-2xl"
							>
								<img
									src={feature.icon.src}
									className="w-16 h-16 text-teal-600 object-cover"
								/>
								<div className="">
									<h3 className="text-xl font-medium text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600 text-[16px]">{feature.description}</p>
								</div>
							</div>
							</div>
						);
					})}
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{features.slice(3).map((feature, index) => {
						return (
							<div className='bg-gradient-to-b from-[#A2FFF0] to-white p-1 rounded-3xl w-full'>

							<div
								key={index}
								className="flex justify-center items-center gap-5 bg-gradient-to-r from-[#fff] to-[#9FFFF0] p-8 rounded-2xl"
							>
								<img
									src={feature.icon.src}
									className="w-12 h-12 text-teal-600 object-cover"
								/>
								<div className="">
									<h3 className="text-xl font-bold text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
