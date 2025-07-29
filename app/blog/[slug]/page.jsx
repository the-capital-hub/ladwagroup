import Image from 'next/image';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/baseUrl';

export const dynamic = 'force-dynamic';

async function getBlog(slug) {
  const baseUrl = getBaseUrl();
  try {
    const res = await fetch(
      `${baseUrl}/api/blogs?slug=${encodeURIComponent(slug)}`,
      { cache: 'no-store' }
    );
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch blog', err);
    return null;
  }
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);
  if (!blog) return <div className="p-10">Blog not found</div>;

  const publishDate = new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen">
      <div className="relative h-80 w-full">
        {blog.featuredImage && (
          <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 max-w-3xl">
            {blog.title}
          </h1>
          <div className="text-sm text-teal-100 flex flex-wrap gap-4">
            <span>{publishDate}</span>
            <span>By {blog.author}</span>
            <span>{blog.readTime} min read</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <nav className="text-sm text-gray-600">
          <Link href="/blog">Blog</Link> / {blog.title}
        </nav>
        <article className="prose max-w-none" style={{ whiteSpace: 'pre-line' }}>
          {blog.content}
        </article>
      </div>
    </div>
  );
}
