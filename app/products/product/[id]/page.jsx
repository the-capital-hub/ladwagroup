import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/PreviousUsedComponent/Solutions/MainNav.jsx";
import SearchBar from "@/components/PreviousUsedComponent/Solutions/SearchBar.jsx";
import Products from "@/Constant/Products.js";

// This would normally come from a database or API
const getProductById = (id) => {
	return Products.find((product) => product.id === id);
};

export async function generateMetadata(context) {
        const { params } = await context;
        const product = getProductById(params.id);

	if (!product) {
		return {
			title: "Product Not Found",
			description: "The requested product could not be found",
		};
	}

	return {
		title: `${product.name} | Safety Solutions`,
		description: product.description,
	};
}

export default async function ProductPage(context) {
        const { params } = await context;
        const product = getProductById(params.id);

	if (!product) {
		notFound();
	}

	// Get related products
	const relatedProducts = product.relatedProducts
		.map((id) => getProductById(id))
		.filter(Boolean);

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="sticky top-0 z-40 w-full bg-white shadow-sm">
				<div className="px-6 py-3 flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="hidden md:block">
							<MainNav />
						</div>
					</div>
					<SearchBar />
				</div>
			</header>

			<main className="px-10 py-8">
				<div className="mb-6">
					<Link
						href="/solutions"
						className="inline-flex items-center text-teal-700 hover:text-teal-800"
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Products
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div className="space-y-6">
						<div className="bg-gray-100 rounded-lg overflow-hidden">
							<div className="relative h-[300px] md:h-[400px]">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									fill
									className="object-contain p-4"
								/>
							</div>
						</div>

						<div className="flex justify-center space-x-4">
							{product.gallery.map((image, index) => (
								<div
									key={index}
									className="relative w-16 h-16 border rounded cursor-pointer hover:border-teal-500"
								>
									<Image
										src={image || "/placeholder.svg"}
										alt={`${product.name} view ${index + 1}`}
										fill
										className="object-contain p-1"
									/>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-6">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-2xl font-semibold">
							₹ {product.price.toLocaleString()}
						</p>

						<div className="prose max-w-none">
							<p>{product.longDescription}</p>
						</div>

						<Button className="w-full md:w-auto bg-teal-700 hover:bg-teal-800">
							<ShoppingCart className="h-4 w-4 mr-2" />
							Add to Inquiry
						</Button>
					</div>
				</div>

				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-6">Product Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{product.features.map((feature, index) => (
							<div key={index} className="border rounded-lg p-4">
								<h3 className="font-semibold mb-2">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-6">Description</h2>
					<div className="prose max-w-none">
						<p className="text-gray-700">{product.longDescription}</p>
						<p className="text-gray-700 mt-4">
							Whether you're working in construction, on-site installations, or
							any other hazardous environment, these features provide optimal
							protection for various objects and impacts. The bright colors
							ensure high visibility, making it easier for workers to be seen in
							low light or crowded areas, enhancing their overall safety.
						</p>
						<p className="text-gray-700 mt-4">
							This pack of safety equipment is perfect for outfitting teams or
							maintaining a ready supply for various projects. With their
							durable construction and adherence to safety standards, these
							products will provide long-term protection and reliability for
							industrial workers and outdoor laborers.
						</p>
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-bold mb-6">Related Keywords</h2>
					<div className="flex flex-wrap gap-2 mb-8">
						{[
							"Safety Helmets",
							"Hard Hats",
							"Construction Head Protection",
							"Industrial Safety",
							"ISI Marked Yellow Safety Helmets",
						].map((keyword, index) => (
							<span
								key={index}
								className="bg-gray-100 px-3 py-1 rounded-full text-sm"
							>
								{keyword}
							</span>
						))}
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-bold mb-6">Related Products</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{relatedProducts.map((relatedProduct) => (
							<Link
								href={`/products/product/${relatedProduct.id}`}
								key={relatedProduct.id}
							>
								<div className="bg-white rounded-lg overflow-hidden shadow-sm border cursor-pointer transition-transform hover:shadow-md hover:-translate-y-1 h-full flex flex-col">
									<div className="relative h-48 bg-gray-100 flex-shrink-0">
										<Image
											src={relatedProduct.image || "/placeholder.svg"}
											alt={relatedProduct.name}
											fill
											className="object-contain p-4"
										/>
									</div>
									<div className="p-4 flex flex-col flex-grow">
										<h3 className="font-semibold text-base h-fit overflow-hidden">
											{relatedProduct.name}
										</h3>
										<p className="text-gray-500 text-sm mt-1 line-clamp-2 h-10 overflow-hidden">
											{relatedProduct.description}
										</p>
										<p className="font-semibold mt-2 md:mt-auto pt-2">
											₹ {relatedProduct.price.toLocaleString()}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
