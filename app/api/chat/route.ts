import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Connected backend API integration spot
    const apiKey = process.env.AI_API_KEY;

    return NextResponse.json({
      reply: `Insights for "${message}": Sales in Eastern region showed strong quarter-over-quarter growth. Connect your backend API key in Vercel settings to receive live model generation.`,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}