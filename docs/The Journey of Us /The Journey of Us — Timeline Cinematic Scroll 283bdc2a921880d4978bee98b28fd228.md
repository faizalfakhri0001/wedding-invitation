# "The Journey of Us" — Timeline Cinematic Scroll

### 🧠 **Konsep Utama**

Website ini menggambarkan **perjalanan cinta pasangan dari awal hingga hari pernikahan**, seolah-olah penonton sedang **menonton film** dengan alur kronologis — mulai dari **pertemuan pertama**, **momen penting**, **lamaran**, hingga **hari bahagia**.

User akan **scroll atau swipe** untuk melanjutkan cerita.

Setiap gerakan scroll adalah “scene” baru yang punya **transisi sinematik**, **animasi halus**, dan **soundtrack yang selaras dengan mood ceritanya.**

---

## 🎬 **Struktur Halaman & Story Flow**

### 1️⃣ **Opening Scene – Title Animation**

- **Visual:** Logo nama pasangan muncul dengan animasi sinematik (fade-in + blur-to-clear).
- **Efek:** Partikel cahaya beterbangan, musik lembut mulai mengalun.
- **Text:** “The Journey of Us – [Nama Kamu] & [Pasangan]”
- **Teknologi:** `Framer Motion`, `GSAP Timeline`, `Lottie JSON intro`, `ScrollTrigger`.

---

### 2️⃣ **Scene 1 – How We Met**

- **Visual:** Foto/ilustrasi tempat pertama bertemu (kampus, kantor, kafe).
- **Efek:** Parallax depth (latar belakang dan objek utama bergerak dengan kecepatan berbeda).
- **Animasi:**
    - Siluet dua orang berjalan saling mendekat.
    - Bubble text muncul seperti chat pertama kalian.
- **Mood:** Lembut dan lucu.
- **Musik:** Suara gitar atau piano ringan.

---

### 3️⃣ **Scene 2 – Moments We Shared**

- **Visual:** Carousel 3D kenangan — foto, video pendek, clip reel.
- **Efek:**
    - Scroll = kamera cinematic bergerak antar foto/video.
    - Transisi seperti montage film (cut, dissolve, zoom).
- **Animasi Tambahan:**
    - Efek bokeh dan slow motion.
    - Text muncul dengan efek “typewriter”.
- **Mood:** Nostalgia bahagia.

---

### 4️⃣ **Scene 3 – The Proposal**

- **Visual:** Adegan lamaran bergaya sinematik (mungkin foto real atau ilustrasi).
- **Efek:**
    - Cahaya lilin menyala otomatis.
    - Cincin berputar dengan efek 3D ringan (Three.js minimal).
    - Bunga bermekaran di background.
- **Text:** “And I said… YES!” dengan animasi handwriting.
- **Musik:** Naik lebih dramatis dengan crescendo.

---

### 5️⃣ **Scene 4 – The Wedding Day**

- **Visual:**
    - Background lokasi acara (bisa foto real tempat pernikahan).
    - Animasi cuaca cerah, confetti halus jatuh.
- **Konten:**
    - Informasi detail acara: tanggal, waktu, lokasi, dress code.
    - Button RSVP muncul dengan efek fade dari bawah.
- **Bonus:**
    - Countdown timer bergaya cinematic (angka muncul dari bayangan).

---

### 6️⃣ **Scene 5 – Closing & Gratitude**

- **Visual:**
    - Foto pasangan bergandengan tangan di bawah langit malam penuh bintang.
- **Efek:**
    - Bintang berkelip dinamis (particle system).
    - Text floating: “See you on our special day.”
- **Animasi Akhir:**
    - Transisi fade ke halaman ucapan dari tamu (Guest Wishes).
- **Musik:** Fade-out lembut, meninggalkan kesan hangat.

---

## ✨ **Style & Visual Direction**

| Elemen | Detail |
| --- | --- |
| 🎨 **Warna Dominan** | Ivory, gold, soft beige, rose gold |
| 🧭 **Tone & Mood** | Romantis, nostalgic, cinematic |
| 🖼️ **Typography** | Kombinasi serif elegan + handwriting untuk nuansa personal |
| 🌄 **Visual Style** | Depth & Parallax (layered photo composition) |
| 🔊 **Audio Experience** | Soundtrack lembut + efek transisi halus |
| 🎥 **Animasi Transisi** | Fade, zoom, motion blur, camera pan, light rays |

---

## ⚙️ **Teknologi & Library yang Bisa Digunakan**

| Aspek | Tools / Library Rekomendasi |
| --- | --- |
| **Framework utama** | Next.js (App Router) |
| **Animation** | GSAP + ScrollTrigger |
| **3D Element** | Three.js / R3F (untuk efek cincin, confetti, particle) |
| **Lottie** | Untuk efek kecil seperti hati, bunga mekar, transisi |
| **Audio Control** | Howler.js (sinkronisasi suara & scene) |
| **Lazy Motion Asset** | Framer Motion for fade-in/out transitions |
| **Image Optimization** | Next/Image (progressive load) |

---

## 💡 **Interactive Bonus Features**

1. 🎧 **Audio Toggle:** User bisa aktifkan musik latar sesuai suasana.
2. 💌 **Guestbook:** Animasi kertas terbang setiap kali seseorang menulis ucapan.
3. 📍 **Map Animation:** Lokasi pernikahan muncul dari zoom-out Google Map dengan efek cinematic.
4. ⏱️ **Cinematic Countdown:** Angka muncul seperti “movie timer reel”.
5. 📸 **Photo Reel Outro:** Setelah RSVP, muncul mini slideshow kenangan.

---

## 🧭 **Pengalaman Pengguna (User Flow)**

1. User membuka website → logo animasi muncul.
2. Scroll pelan → cerita dimulai dari awal.
3. Setiap scroll = transisi scene seperti film.
4. Di akhir, user bisa RSVP atau kirim ucapan.
5. Website tetap responsif & tetap cinematic di mobile.

---

## 💖 **Kesan Akhir**

> Website ini seperti “film pendek” digital yang membuat tamu merasa ikut dalam perjalanan cinta kalian, bukan hanya membaca undangan.
> 
> 
> Semua transisi halus, motion terarah, dan sound-nya sinkron — memberikan efek **emosional, sinematik, dan sangat personal.**
> 

[**Storyboard & Wireframe Visual — “The Journey of Us”**](Storyboard%20&%20Wireframe%20Visual%20%E2%80%94%20%E2%80%9CThe%20Journey%20of%20Us%20283bdc2a921880a4b05ced4f5f4b8bb9.md)