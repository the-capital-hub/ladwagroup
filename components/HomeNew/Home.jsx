import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/HomeNew/LoadingSpinner.jsx";
import "./Home.css";

// Code splitting with dynamic imports
const HeroSection = dynamic(
	() => import("@/components/HomeNew/HeroSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const OurPartners = dynamic(
	() => import("@/components/Home/PartnersSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const ImageGallerySection = dynamic(
	() =>
		import("@/components/HomeNew/ImageGallerySection/ImageGallerySection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const VisionMission = dynamic(
	() => import("@/components/HomeNew/VisionMission.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const FeaturesSection = dynamic(
	() => import("@/components/HomeNew/FeaturesSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const GlobalBuyersSection = dynamic(
	() => import("@/components/HomeNew/GlobalBuyersSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const CoreValues = dynamic(
	() => import("@/components/HomeNew/CoreValues.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const SectorsSection = dynamic(
	() => import("@/components/HomeNew/SectorsSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const NewsletterSection = dynamic(
	() => import("@/components/HomeNew/NewsletterSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

const TestimonialsSection = dynamic(
	() => import("@/components/HomeNew/TestimonialsSection.jsx"),
	{
		loading: () => <LoadingSpinner />,
		ssr: true,
	}
);

// Images import
import Image1 from "@/public/images/NewHome/Picture2.png";
import Image2 from "@/public/images/NewHome/Picture3.png";
import Image3 from "@/public/images/NewHome/Picture4.png";
import Image4 from "@/public/images/NewHome/Picture5.png";
import Image5 from "@/public/images/NewHome/Picture6.png";

export default function Home() {
	// Sample images array - you can pass your own images here
	const galleryImages = [
		{
			src: Image1,
			alt: "Professional Safety Equipment",
			title: "Professional Safety Gear",
			description: "High-quality protective equipment for industrial use",
		},
		{
			src: Image2,
			alt: "Fire Safety Solutions",
			title: "Fire Safety Solutions",
			description: "Comprehensive fire protection systems",
		},
		{
			src: Image3,
			alt: "Industrial Safety",
			title: "Industrial Safety",
			description: "Advanced safety solutions for industrial environments",
		},
		{
			src: Image4,
			alt: "PPE Equipment",
			title: "Personal Protective Equipment",
			description: "Complete range of PPE for workplace safety",
		},
		{
			src: Image5,
			alt: "Road Safety",
			title: "Road Safety Equipment",
			description: "Traffic management and road safety solutions",
		},
	];
	return (
		<main className="min-h-screen">
			<HeroSection />
			<OurPartners />
			<ImageGallerySection images={galleryImages} />
			<VisionMission />
			<FeaturesSection />
			<GlobalBuyersSection />
			<CoreValues />
			<SectorsSection />
			<NewsletterSection />
			<TestimonialsSection />
		</main>
	);
}
