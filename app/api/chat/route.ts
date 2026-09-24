import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const message = String(body?.message ?? "").trim();

  if (!message) {
    return NextResponse.json({ answer: "Please enter a question." }, { status: 400 });
  }

  // Replace this section with your existing AI/chat backend.
  // Keep provider API keys server-side in Vercel environment variables.
  return NextResponse.json({
    answer:
      `Demo response: I received “${message}”. ` +
      `Connect your existing AI backend here so the assistant can analyze the Tableau data ` +
      `and issue Tableau Embedding API commands such as filters or selections.`,
  });
}