"use client";

import { useMemo, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductGallery from "./ProductGallery";

export default function ProductsClient({ products }) {
  const prices = products.map((p) => parseFloat(p.yourPriceInr) || 0);
  const minPrice = Math.min(...prices, 0);
  const maxPrice = Math.max(...prices, 0);
  const [filters, setFilters] = useState({ categories: [], price: [minPrice, maxPrice] });

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const price = parseFloat(p.yourPriceInr) || 0;
      const inCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(p.category?._id || p.category);
      const inPrice = price >= filters.price[0] && price <= filters.price[1];
      return inCategory && inPrice;
    });
  }, [products, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:overflow-auto">
            <ProductFilters products={products} onChange={setFilters} />
          </aside>
          <div className="md:col-span-3">
            <ProductGallery products={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}
