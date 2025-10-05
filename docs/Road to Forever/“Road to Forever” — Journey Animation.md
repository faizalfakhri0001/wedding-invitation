# “Road to Forever” — Journey Animation

### 🧠 **Konsep Utama**

Website ini menampilkan kisah cinta pasangan sebagai **perjalanan panjang di atas jalan cinta** — mulai dari titik pertemuan pertama, momen bersama, hingga tiba di tujuan akhir: **hari pernikahan**.

User akan **mengikuti mobil mini atau sepeda motor kecil** yang melaju melewati berbagai lanskap (kota, taman, gunung, pantai) — setiap wilayah mewakili babak hubungan yang berbeda.

Setiap scroll atau swipe akan menggerakkan kendaraan ke **checkpoint berikutnya**, tempat cerita dan visual baru muncul.

Cocok untuk tema wedding yang **fun, playful, cinematic, dan penuh makna perjalanan bersama.**

---

## 🎬 **Struktur Halaman & Story Flow**

### 1️⃣ **Opening Scene – The Journey Begins**

- **Visual:** Mobil kecil muncul di jalan panjang di bawah langit pagi.
- **Efek:** Kamera mengikuti mobil dari atas (bird-view cinematic).
- **Text:** “Every love story starts with a first ride.”
- **Transisi:** Scroll ke kanan → mobil mulai bergerak perlahan, awan bergerak ke arah berlawanan.

---

### 2️⃣ **Scene 1 – Where We Met**

- **Visual:** Mobil melewati kota kecil dengan papan “Where it all started”.
- **Efek:** Background bangunan dan pepohonan bergeser dengan efek parallax.
- **Text:** “We met here, where our paths first crossed.”
- **Suasana:** Ceria dan nostalgic.

---

### 3️⃣ **Scene 2 – Our Adventures**

- **Visual:** Jalan berkelok melewati pegunungan dan danau, suasana sore hangat.
- **Efek:** Motion 3D ringan (jalan naik-turun dengan efek depth).
- **Text:** “Together, we explored miles and moments.”
- **Transisi:** Scroll → mobil melewati terowongan → muncul adegan malam berbintang.

---

### 4️⃣ **Scene 3 – The Proposal Stop**

- **Visual:** Mobil berhenti di tempat indah (taman, pantai, atau atas bukit).
- **Efek:** Cahaya sunset menyinari dua siluet di samping mobil.
- **Text:** “And at this stop, forever began.”
- **Transisi:** Scroll → kamera zoom out → muncul rute menuju lokasi pernikahan.

---

### 5️⃣ **Scene 4 – The Wedding Destination**

- **Visual:** Mobil tiba di venue pernikahan yang penuh bunga dan lampu.
- **Efek:** Confetti dan partikel bunga keluar saat mobil berhenti.
- **Text:** “Welcome to our forever.”
- **Konten:** Detail acara + RSVP form.
- **Musik:** Ceria dan penuh perasaan bahagia.

---

## ✨ **Style & Visual Direction**

| Elemen | Detail |
| --- | --- |
| 🎨 **Warna Dominan** | Warm pastel tone: beige, soft orange, dusty blue |
| 🧭 **Tone & Mood** | Ceria, cinematic, nostalgic, hopeful |
| 🖋️ **Typography** | Judul: *Montserrat SemiBold* / *Cormorant Garamond*Body: *Poppins* |
| 🌄 **Visual Style** | Flat 3D illustration (paper-cut style) atau low-poly 3D scene |
| 🔊 **Audio Experience** | Suara mesin lembut + musik road trip mellow |
| 🎥 **Animasi Transisi** | Horizontal scroll motion + parallax + camera pan |

---

## ⚙️ **Teknologi & Library yang Bisa Digunakan**

| Aspek | Tools / Library Rekomendasi |
| --- | --- |
| **Framework utama** | Next.js (App Router) |
| **Scroll & Animation Engine** | GSAP + ScrollTrigger + MotionPathPlugin |
| **Parallax Scene** | Three.js / R3F (untuk depth dan world layering) |
| **Map & Route Animation** | SVG Path + GSAP motion path animation |
| **Audio** | Howler.js (sinkronisasi efek jalan & musik) |
| **Smooth Experience** | Lenis / Locomotive Scroll (horizontal smooth scroll) |
| **RSVP / Data** | React Hook Form + Supabase / Firebase |

---

## 💡 **Interactive Bonus Features**

1. 🗺️ **Interactive Route:** User bisa klik tiap titik perjalanan di peta mini untuk melihat chapter-nya.
2. 🚗 **Car Customization:** Pilih kendaraan (mobil, motor, VW Beetle lucu).
3. 🌤️ **Dynamic Weather:** Langit berubah dari pagi → sore → malam seiring scroll.
4. 📷 **Photo Stops:** Tiap “checkpoint” bisa menampilkan galeri foto mini.
5. 💌 **Animated RSVP Arrival:** Saat user submit RSVP, mobil kecil mereka tiba di venue dengan efek confetti.

---

## 🧭 **Pengalaman Pengguna (User Flow)**

1. User membuka web → mobil kecil diam di awal jalan, teks intro muncul.
2. Scroll → mobil mulai bergerak melalui berbagai lanskap (kota, gunung, pantai).
3. Setiap pemberhentian = cerita baru muncul (teks + gambar + animasi).
4. Setelah melewati semua checkpoint, mobil berhenti di venue pernikahan.
5. RSVP muncul sebagai “gerbang akhir perjalanan”.
6. Setelah RSVP → animasi “You’ve arrived at our forever.” dengan fade-out musik lembut.

---

## 💖 **Kesan Akhir**

> Website ini menghadirkan perjalanan cinta yang fun, sinematik, dan interaktif,
> 
> 
> seolah tamu **ikut berkendara** bersama pasangan dari awal cerita hingga hari bahagia.
> 
> Efek animasi dan parallax membuat setiap scroll terasa seperti **frame dari film petualangan romantis.**
> 

---

## 🚀 **Performance & Implementation Notes**

- Gunakan **horizontal scroll layout** (GSAP `ScrollTrigger + pin:true` untuk tiap scene).
- Vector grafik mobil & lanskap bisa dibuat dari SVG (untuk animasi ringan).
- Gunakan **lazy load** untuk tiap section agar tidak berat saat scroll awal.
- **Optimalkan audio loop** dengan fade-in/fade-out di tiap scene.
- Buat **hook useJourneyScroll()** untuk mengatur posisi kendaraan dan sync animasi rute.

[**Storyboard & Wireframe Visual — “Road to Forever”**](Storyboard%20&%20Wireframe%20Visual%20%E2%80%94%20%E2%80%9CRoad%20to%20Forever%E2%80%9D%20283bdc2a921880ab993ede44a0cc23d0.md)