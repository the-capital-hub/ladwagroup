import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Project from '@/Models/Project';

// POST: Create new project
export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { number, title, description, mainImage, portfolioImages } = body;

    if (!number || !title || !description || !mainImage) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newProject = await Project.create({
      number,
      title,
      description,
      mainImage,
      portfolioImages: portfolioImages || [],
    });

    return NextResponse.json({ message: 'Project created', project: newProject }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error', error: err.message }, { status: 500 });
  }
}

// GET: Get all projects
export async function GET() {
  await dbConnect();

  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}
