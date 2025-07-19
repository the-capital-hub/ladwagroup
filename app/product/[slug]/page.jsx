import Image from 'next/image';
import Link from 'next/link';

import { getBaseUrl } from '@/lib/baseUrl';

async function getProduct(slug) {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products?slug=${slug}`, {
    cache: 'no-store',
  });

  return await res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);
  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/">Home</Link> /{' '}
        <Link href={`/category/${product.category.slug}`}>{product.category.name}</Link> / {product.name}
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {product.image && (
            <div className="relative w-full h-64 mb-4">
              <Image src={product.image} alt={product.name} fill className="object-contain" />
            </div>
          )}
          <div className="grid grid-cols-3 gap-2">
            {product.gallery.map((img, i) => (
              <div key={i} className="relative h-20 border rounded">
                <Image src={img} alt={`${product.name}-${i}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <h2 className="font-semibold mb-1">Key Features</h2>
          <ul className="list-disc pl-5 mb-4">
            {product.keyFeatures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          {product.additionalFeatures.length > 0 && (
            <>
              <h2 className="font-semibold mb-1">Additional Features</h2>
              <ul className="list-disc pl-5 mb-4">
                {product.additionalFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </>
          )}
          <p className="mb-2">Weight: {product.weight}</p>
          <p className="mb-4">Dimension: {product.dimension}</p>
          {product.specifications.length > 0 && (
            <table className="w-full text-sm mb-6 border">
              <tbody>
                {product.specifications.map((s, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2 font-semibold w-1/3">{s.key}</td>
                    <td className="p-2">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
