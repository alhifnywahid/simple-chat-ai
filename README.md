# Simple Chat AI

Aplikasi web chat berbasis kecerdasan buatan yang dibangun menggunakan HTML, CSS, dan JavaScript murni. Pengguna dapat berinteraksi langsung dengan AI melalui antarmuka chat yang bersih dan responsif, tanpa perlu instalasi framework apapun.

> Baca dokumentasi ini dalam bahasa lain: [English](./README.en.md)

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Cara Menggunakan](#cara-menggunakan)
- [Struktur Proyek](#struktur-proyek)
- [Lisensi](#lisensi)

---

## Tentang Proyek

Simple Chat AI adalah aplikasi chat ringan yang memanfaatkan API OpenAI melalui endpoint eksternal untuk menghasilkan respons percakapan secara real-time. Proyek ini sengaja dibuat sesederhana mungkin — tidak ada bundler, tidak ada framework, tidak ada dependensi npm — sehingga siapa pun dapat langsung membuka dan menjalankannya di browser.

Cocok sebagai bahan belajar bagi pemula yang ingin memahami cara mengintegrasikan AI ke dalam halaman web statis.

---

## Fitur

- Layar sambutan dengan input nama pengguna sebelum memulai percakapan
- Tampilan chat gelembung (bubble) yang membedakan pesan pengguna dan respons AI
- Efek skeleton loading saat AI sedang memproses jawaban
- Tombol salin (copy) pada setiap respons AI
- Auto-scroll ke pesan terbaru secara otomatis
- Desain responsif dengan gradien warna biru yang bersih

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman |
| CSS3 | Tampilan, animasi skeleton, dan tata letak |
| JavaScript (Vanilla) | Logika aplikasi dan manipulasi DOM |
| Fetch API | Komunikasi asinkron ke endpoint AI |
| OpenAI API (via endpoint eksternal) | Sumber jawaban dari AI |

---

## Cara Menggunakan

Tidak diperlukan instalasi apapun. Cukup ikuti langkah berikut:

1. Clone repositori ini:

   ```bash
   git clone https://github.com/alhifnywahid/simple-chat-ai.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd simple-chat-ai
   ```

3. Buka file `index.html` langsung di browser, atau gunakan ekstensi Live Server jika menggunakan VS Code.

4. Masukkan nama Anda pada layar sambutan, lalu mulai percakapan dengan AI.

> **Catatan:** Aplikasi ini bergantung pada endpoint API eksternal (`https://dikaardnt.com/api/tool/openai`). Pastikan koneksi internet tersedia saat menjalankannya. Jika endpoint tidak tersedia, respons AI tidak akan ditampilkan.

---

## Struktur Proyek

```
simple-chat-ai/
├── index.html      # Halaman utama, struktur UI, dan seluruh gaya CSS
├── main.js         # Logika JavaScript: pengelolaan DOM, fetch API, dan interaksi pengguna
├── .gitignore      # Daftar file yang dikecualikan dari repositori
├── README.md       # Dokumentasi (Bahasa Indonesia) — file ini
└── README.en.md    # Dokumentasi (English)
```

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).

Anda bebas menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan/atau menjual salinan perangkat lunak ini, dengan tetap mencantumkan atribusi kepada penulis asli.
