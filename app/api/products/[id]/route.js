import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/Models/Product';

export async function GET(req, { params }) {
  await dbConnect();
  const product = await Product.findById(params.id).populate('category');
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req, { params }) {
  await dbConnect();
  const body = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Deleted' });
}
