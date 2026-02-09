import { NextResponse } from "next/server";
import { store } from "../store";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const content = store.get(id);

  if (!content) {
    return NextResponse.json(
      { error: "Paste not found or expired" },
      { status: 404 }
    );
  }

  return NextResponse.json({ content });
}
