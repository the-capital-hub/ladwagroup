import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/Models/Product';
import ProductCategory from '@/Models/ProductCategory';
import { revalidatePath } from 'next/cache';

export async function GET(req, context) {
  const { params } = await context;
  await dbConnect();
  const product = await Product.findById(params.id).populate('category');
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req, context) {
  const { params } = await context;
  await dbConnect();
  const body = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  revalidatePath(`/product/${product.slug}`);
  revalidatePath('/products');
  if (product.category) {
    const cat = await ProductCategory.findById(product.category);
    if (cat?.slug) {
      revalidatePath(`/category/${cat.slug}`);
    }
  }
  return NextResponse.json(product);
}

export async function DELETE(req, context) {
  const { params } = await context;
  await dbConnect();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Deleted' });
}
