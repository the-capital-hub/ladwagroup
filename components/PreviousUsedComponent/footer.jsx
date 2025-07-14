import Link from "next/link";
import Image from "next/image";
import AppStore from "@/public/images/footer/AppStore.png";
import GooglePlay from "@/public/images/footer/GooglePlay.png";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-teal-700 text-white">
			<div className="container mx-auto py-12 px-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/about" className="hover:underline">
									About
								</Link>
							</li>
							<li>
								<Link href="/features" className="hover:underline">
									Features
								</Link>
							</li>
							<li>
								<Link href="/works" className="hover:underline">
									Works
								</Link>
							</li>
							<li>
								<Link href="/career" className="hover:underline">
									Career
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Help</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/support" className="hover:underline">
									Customer Support
								</Link>
							</li>
							<li>
								<Link href="/delivery" className="hover:underline">
									Delivery Details
								</Link>
							</li>
							<li>
								<Link href="/terms" className="hover:underline">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link href="/privacy" className="hover:underline">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/ebooks" className="hover:underline">
									Free eBooks
								</Link>
							</li>
							<li>
								<Link href="/tutorials" className="hover:underline">
									Development Tutorial
								</Link>
							</li>
							<li>
								<Link href="/blog" className="hover:underline">
									How to - Blog
								</Link>
							</li>
							<li>
								<Link href="/youtube" className="hover:underline">
									Youtube Playlist
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Install App</h3>
						<div className="space-y-4">
							<Link href="#" className="block">
								<Image
									src={AppStore.src}
									alt="App Store"
									width={170}
									height={50}
									className="rounded-lg"
								/>
							</Link>
							<Link href="#" className="block">
								<Image
									src={GooglePlay.src}
									alt="Google Play"
									width={170}
									height={50}
									className="rounded-lg"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-12 pt-8 border-t border-teal-600">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm">
							© Copyright 2022. All Rights Reserved by LADWA
						</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<Link href="#" className="hover:text-teal-300">
								<Twitter className="h-5 w-5" />
							</Link>
							<Link href="#" className="hover:text-teal-300">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link href="#" className="hover:text-teal-300">
								<Instagram className="h-5 w-5" />
							</Link>
							<Link href="#" className="hover:text-teal-300">
								<Github className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
