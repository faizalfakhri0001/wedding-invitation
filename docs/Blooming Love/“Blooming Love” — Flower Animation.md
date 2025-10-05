# “Blooming Love” — Flower Animation

### 🧠 **Konsep Utama**

“Blooming Love” menghadirkan pengalaman undangan pernikahan yang terasa **hidup, natural, dan hangat**,

dengan bunga-bunga yang **bermekaran lembut mengikuti scroll** pengguna.

Website ini memvisualisasikan **pertumbuhan cinta** seperti **bunga yang tumbuh dari benih hingga mekar sempurna** — mewakili perjalanan hubungan yang penuh kesabaran dan keindahan.

Konsepnya bisa dibuat dalam dua gaya:

- 🌿 **Soft botanical** — nuansa alam pastel dan romantis (natural tone, watercolor).
- 🌷 **Modern floral motion** — warna cerah dan dynamic motion (framer motion + GSAP morphing).

---

## 🎬 **Struktur Halaman & Story Flow**

### 1️⃣ **Opening Scene – The First Bloom**

- **Visual:** Tangkai bunga tumbuh dari bawah layar, kelopak mulai terbuka.
- **Efek:** Scroll-triggered bloom animation.
- **Text:** “From a tiny seed, love began to grow.”
- **Musik:** Piano dan petikan senar lembut.
- **Transisi:** Kelopak terbuka penuh → muncul nama pasangan di tengah layar.

---

### 2️⃣ **Scene 1 – The Garden of Memories**

- **Visual:** Background taman dengan bunga di berbagai tahap pertumbuhan.
- **Efek:** Parallax 3D depth antara lapisan tanah, batang, dan bunga.
- **Animasi:** Scroll memunculkan foto dan momen indah di antara bunga.
- **Text:** “Each memory bloomed beautifully, just like the garden we built together.”

---

### 3️⃣ **Scene 2 – The Proposal**

- **Visual:** Bunga terbesar di tengah halaman mekar sempurna, kelopak jatuh lembut.
- **Efek:** Golden lighting shimmer pada bagian tengah bunga.
- **Animasi:** Cincin muncul di tengah bunga (3D spin ringan).
- **Text:** “And then, he asked me to bloom with him forever.”
- **Mood:** Hangat, spiritual, penuh cinta.

---

### 4️⃣ **Scene 3 – The Wedding Blossom**

- **Visual:** Latar taman luas dengan berbagai jenis bunga bermekaran serentak.
- **Efek:** Bunga bermekaran bersamaan dengan transisi warna lembut.
- **Konten:** Detail acara (tanggal, lokasi, dress code).
- **Text:** “Now our love blossoms into forever.”
- **Transisi:** Scroll terakhir menampilkan kelopak bunga naik ke langit.

---

### 5️⃣ **Scene 4 – Guest Wishes & RSVP**

- **Visual:** Background putih pastel dengan kelopak bunga jatuh.
- **Efek:** Hover kelopak = bergerak lembut seperti angin.
- **Konten:** Form RSVP dan kolom ucapan tamu.
- **Text:** “Your wishes make our love bloom brighter.”
- **Musik:** Lembut dan fade-out natural.

---

## ✨ **Style & Visual Direction**

| Elemen | Detail |
| --- | --- |
| 🎨 **Warna Dominan** | Pastel pink, blush, ivory, sage green, soft gold |
| 🧭 **Tone & Mood** | Lembut, natural, romantis, ceria |
| 🖋️ **Typography** | Headings: *Playfair Display* / *Cormorant Garamond*Body: *Lora* / *Poppins* |
| 🌼 **Visual Style** | Floral illustration + gradient petals + botanical texture |
| 🔊 **Audio Experience** | Soft ambient nature (burung, angin, gesekan daun) |
| 🎥 **Animasi Transisi** | Blooming morph, scroll fade-in, soft particle float |

---

## ⚙️ **Teknologi & Library yang Bisa Digunakan**

| Aspek | Tools / Library Rekomendasi |
| --- | --- |
| **Framework utama** | Next.js (App Router) |
| **Animation Engine** | GSAP + ScrollTrigger |
| **Floral Morphing Animation** | Lottie / SVG path morph (GSAP MorphSVGPlugin) |
| **Particle Effect (Kelopak Jatuh)** | Canvas API / Three.js Particle System |
| **Smooth Scroll** | Lenis / Locomotive Scroll |
| **Audio Control** | Howler.js |
| **Form & Data Handling** | React Hook Form + Supabase / Firebase (untuk RSVP) |

---

## 💡 **Interactive Bonus Features**

1. 🌼 **Hover Bloom:** Saat user hover bunga, kelopaknya sedikit membuka.
2. 🎧 **Toggle Musik Alam:** Tombol kecil di pojok bawah untuk nyalakan/matikan musik nature.
3. 💬 **Interactive Guest Wishes:** Tiap ucapan muncul sebagai bunga kecil yang mekar di layar.
4. 🌸 **Color Mode Transition:** Siang = pastel cerah, malam = ungu lembut (auto gradient change).
5. 💐 **Floral Countdown:** Animasi kelopak yang berkurang tiap hari menuju tanggal pernikahan.

---

## 🧭 **Pengalaman Pengguna (User Flow)**

1. User membuka web → bunga tumbuh dari bawah layar, simbol cinta mulai hidup.
2. Scroll → setiap section menampilkan kisah dengan bunga dan warna baru.
3. Background berubah lembut mengikuti waktu dan tema tiap scene.
4. User sampai di bagian RSVP → bunga berputar menjadi form RSVP.
5. Setelah RSVP dikirim, kelopak bunga terbang ke atas sebagai simbol doa.

---

## 💖 **Kesan Akhir**

> Website ini seperti taman digital yang tumbuh hidup, di mana setiap scroll membawa keindahan dan ketenangan.
> 
> 
> Efek bunga bermekaran menghadirkan makna bahwa **cinta bukan hanya tentang pertemuan, tetapi juga pertumbuhan bersama**.
> 
> Visualnya lembut, elegan, dan akan meninggalkan kesan romantis sekaligus tenang bagi para tamu.
> 

---

## 🚀 **Performance & Implementation Notes**

- Gunakan **vector SVG flower** agar ringan dan tetap tajam di semua layar.
- Gunakan **GSAP MorphSVG** untuk efek kelopak membuka/menutup.
- Semua foto gunakan **next/image** dengan `blurDataURL` agar load lembut.
- Pisahkan animasi berat (Lottie flower bloom, particle kelopak) ke dynamic import agar tidak blocking render.
- Gunakan **CSS mask + gradient transition** untuk menciptakan efek “terbuka perlahan”.

[**Storyboard & Wireframe Visual —** “Blooming Love”](Storyboard%20&%20Wireframe%20Visual%20%E2%80%94%20%E2%80%9CBlooming%20Love%E2%80%9D%20283bdc2a9218803bbc95f08e466d3f06.md)