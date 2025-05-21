// app/api/login/route.ts
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();

    console.log('🔍 Searching for user:', email);
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      console.log('❌ User not found');
      await client.close();
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('🔐 Comparing passwords...');
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      console.log('❌ Password mismatch');
      await client.close();
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: user._id.toString(),
        name: user.username || user.name,
        email: user.email,
        role: user.role || 'user',
        plan: user.plan || 'free'
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    await client.close();
    console.log('✅ Login successful for:', user.email);
    
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user._id.toString(),
        name: user.username || user.name,
        email: user.email,
        role: user.role || 'user',
      }
    });

  } catch (error) {
    console.error('🔥 Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}