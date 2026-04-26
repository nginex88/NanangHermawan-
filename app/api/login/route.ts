import { NextResponse } from "next/server";

const demoUser = {
  email: "user@warung.id",
  password: "123456"
};

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };

  if (body.email === demoUser.email && body.password === demoUser.password) {
    return NextResponse.json({
      success: true,
      message: "Login berhasil",
      token: "demo-token-warung-klontong"
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Email atau password salah"
    },
    { status: 401 }
  );
}
