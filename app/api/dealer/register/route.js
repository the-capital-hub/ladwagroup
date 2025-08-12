import dbConnect from '@/lib/db';
import User from '@/Models/User';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { firstName, lastName, mobile, firmName, gstin, email, password } = body;

  if (!firstName || !lastName || !mobile || !firmName || !gstin || !email || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      mobile,
      firmName,
      gstin,
      email,
      password: hashedPassword,
      role: 'dealer',
    });

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (err) {
    return NextResponse.json({ message: 'Server error', error: err.message }, { status: 500 });
  }
}
