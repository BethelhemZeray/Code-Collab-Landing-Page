// app/api/register/route.ts
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, password, plan } = await request.json();

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db();

    // Check if user exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      await client.close();
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      plan: plan || 'free',
      role: 'user',
      createdAt: new Date(),
    });

    await client.close();
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}