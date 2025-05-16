import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white px-10">
			<div className="flex h-16 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="flex items-center">
						<span className="text-xl font-bold text-teal-700">LADWA</span>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-6">
					<Link href="/" className="text-sm font-medium hover:text-teal-700">
						Home
					</Link>
					<Link
						href="/projects"
						className="text-sm font-medium hover:text-teal-700"
					>
						Projects
					</Link>
					<Link
						href="/solutions"
						className="text-sm font-medium hover:text-teal-700"
					>
						Solutions
					</Link>
					<Link
						href="/about"
						className="text-sm font-medium hover:text-teal-700"
					>
						About
					</Link>
					<Link
						href="/contact-us"
						className="text-sm font-medium hover:text-teal-700"
					>
						Contact Us
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<Link
						href="/login"
						className="text-sm font-medium hover:text-teal-700"
					>
						Log in
					</Link>
					<Button className="bg-teal-700 hover:bg-teal-800">Get started</Button>
				</div>
			</div>
		</header>
	);
}
