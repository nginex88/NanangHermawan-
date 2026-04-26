export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
};

export const products: Product[] = [
  { id: "beras-5kg", name: "Beras Premium 5kg", category: "Sembako", price: 78000, unit: "pack" },
  { id: "gula-1kg", name: "Gula Pasir 1kg", category: "Sembako", price: 16500, unit: "pack" },
  { id: "minyak-2l", name: "Minyak Goreng 2L", category: "Sembako", price: 37000, unit: "botol" },
  { id: "mie-goreng", name: "Mie Instan Goreng", category: "Makanan", price: 3500, unit: "pcs" },
  { id: "teh-celup", name: "Teh Celup 25 Sachet", category: "Minuman", price: 12900, unit: "box" },
  { id: "sabun-cuci", name: "Sabun Cuci Piring", category: "Rumah Tangga", price: 11000, unit: "pouch" }
];

export const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
