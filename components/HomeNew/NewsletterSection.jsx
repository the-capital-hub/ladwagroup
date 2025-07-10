import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Picture from "@/public/images/NewHome/Picture7.png";
import { Inter, Outfit } from "next/font/google";
const inter = Inter ({
	variable:"--font-inter",
    subsets:["latin"]

 })
 const outfit = Outfit({
    variable:"--font-outfit",
    subsets:["latin"]

})

export default function NewsletterSection() {
	return (
		<section className="py-10 bg-white w-full max-w-7xl mx-auto my-12">
			<div className="max-w-8xl mx-auto text-center">
				<h2 className="text-[64px] font-bold text-gray-900 mb-6">
					Join the LADWA Movement ( Newsletter )
				</h2>
				<p className={`text-[18px] text-gray-600 mb-12 max-w-5xl mx-auto ${outfit.className}`}>
					Whether you're a safety officer, city planner, industry head, or
					concerned citizen—partner with us to build a safer, smarter, and more
					sustainable future.
				</p>

				<div className="max-w-5xl mx-auto relative mb-12">
					<Image
						src={Picture.src}
						alt="Team collaboration"
						width={700}
						height={400}
						className="w-full aspect-video rounded-[30px] mx-auto"
					/>
				</div>

				<h3 className={`text-2xl lg:text-[40px] font-bold text-gray-900 ${inter.className}`}>
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
