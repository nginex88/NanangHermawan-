"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("user@warung.id");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Memproses login...");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = (await response.json()) as { success: boolean; message: string; token?: string };

    if (data.success && data.token) {
      localStorage.setItem("warung_token", data.token);
      setMessage("Login berhasil! Token disimpan di browser.");
      return;
    }

    setMessage(data.message);
  };

  return (
    <main style={{ maxWidth: 440, margin: "30px auto", background: "white", padding: 24, borderRadius: 14 }}>
      <h1>Login Member</h1>
      <p style={{ color: "#475569" }}>Demo akun: user@warung.id / 123456</p>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label>
          Email
          <input
            style={{ width: "100%", marginTop: 4, padding: 8 }}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            style={{ width: "100%", marginTop: 4, padding: 8 }}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button style={{ padding: 10, background: "#0f172a", color: "white", borderRadius: 10, border: "none" }}>
          Masuk
        </button>
      </form>
      {message && <p style={{ marginTop: 14 }}>{message}</p>}
      <Link href="/" style={{ color: "#2563eb" }}>
        Kembali ke beranda
      </Link>
    </main>
  );
}
