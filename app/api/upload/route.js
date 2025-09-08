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
  try {
    if (!requireAdmin()) {
      console.warn('Upload attempt without admin privileges');
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const missing = [
      !process.env.CLOUDINARY_CLOUD_NAME && 'CLOUDINARY_CLOUD_NAME',
      !process.env.CLOUDINARY_API_KEY && 'CLOUDINARY_API_KEY',
      !process.env.CLOUDINARY_API_SECRET && 'CLOUDINARY_API_SECRET'
    ].filter(Boolean);

    if (missing.length) {
      console.error('Missing Cloudinary configuration:', missing.join(', '));
      return NextResponse.json(
        {
          error: 'Upload failed',
          details: `Missing ${missing.join(', ')}`
        },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file');
    if (!file) {
      console.error('No file provided in upload request');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!file.type?.startsWith('image/')) {
      console.error('Invalid file type:', file.type);
      return NextResponse.json({ error: 'Only image uploads are allowed' }, { status: 400 });
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      console.error('Unsupported image type:', file.type);
      return NextResponse.json({ error: 'Unsupported image type' }, { status: 400 });
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      console.error('File too large:', file.size);
      return NextResponse.json({ error: 'File too large' }, { status: 400 });
    }

    console.log('Uploading file to Cloudinary:', file.name || 'unknown');

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'ladwa' },
        (err, res) => {
          if (err) return reject(err);
          resolve(res);
        }
      );
      stream.end(buffer);
    });

    console.log('Cloudinary upload successful:', result.secure_url);
    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    const code = err.http_code || err.status || 500;
    const details = err.error?.message || err.message;
    // Log upstream response body when available for easier debugging
    const body = err.response?.body || err.body;
    console.error('Upload handler error:', err, body);
    return NextResponse.json(
      { error: 'Upload failed', details: details },

      { status: code }
    );
  }
}
