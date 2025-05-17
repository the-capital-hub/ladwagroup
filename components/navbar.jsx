"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LadwaLogo from "@/public/images/LadwaLogo.png";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when changing route
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Function to determine if a link is active
	const isActive = (path) => {
		return pathname === path
			? "text-teal-700 font-semibold"
			: "text-gray-600 hover:text-teal-700";
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white px-4 md:px-10">
			<div className="flex h-16 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="flex items-center">
						{/* <span className="text-xl font-bold text-teal-700">LADWA</span> */}
						<Image
							src={LadwaLogo.src}
							alt="Ladwa Logo"
							width={50}
							height={50}
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<Link href="/" className={`text-sm font-medium ${isActive("/")}`}>
						Home
					</Link>
					<Link
						href="/projects"
						className={`text-sm font-medium ${isActive("/projects")}`}
					>
						Projects
					</Link>
					<Link
						href="/solutions"
						className={`text-sm font-medium ${isActive("/solutions")}`}
					>
						Solutions
					</Link>
					<Link
						href="/about"
						className={`text-sm font-medium ${isActive("/about")}`}
					>
						About
					</Link>
					<Link
						href="/contact-us"
						className={`text-sm font-medium ${isActive("/contact-us")}`}
					>
						Contact Us
					</Link>
				</nav>

				{/* Desktop Auth Controls */}
				<div className="hidden md:flex items-center gap-4">
					<Link
						href="/login"
						className={`text-sm font-medium ${isActive("/login")}`}
					>
						Log in
					</Link>
					<Button className="bg-teal-700 hover:bg-teal-800">Get started</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="flex md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="h-6 w-6 text-gray-700" />
					) : (
						<Menu className="h-6 w-6 text-gray-700" />
					)}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<div className="md:hidden bg-white py-4 px-4 border-t">
					<nav className="flex flex-col space-y-4">
						<Link href="/" className={`text-sm font-medium ${isActive("/")}`}>
							Home
						</Link>
						<Link
							href="/projects"
							className={`text-sm font-medium ${isActive("/projects")}`}
						>
							Projects
						</Link>
						<Link
							href="/solutions"
							className={`text-sm font-medium ${isActive("/solutions")}`}
						>
							Solutions
						</Link>
						<Link
							href="/about"
							className={`text-sm font-medium ${isActive("/about")}`}
						>
							About
						</Link>
						<Link
							href="/contact-us"
							className={`text-sm font-medium ${isActive("/contact-us")}`}
						>
							Contact Us
						</Link>

						{/* Auth links for mobile */}
						<div className="pt-4 border-t flex flex-col space-y-4">
							<Link
								href="/login"
								className={`text-sm font-medium ${isActive("/login")}`}
							>
								Log in
							</Link>
							<Button className="bg-teal-700 hover:bg-teal-800 w-full">
								Get started
							</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
