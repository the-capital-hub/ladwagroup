import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ProductCategory from '@/Models/ProductCategory';

export async function GET(req, context) {
  const { params } = await context;
  await dbConnect();
  const category = await ProductCategory.findById(params.id);
  if (!category) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function PUT(req, context) {
  const { params } = await context;
  await dbConnect();
  const body = await req.json();
  const category = await ProductCategory.findByIdAndUpdate(params.id, body, { new: true });
  if (!category) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function DELETE(req, context) {
  const { params } = await context;
  await dbConnect();
  await ProductCategory.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Deleted' });
}
