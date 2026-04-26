"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatRupiah, products } from "@/lib/products";

type CartItem = {
  id: string;
  qty: number;
};

const cardStyle: React.CSSProperties = {
  borderRadius: 14,
  background: "white",
  padding: 16,
  border: "1px solid #e2e8f0"
};

export default function Store() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const cartItems: CartItem[] = useMemo(
    () => Object.entries(cart).map(([id, qty]) => ({ id, qty })).filter((item) => item.qty > 0),
    [cart]
  );

  const total = cartItems.reduce((sum, item) => {
    const p = products.find((product) => product.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 16px 40px" }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ marginBottom: 4 }}>Warung Klontong Online</h1>
        <p style={{ color: "#475569" }}>Belanja kebutuhan harian, login cepat, checkout mudah.</p>
        <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
          <Link href="/login" style={{ color: "#2563eb", fontWeight: 600 }}>
            Login Member
          </Link>
          <Link href="/checkout" style={{ color: "#2563eb", fontWeight: 600 }}>
            Halaman Checkout
          </Link>
        </div>
      </header>

      <section style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
        {products.map((product) => (
          <article key={product.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 6 }}>{product.name}</h3>
            <small style={{ color: "#64748b" }}>{product.category}</small>
            <p style={{ margin: "8px 0", fontWeight: 600 }}>{formatRupiah(product.price)}</p>
            <button
              onClick={() => addToCart(product.id)}
              style={{
                background: "#16a34a",
                border: "none",
                color: "white",
                padding: "8px 12px",
                borderRadius: 10,
                cursor: "pointer"
              }}
            >
              Tambah ({product.unit})
            </button>
          </article>
        ))}
      </section>

      <section style={{ ...cardStyle, marginTop: 20 }}>
        <h2>Ringkasan Keranjang</h2>
        {cartItems.length === 0 ? (
          <p>Keranjang masih kosong.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => {
                const p = products.find((product) => product.id === item.id);
                if (!p) return null;
                return (
                  <li key={item.id}>
                    {p.name} x{item.qty} = {formatRupiah(p.price * item.qty)}
                  </li>
                );
              })}
            </ul>
            <p style={{ fontWeight: 700 }}>Total: {formatRupiah(total)}</p>
          </>
        )}
        <Link
          href={{ pathname: "/checkout", query: { total } }}
          style={{
            display: "inline-block",
            marginTop: 8,
            background: "#2563eb",
            color: "white",
            borderRadius: 10,
            padding: "9px 14px",
            fontWeight: 600
          }}
        >
          Lanjut Checkout
        </Link>
      </section>
    </main>
  );
}
