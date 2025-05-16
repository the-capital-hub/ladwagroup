import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function SolutionCard({
	title,
	description,
	image,
	delay = 0.1,
}) {
	return (
		<div className="overflow-hidden bg-white rounded-lg shadow-md max-w-[200px] max-h-[300px]">
			<div className="h-30 relative">
				<Image
					src={image.src || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-md font-bold mb-2">{title}</h3>
				<p className="text-xs text-gray-600 mb-0">{description}</p>
				<Link
					href="#"
					className="text-teal-700 text-xs font-medium hover:underline"
				>
					VIEW MORE
				</Link>
			</div>
		</div>
	);
}
