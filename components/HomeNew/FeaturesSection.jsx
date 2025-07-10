import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "@/public/images/NewHome";

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
		<section className="py-10 bg-gradient-to-br from-cyan-50 to-teal-50">
			<div className="px-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						What Sets LADWA Apart
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						LADWA stands apart with its innovative, end-to-end EHS solutions that combine global standards with deep local expertise. Our unwavering focus on quality, sustainability, and customer success redefines safety across industries and communities.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{features.slice(0, 3).map((feature, index) => {
						// const IconComponent = feature.icon;
						return (
							<div
								key={index}
								className="flex justify-center items-center gap-5 border-2 border-teal-200 bg-linear-to-r/srgb from-white to-teal-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<img
									src={feature.icon.src}
									className="w-16 h-16 text-teal-600 object-cover"
								/>
								<div className="">
									<h3 className="text-xl font-bold text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{features.slice(3).map((feature, index) => {
						return (
							<div
								key={index}
								className="flex justify-center items-center gap-5 border-2 border-teal-200 bg-linear-to-r/srgb from-white to-teal-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<img
									src={feature.icon.src}
									className="w-16 h-16 text-teal-600 object-cover"
								/>
								<div className="">
									<h3 className="text-xl font-bold text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
