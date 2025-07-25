"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useInquiryStore } from '@/components/Solutions/Inquiry.js';

export default function ProductListCard({ product }) {
  const handleInquiry = (e) => {
    e.preventDefault();
    useInquiryStore.openInquiry(product);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md">
      <Link href={`/product/${product.slug}`} className="block p-4">
        <div className="relative w-full h-40 mb-2 bg-gray-50">
          {product.image && (
            <Image src={product.image} alt={product.name} fill className="object-contain" />
          )}
        </div>
        <h3 className="font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </Link>
      <div className="p-4 pt-0">
        <Button onClick={handleInquiry} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          Enquire Now
        </Button>
      </div>
    </div>
  );
}
