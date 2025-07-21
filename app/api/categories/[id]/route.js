import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ProductCategory from '@/Models/ProductCategory';

export async function GET(req, { params }) {
  const { id } = await params;
  await dbConnect();
  const category = await ProductCategory.findById(id);
  if (!category) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function PUT(req, { params }) {
  const { id } = await params;
  await dbConnect();
  const body = await req.json();
  const category = await ProductCategory.findByIdAndUpdate(id, body, { new: true });
  if (!category) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(category);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  await dbConnect();
  await ProductCategory.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
