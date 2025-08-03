import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('送信内容:', data);
  return NextResponse.json({ message: 'success' });
}
