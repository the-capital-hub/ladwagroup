import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RouteChangeLoader from "@/components/RouteChangeLoader";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "LADWA",
	description: "LADWA - Safety Equipment and Solutions",
	other: {
		"google-site-verification": "GcF-us4zDEx1Bi0GjMnPnc_VYyGAyqHKzULT_HjX5wQ",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-3E0QVM3JHM"
				/>
				<Script id="ga-init" strategy="afterInteractive">
					{`
                                                window.dataLayer = window.dataLayer || [];
                                                function gtag(){dataLayer.push(arguments);}
                                                gtag('js', new Date());
                                                gtag('config', 'G-3E0QVM3JHM');
                                        `}
				</Script>
				<div className="flex flex-col min-h-screen">
					<RouteChangeLoader />
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
