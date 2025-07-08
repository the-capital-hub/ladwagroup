import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Picture from "@/public/images/NewHome/Picture7.png";

export default function NewsletterSection() {
	return (
		<section className="py-10 bg-white">
			<div className="max-w-8xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-gray-900 mb-6">
					Join the LADWA Movement ( Newsletter )
				</h2>
				<p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
					Whether you're a safety officer, city planner, industry head, or
					concerned citizen—partner with us to build a safer, smarter, and more
					sustainable future.
				</p>

				<div className="w-4/6 mx-auto relative mb-12">
					<Image
						src={Picture.src}
						alt="Team collaboration"
						width={600}
						height={300}
						className="w-full aspect-video rounded-2xl mx-auto"
					/>
				</div>

				<h3 className="text-2xl font-bold text-gray-900">
					LADWA – Making the World Safer.
				</h3>

				{/* <div className="max-w-md mx-auto">
						<div className="flex gap-4">
							<Input
								type="email"
								placeholder="Enter your email address"
								className="flex-1"
							/>
							<Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
								Subscribe
							</Button>
						</div>
						<p className="text-sm text-gray-500 mt-4">
							Get the latest updates on safety innovations and industry
							insights.
						</p>
					</div> */}
			</div>
		</section>
	);
}
