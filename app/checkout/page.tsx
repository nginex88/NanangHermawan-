"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatRupiah } from "@/lib/products";

export default function CheckoutPage() {
  const params = useSearchParams();
  const [method, setMethod] = useState("QRIS");
  const [address, setAddress] = useState("Jl. Melati No. 45, Jakarta");
  const [status, setStatus] = useState("");

  const total = useMemo(() => {
    const rawTotal = Number(params.get("total") ?? "0");
    return Number.isFinite(rawTotal) ? rawTotal : 0;
  }, [params]);

  const handlePay = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Memproses pembayaran...");

    const token = localStorage.getItem("warung_token");
    if (!token) {
      setStatus("Silakan login terlebih dahulu.");
      return;
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ amount: total, method, address })
    });

    const data = (await response.json()) as { success: boolean; message: string; invoice?: string };

    if (data.success && data.invoice) {
      setStatus(`Checkout sukses! Invoice: ${data.invoice}`);
      return;
    }

    setStatus(data.message);
  };

  return (
    <main style={{ maxWidth: 520, margin: "30px auto", background: "white", padding: 24, borderRadius: 14 }}>
      <h1>Checkout & Payment</h1>
      <p>Total Belanja: {formatRupiah(total)}</p>
      <form onSubmit={handlePay} style={{ display: "grid", gap: 12 }}>
        <label>
          Alamat Pengiriman
          <textarea
            style={{ width: "100%", marginTop: 4, padding: 8, minHeight: 90 }}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </label>
        <label>
          Metode Payment
          <select style={{ width: "100%", marginTop: 4, padding: 8 }} value={method} onChange={(event) => setMethod(event.target.value)}>
            <option>QRIS</option>
            <option>Transfer Bank</option>
            <option>COD</option>
            <option>E-Wallet</option>
          </select>
        </label>
        <button style={{ padding: 10, background: "#16a34a", color: "white", borderRadius: 10, border: "none" }}>
          Bayar Sekarang
        </button>
      </form>
      {status && <p style={{ marginTop: 14 }}>{status}</p>}
      <Link href="/" style={{ color: "#2563eb" }}>
        Kembali belanja
      </Link>
    </main>
  );
}
