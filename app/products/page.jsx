import ProductFilters from "@/components/PreviousUsedComponent/Solutions/ProductFilters.jsx";
import ProductGallery from "@/components/Products/ProductGallery.jsx";

export const dynamic = "force-dynamic";

import { getBaseUrl } from "@/lib/baseUrl";

async function getProducts() {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) {
      return [];
    }
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch products", err);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:overflow-auto">
            <ProductFilters />
          </aside>
          <div className="md:col-span-3">
            <ProductGallery products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

