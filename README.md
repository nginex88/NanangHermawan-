# Warung Nikmat App (Free Publish Ready)

Aplikasi web sederhana untuk pemesanan menu warung:
- daftar menu,
- keranjang,
- total otomatis,
- checkout ke WhatsApp,
- mode gelap.

## Jalankan Lokal

Cukup buka `index.html` di browser.

Atau pakai server lokal:

```bash
python3 -m http.server 8080
```

lalu akses `http://localhost:8080`.

## Publish Gratis (GitHub Pages)

Workflow deploy sudah disiapkan di `.github/workflows/deploy-pages.yml`.

Langkah:
1. Push repo ke GitHub.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih **GitHub Actions**.
4. Push commit baru (atau jalankan workflow manual).
5. Website akan live di:
   `https://<username>.github.io/<nama-repo>/`

## Kustomisasi Cepat

- Ubah menu di `app.js` array `menu`.
- Ubah nomor WhatsApp di fungsi checkout (`wa.me`).
- Sesuaikan warna/tema di `styles.css`.
