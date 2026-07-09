# FILE-IN SDM — Website Tim SDM & Hukum BPS Provinsi Jawa Tengah

Migrasi dari Google Sites ke Next.js, siap deploy ke Vercel.

## Menjalankan secara lokal
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Deploy ke Vercel
1. Push folder ini ke repo GitHub (atau upload langsung ke Vercel).
2. Di vercel.com, klik "Add New Project" → import repo ini.
3. Vercel otomatis mendeteksi Next.js, tinggal klik Deploy.

## Struktur halaman
- `/` — Beranda (⚠️ masih placeholder berdasarkan screenshot, tunggu CSS asli)
- `/arsip-kepegawaian` — Dashboard 5 layanan (Hukum, Kepegawaian, PPID, SK, SKP)
- `/syarat-administrasi` — Grid 10 syarat administrasi
- `/layanan-regulasi` — 4 kartu regulasi (Tentang ASN, Manajemen ASN, PPT, Video)
- `/layanan-pusat` — Grid 8 layanan jabatan fungsional
- `/qna` — Form Saran & Kritik (submit ke Google Form)
- `/qna/respon` — Dashboard monitoring respon (fetch dari Google Sheets CSV)

## Yang masih perlu disesuaikan
- CSS asli untuk Beranda (navbar/hero/wave banner) — saat ini pakai pendekatan
  yang dibangun dari screenshot, bukan kode asli.
- Data agenda di Beranda (`lib/agenda-data.ts`) masih placeholder statis —
  bisa disambungkan ke Google Sheets seperti pola di `/qna/respon`.
- Link-link sub-halaman "Syarat Administrasi" masih mengarah ke Google Sites
  lama — perlu di-migrasi juga kalau ingin sepenuhnya lepas dari Google Sites.
