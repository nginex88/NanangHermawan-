import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") ?? "";

  if (!authorization.startsWith("Bearer demo-token-warung-klontong")) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { amount?: number; method?: string; address?: string };

  if (!body.amount || body.amount <= 0) {
    return NextResponse.json({ success: false, message: "Total checkout harus lebih dari 0" }, { status: 400 });
  }

  if (!body.method || !body.address) {
    return NextResponse.json({ success: false, message: "Data checkout belum lengkap" }, { status: 400 });
  }

  const invoice = `INV-${Date.now()}`;

  return NextResponse.json({
    success: true,
    message: "Payment berhasil diproses",
    invoice
  });
}
