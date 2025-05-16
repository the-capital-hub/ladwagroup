import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function FeatureCard({
	title,
	description,
	icon,
	bgColor = "bg-white",
	iconBgColor = "bg-teal-50",
	isReversed = false,
}) {
	return (
		<Card
			className={`max-w-[400px] p-6 ${bgColor} h-full ${
				isReversed ? "border" : ""
			}`}
		>
			<div
				className={`flex flex-col ${
					isReversed
						? "md:flex-row-reverse md:items-start"
						: "md:flex-row md:items-start"
				} gap-4`}
			>
				<div
					className={`w-40 p-3 rounded-full flex items-center justify-center`}
				>
					<Image src={icon} alt={title} width={40} height={40} />
				</div>
				<div>
					<h3 className="text-lg font-bold mb-2">{title}</h3>
					<p className="text-gray-600">{description}</p>
					<div
						className={`mt-4 h-1 w-16 bg-teal-700 ${
							isReversed ? "md:ml-auto" : ""
						}`}
					></div>
				</div>
			</div>
		</Card>
	);
}
