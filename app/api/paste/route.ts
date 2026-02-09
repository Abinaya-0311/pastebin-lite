import { NextResponse } from "next/server";
import { store } from "./store";

export async function POST(req: Request) {
  const { content } = await req.json();
  const id = Math.random().toString(36).substring(2, 8);

  store.set(id, content);

  return NextResponse.json({ id });
}
