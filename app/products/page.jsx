import Image from 'next/image';

export const dynamic = 'force-dynamic';

import { getBaseUrl } from '@/lib/baseUrl';

async function getProducts() {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
      return [];
    }
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch products', err);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p._id}
          className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md flex flex-col"
        >
          <a href={`/product/${p.slug}`} className="flex flex-col flex-grow p-4">
            <div className="relative w-full h-40 mb-2 bg-gray-50">
              {p.image && (
                <Image src={p.image} alt={p.name} fill className="object-contain" />
              )}
            </div>
            <h3 className="font-semibold mb-1">{p.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{p.description}</p>
          </a>
          <div className="p-4 pt-0">
            <a
              href={`/product/${p.slug}`}
              className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
            >
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
