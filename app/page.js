"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Main component imports
import HeroSection from "@/components/Home/HeroSection.jsx";
import AboutSection from "@/components/Home/AboutSection.jsx";
import StatsSection from "@/components/Home/StatsSection.jsx";
import WhyLadwaSection from "@/components/Home/WhyLadwaSection.jsx";
import SolutionsSection from "@/components/Home/SolutionsSection.jsx";
import WorkProcessSection from "@/components/Home/WorkProcessSection.jsx";
import TestimonialsSection from "@/components/Home/TestimonialsSection.jsx";
import ContactFormSection from "@/components/Home/ContactFormSection.jsx";
import PartnersSection from "@/components/Home/PartnersSection";

// Images
import VideoImg from "@/public/images/home/VideoImg.png";
import ConstructionImg from "@/public/images/home/ConstructionEquipmentImg.png";
import LadwaExpImg from "@/public/images/home/LadwaExpImg.png";
import SafetyProfessionalImg from "@/public/images/home/SafetyProfessionalImg.png";
import RoadSafetyImg from "@/public/images/home/RoadSafetyImg.png";
import FireSafetyImg from "@/public/images/home/FireSafetyImg.png";
import IndustrialSafetyImg from "@/public/images/home/IndustrialSafetyImg.png";
import ReflectiveSignageImg from "@/public/images/home/ReflectiveSignageImg.png";
import PreSalesSection from "@/components/Home/PreSalesSection";

export default function HomePage() {
	const fadeIn = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};
	const staggerContainer = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	return (
		<div className="flex flex-col min-h-screen">
			<HeroSection videoImg={VideoImg} />
			{/* Partners Section */}
			<PartnersSection />
			<AboutSection ladwaExpImg={LadwaExpImg} />
			<StatsSection />
			<WhyLadwaSection />
			<SolutionsSection
				safetyProfessionalImg={SafetyProfessionalImg}
				roadSafetyImg={RoadSafetyImg}
				fireSafetyImg={FireSafetyImg}
				industrialSafetyImg={IndustrialSafetyImg}
				reflectiveSignageImg={ReflectiveSignageImg}
			/>
			<WorkProcessSection />
			<PreSalesSection />
			<TestimonialsSection />
			<ContactFormSection constructionImg={ConstructionImg} />
		</div>
	);
}
