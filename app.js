const menu = [
  { id: 1, name: "Nasi Goreng Spesial", price: 22000 },
  { id: 2, name: "Mie Goreng Jawa", price: 20000 },
  { id: 3, name: "Ayam Bakar Madu", price: 28000 },
  { id: 4, name: "Es Teh Manis", price: 8000 },
  { id: 5, name: "Jeruk Hangat", price: 10000 },
  { id: 6, name: "Sate Ayam", price: 25000 }
];

const cart = new Map();

const rupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

const menuList = document.getElementById("menuList");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const themeToggle = document.getElementById("themeToggle");

function renderMenu() {
  menuList.innerHTML = "";
  menu.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${rupiah(item.price)}</p>
      <button data-id="${item.id}">Tambah</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      cart.set(item.id, (cart.get(item.id) || 0) + 1);
      renderCart();
    });

    menuList.appendChild(card);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  for (const [id, qty] of cart.entries()) {
    const item = menu.find((m) => m.id === id);
    const subtotal = item.price * qty;
    total += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} x${qty}</span>
      <strong>${rupiah(subtotal)}</strong>
    `;
    cartList.appendChild(li);
  }

  cartTotal.textContent = rupiah(total);
}

checkoutBtn.addEventListener("click", () => {
  if (!cart.size) {
    alert("Keranjang masih kosong.");
    return;
  }

  const lines = [];
  let total = 0;
  cart.forEach((qty, id) => {
    const item = menu.find((m) => m.id === id);
    total += item.price * qty;
    lines.push(`- ${item.name} x${qty} (${rupiah(item.price * qty)})`);
  });

  const text = encodeURIComponent(
    `Halo Warung Nikmat, saya ingin pesan:%0A${lines.join("%0A")}%0A%0ATotal: ${rupiah(total)}`
  );

  window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀️" : "🌙";
});

renderMenu();
renderCart();
