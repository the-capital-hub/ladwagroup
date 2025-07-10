"use client";

import Image from "next/image";
import logo from "@/public/images/NewHome/partner.png"


export default function PartnersSection() {


	return (
		<section className="py-6 md:py-12 bg-white">
			<div className="pb-6">
				<h2
					className="text-center text-xl font-medium text-gray-700 mb-8"
				>
					Our Partners
				</h2>

				<div
					className="flex flex-wrap justify-center items-center gap-4 md:gap-12"
					
				>
					<Image src={logo} alt= "our partners"/>
					
				</div>
			</div>
		</section>
	);
}
