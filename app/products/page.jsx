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
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <a key={p._id} href={`/product/${p.slug}`} className="border rounded p-4 hover:shadow">
          {p.image && (
            <div className="relative w-full h-40 mb-2">
              <Image src={p.image} alt={p.name} fill className="object-contain" />
            </div>
          )}
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
        </a>
      ))}
    </div>
  );
}
