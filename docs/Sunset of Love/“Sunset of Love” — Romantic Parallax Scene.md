# “Sunset of Love” — Romantic Parallax Scene

### 🧠 **Konsep Utama**

Website undangan pernikahan yang menghadirkan suasana **romantis di bawah langit senja** — dari sore hangat hingga malam berbintang.

User akan merasakan **perjalanan waktu dan emosi** melalui **perubahan warna langit**, **efek parallax multi-layer**, dan **animasi lembut** yang mengikuti setiap scroll.

Setiap scroll seolah membawa pengunjung **melewati momen-momen cinta** di bawah matahari yang perlahan terbenam — menghadirkan kesan **sinematik, tenang, dan menyentuh hati.**

---

## 🎬 **Struktur Halaman & Story Flow**

### 1️⃣ **Opening Scene – Golden Sky Intro**

- **Visual:** Langit keemasan dengan awan lembut bergerak, matahari berada tinggi di langit.
- **Efek:** Partikel cahaya lembut (glow) dan burung terbang jauh di horizon.
- **Text:** “Every sunset tells a story... ours began with a glance.”
- **Musik:** Petikan gitar akustik pelan.
- **Transisi:** Scroll ke bawah membuat matahari perlahan turun.

---

### 2️⃣ **Scene 1 – The Encounter**

- **Visual:** Latar kota kecil atau taman, siluet dua orang berjalan dari arah berlawanan.
- **Efek:** Parallax kedalaman (gedung, pepohonan, jalan).
- **Animasi:** Dua karakter berhenti dan saling menatap; efek lens flare muncul di antara mereka.
- **Text:** “When paths crossed, hearts listened.”
- **Mood:** Lembut, hangat, romantis.

---

### 3️⃣ **Scene 2 – Growing Together**

- **Visual:** Taman berwarna oranye muda dengan bunga-bunga bermekaran.
- **Efek:** Motion flower blooming dan subtle particle kelopak terbang.
- **Animasi:** Scroll memunculkan foto-foto kenangan (fade-in bergantian).
- **Text:** “With every day, our story bloomed beautifully.”
- **Musik:** Piano lembut dan ambient nature sound (burung, angin).

---

### 4️⃣ **Scene 3 – Promise at Sunset**

- **Visual:** Matahari besar di horizon, pantulan cahaya di air.
- **Efek:** Kamera cinematic zoom ke pasangan bergandengan tangan.
- **Animasi:** Matahari tenggelam secara perlahan, warna langit berubah dari jingga ke ungu lembut.
- **Text:** “And under this sunset, we made a promise.”
- **Musik:** Meningkat dengan nada emosional.

---

### 5️⃣ **Scene 4 – The Wedding Night**

- **Visual:** Langit malam penuh bintang dan kunang-kunang beterbangan.
- **Efek:** Twinkling particle + shooting star animasi acak.
- **Animasi:** Bintang perlahan muncul saat user scroll.
- **Text:** “Our forever begins tonight.”
- **Mood:** Damai, magis, dan penuh cinta.

---

### 6️⃣ **Scene 5 – RSVP & Gratitude**

- **Visual:** Lampion beterbangan ke langit, di bawahnya terdapat tombol RSVP dan detail acara.
- **Efek:** Scroll memunculkan 1–2 lampion per gerakan.
- **Text:** “Join us as our story continues under the stars.”
- **Animasi:** RSVP button muncul dengan efek lembut dari bawah.
- **Musik:** Fade-out romantis dengan suara angin malam.

---

## ✨ **Style & Visual Direction**

| Elemen | Detail |
| --- | --- |
| 🎨 **Warna Dominan** | Sky blue → peach → coral → violet → deep indigo |
| 🧭 **Tone & Mood** | Romantis, menenangkan, natural, cinematic |
| 🖋️ **Typography** | Judul: *Cormorant Garamond*Body: *Poppins / Lora* |
| 🌇 **Visual Style** | Gradient dynamic background, warm light reflection |
| 🔊 **Audio Experience** | Transisi musik mengikuti waktu langit (siang–malam) |
| 🎥 **Animasi Transisi** | Parallax scroll, gradient morph, fade, camera pan |

---

## ⚙️ **Teknologi & Library yang Bisa Digunakan**

| Aspek | Tools / Library Rekomendasi |
| --- | --- |
| **Framework utama** | Next.js (App Router) |
| **Animation Engine** | GSAP + ScrollTrigger |
| **Parallax Effect** | Rellax.js / manual translateZ() layers |
| **Particle Animation** | Three.js / Lottie / Canvas API |
| **Audio Control** | Howler.js |
| **Smooth Scroll** | Lenis / Locomotive Scroll |
| **Image Optimization** | Next/Image (blur placeholder, lazy load) |

---

## 💡 **Interactive Bonus Features**

1. 🎧 **Toggle Music:** Icon kecil di pojok kanan bawah untuk menyalakan/mematikan musik.
2. 🕊️ **Dynamic Sky Clock:** Warna langit menyesuaikan waktu lokal pengguna (real-time gradient).
3. 💬 **Guest Wishes:** Balon ucapan muncul dan naik ke langit saat user menulis pesan.
4. 📍 **Animated Map:** Lokasi acara muncul dari zoom-out bumi → ke peta kota → ke lokasi venue.
5. 💌 **Lampion Interaktif:** Klik lampion = muncul kutipan cinta acak.

---

## 🧭 **Pengalaman Pengguna (User Flow)**

1. User membuka website → melihat langit keemasan & animasi awan.
2. Scroll perlahan → perubahan warna langit menggambarkan perjalanan cinta.
3. Setiap scene memunculkan kisah pendek (encounter → growth → promise → wedding night).
4. Scene terakhir berisi undangan & RSVP form.
5. Setelah RSVP, muncul animasi lampion terbang + pesan “See you under the stars.”

---

## 💖 **Kesan Akhir**

> Website ini memberikan pengalaman romantis dan sinematik seperti menonton matahari terbenam yang bercerita tentang cinta.
> 
> 
> Warna, cahaya, dan musik berpadu lembut menciptakan atmosfer hangat yang membuat tamu merasa **terhubung secara emosional dengan kisah pasangan.**
> 

---

## 🚀 **Performance & Implementation Notes**

- Gunakan **GSAP timeline chaining** agar animasi langit, objek, dan teks berjalan serempak.
- Gunakan **Canvas gradient morphing** untuk pergantian langit agar ringan (daripada video).
- **Lazy-load** foto dan efek berat (Three.js hanya untuk scene tertentu).
- Pastikan musik di-load asinkron dengan kontrol volume lembut (`fadeIn()` via Howler).

[**Storyboard & Wireframe Visual — “Sunset of Love”**](Storyboard%20&%20Wireframe%20Visual%20%E2%80%94%20%E2%80%9CSunset%20of%20Love%E2%80%9D%20283bdc2a921880a398dad6be6339118c.md)