import { Suspense } from "react";
import ProductFilters from "@/components/PreviousUsedComponent/Solutions/ProductFilters.jsx";
import ProductGrid from "@/components/PreviousUsedComponent/Solutions/ProductGrid.jsx";

export const dynamic = 'force-dynamic';
import MainNav from "@/components/PreviousUsedComponent/Solutions/MainNav.jsx";
import SearchBar from "@/components/PreviousUsedComponent/Solutions/SearchBar.jsx";
import { ProductSkeleton } from "@/components/PreviousUsedComponent/Solutions/ProductSkeleton.jsx";
import { notFound } from "next/navigation";

export async function generateMetadata(context) {
        const { params } = await context;
	// Map category slug to display name
	const categoryMap = {
		"first-aid-kit": "First Aid Kit",
		"life-jacket": "Life Jacket",
		"snake-bite-kit": "Snake Bite Kit",
		"traffic-cone": "Traffic Cone",
		"quick-heal": "Quick Heal",
		"shop-safety": "Shop Safety",
	};

        const category = categoryMap[params.category];

	if (!category) {
		return {
			title: "Category Not Found",
			description: "The requested category could not be found",
		};
	}

	return {
		title: `${category} | Safety Solutions`,
		description: `Browse our range of ${category.toLowerCase()} products for all your safety needs`,
	};
}

export default async function CategoryPage(context) {
        const { params } = await context;
	// Validate category exists
	const validCategories = [
		"first-aid-kit",
		"life-jacket",
		"snake-bite-kit",
		"traffic-cone",
		"quick-heal",
		"shop-safety",
	];

	if (!validCategories.includes(params.category)) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="sticky top-0 z-40 w-full bg-white shadow-sm">
				<div className="container mx-auto px-4 py-3 flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<h1 className="text-teal-700 font-semibold">First Aid Kit Box</h1>
						<MainNav />
					</div>
					<SearchBar />
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-8">
					{params.category
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ")}
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<aside className="md:col-span-1 md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:overflow-auto">
						<ProductFilters />
					</aside>

					<div className="md:col-span-3 md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:overflow-auto">
						<Suspense fallback={<ProductSkeleton />}>
							<ProductGrid />
						</Suspense>
					</div>
				</div>
			</main>
		</div>
	);
}
