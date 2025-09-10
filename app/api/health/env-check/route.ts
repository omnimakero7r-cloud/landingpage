import { NextResponse } from 'next/server';

export async function GET() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_BASE_URL',
    'NEXT_PUBLIC_ENVIRONMENT'
  ];

  const missing = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Missing environment variables', 
        missing 
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: 'ok',
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL
  });
}
