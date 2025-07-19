import Image from 'next/image';

import { getBaseUrl } from '@/lib/baseUrl';

async function getData(slug) {
  const baseUrl = getBaseUrl();
  const resCat = await fetch(`${baseUrl}/api/categories?slug=${slug}`, { cache: 'no-store' });
  const category = await resCat.json();
  if (!category) return null;
  const resProd = await fetch(`${baseUrl}/api/products?category=${category._id}`, { cache: 'no-store' });

  const products = await resProd.json();
  return { category, products };
}

export default async function CategoryPage({ params }) {
  const data = await getData(params.slug);
  if (!data) return <div className="p-10">Category not found</div>;
  const { category, products } = data;
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        {category.image && (
          <div className="relative w-full h-64 mb-4">
            <Image src={category.image} alt={category.name} fill className="object-cover rounded" />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <p className="text-gray-700">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </div>
  );
}
