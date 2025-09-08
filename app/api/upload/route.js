import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { requireAdmin } from '@/lib/auth';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const runtime = "nodejs"; 
export async function POST(req) {
  if (!requireAdmin()) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    console.error('Missing Cloudinary configuration');
    return NextResponse.json(
      { error: 'Upload failed', details: 'Cloudinary not configured' },
      { status: 500 }
    );
  }
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 });
  }
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;

  try {
    const result = await cloudinary.uploader.upload(base64, {
      folder: 'ladwa',
      resource_type: 'auto',
    });
    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    console.error('Cloudinary upload failed:', err);
    return NextResponse.json(
      { error: 'Upload failed', details: err.message },
      { status: 500 }
    );
  }
}
