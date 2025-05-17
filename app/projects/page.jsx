"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroImg from "@/public/images/aboutus/AboutUsHeroImg.jpg";
import Img1 from "@/public/images/projects/Img1.png";
import Img2 from "@/public/images/projects/Img2.png";
import Img3 from "@/public/images/projects/Img3.png";
import Img4 from "@/public/images/projects/Img4.png";

export default function ProjectsPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[300px] md:h-[400px]">
				<Image
					src={HeroImg.src}
					alt="Projects Hero"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-white"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Projects
					</motion.h1>
				</div>
			</div>

			{/* Projects Content */}
			<div className="px-10">
				<div className="flex w-full h-full">
					{/* Road  */}
					<div className="w-28 bg-[#252424] hidden md:block">
						<div className="h-full w-full flex flex-col justify-center items-center">
							<div className="h-full w-0 border-l-4 border-dashed border-yellow-400"></div>
						</div>
					</div>

					<div className="w-full my-6 ml-0 md:ml-10">
						<div className="w-full mb-6">
							<span className="text-sm text-teal-700 font-medium">LADWA</span>
							<h2 className="text-3xl font-bold mb-2">Projects</h2>
							<p className="text-gray-600 max-w-3xl">
								These are few of the prominent and unique projects done by
								LADWA, these give a insight into the Strengths and Capabilities
								of LADWA Team.
							</p>
						</div>

						<div className="space-y-8">
							{/* Project 1 */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="overflow-hidden flex flex-col md:flex-row">
									<div className="relative w-[400px] shrink-0">
										<Image
											src={Img1.src}
											alt="Vaishnavi Tech Park"
											width={400}
											height={300}
											// fill
											className="object-contain w-full"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="bg-teal-700 rounded-full p-2 cursor-pointer">
												<Play className="h-6 w-6 text-white" />
											</div>
										</div>
									</div>
									<div className="w-full text-white p-6 flex flex-col justify-center bg-teal-700 rounded-l-3xl sm:rounded-l-none  rounded-r-3xl">
										<h3 className="text-3xl font-bold mb-2">
											Vaishnavi Tech Park Parking Safety Works by LAD
										</h3>
										<p className="text-md">
											These are few of the prominent and unique projects done by
											LADWA, these give a insight into the Strengths and
											Capabilities of LADWA Team.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Project 2 */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="overflow-hidden flex flex-col md:flex-row">
									<div className="relative  w-[400px] shrink-0">
										<Image
											src={Img2.src}
											alt="Vaishnavi Tech Park"
											width={400}
											height={300}
											// fill
											className="object-contain w-full"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="bg-teal-700 rounded-full p-2 cursor-pointer">
												<Play className="h-6 w-6 text-white" />
											</div>
										</div>
									</div>
									<div className="w-full text-white p-6 flex flex-col justify-center bg-teal-700 rounded-l-3xl sm:rounded-l-none  rounded-r-3xl">
										<h3 className="text-3xl font-bold mb-2">
											Solar Energy Implementation at Green Valley Residential
											Complex
										</h3>
										<p className="text-md">
											This project showcases LADWA's commitment to
											sustainability and innovation, integrating solar solutions
											to enhance energy efficiency for residents.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Project 3 */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="overflow-hidden flex flex-col md:flex-row">
									<div className="relative w-[400px] shrink-0">
										<Image
											src={Img3.src}
											alt="Vaishnavi Tech Park"
											width={400}
											height={300}
											// fill
											className="object-contain"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="bg-teal-700 rounded-full p-2 cursor-pointer">
												<Play className="h-6 w-6 text-white" />
											</div>
										</div>
									</div>
									<div className="w-full text-white p-6 flex flex-col justify-center bg-teal-700 rounded-l-3xl sm:rounded-l-none rounded-r-3xl">
										<h3 className="text-3xl font-bold mb-2">
											Smart Water Management System for Urban City
										</h3>
										<p className="text-md">
											LADWA's advanced water management solutions are designed
											to address urban water challenges, ensuring efficient
											usage and conservation.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Project 4 */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="overflow-hidden flex flex-col md:flex-row">
									<div className="relative w-[400px] shrink-0">
										<Image
											src={Img4.src}
											alt="Vaishnavi Tech Park"
											width={400}
											height={300}
											// fill
											className="object-contain"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="bg-teal-700 rounded-full p-2 cursor-pointer">
												<Play className="h-6 w-6 text-white" />
											</div>
										</div>
									</div>
									<div className="w-full text-white p-6 flex flex-col justify-center bg-teal-700 rounded-l-3xl sm:rounded-l-none rounded-r-3xl">
										<h3 className="text-3xl font-bold mb-2">
											Revamp of City Park Recreational Facilities
										</h3>
										<p className="text-md">
											This initiative demonstrates LADWA's focus on community
											development, enhancing public spaces with modern amenities
											for better recreational experiences.
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
