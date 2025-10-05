# Storyboard & Wireframe Visual — “Blooming Love”

### 🧩 **Structure Overview (Next.js App Router)**

```
/src/app/(main)/invitation
  ├─ page.tsx                        → Main cinematic scroll
  ├─ components/
  │   ├─ OpeningScene.tsx
  │   ├─ GardenScene.tsx
  │   ├─ ProposalScene.tsx
  │   ├─ WeddingScene.tsx
  │   ├─ GuestScene.tsx
  │   └─ MusicController.tsx
  ├─ styles/
  │   ├─ floral.css                  → Blooming animation & parallax
  │   ├─ particle.css                → Falling petals
  │   └─ typography.css
  ├─ assets/
  │   ├─ images/
  │   ├─ lottie/
  │   └─ audio/

```

---

## 🌱 **Scene 1 — Opening Scene (The First Bloom)**

### 🎞️ **Storyboard**

```
[Visual] Layar kosong berwarna putih lembut dengan satu titik tanah di tengah.
[Motion] Batang kecil tumbuh perlahan ke atas, diikuti kelopak bunga yang mulai terbuka.
[Text] “From a tiny seed, love began to grow.”
[Audio] Musik piano lembut, suara alam samar.
[Transition] Scroll → kelopak membuka penuh, muncul nama pasangan.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
|         🌱  Batang tumbuh ke atas         |
|                                            |
|    🌸 Kelopak membuka perlahan             |
|                                            |
| “From a tiny seed, love began to grow.”    |
|                                            |
|         [Faizal ❤️ Jannah]                 |
|            ↓ Scroll to begin               |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP MorphSVG:** animasi tangkai & kelopak membuka.
- **Framer Motion:** teks fade-in sinkron dengan pembukaan bunga.
- **Canvas Particle:** debu cahaya halus di sekitar bunga.
- **Gradient background:** ivory → blush pink.

---

## 🌼 **Scene 2 — Garden of Memories**

### 🎞️ **Storyboard**

```
[Visual] Background taman luas dengan bunga di berbagai tahap pertumbuhan.
[Motion] Scroll = bunga baru tumbuh satu per satu dari bawah layar.
[Content] Foto dan momen kenangan muncul di antara bunga.
[Text] “Each memory bloomed beautifully, just like our garden of love.”
[Transition] Scroll → semua bunga bergerak lembut mengikuti arah angin.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌸🌼🌷   Background taman (multi-layer)      |
|                                            |
| [Foto pasangan muncul di sela bunga]       |
|                                            |
| “Each memory bloomed beautifully...”       |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP ScrollTrigger:** setiap scroll section memunculkan satu bunga baru.
- **Framer Motion:** foto muncul dengan fade + slight zoom.
- **Parallax depth:** layer tanah, batang, kelopak bergerak berbeda kecepatan.
- **Subtle sway animation:** bunga bergoyang halus.

---

## 🌷 **Scene 3 — The Proposal (The Golden Bloom)**

### 🎞️ **Storyboard**

```
[Visual] Bunga terbesar di tengah halaman mekar sempurna.
[Motion] Saat kelopak terbuka penuh, cincin muncul di tengahnya (animasi berputar lembut).
[Text] “And then, he asked me to bloom with him forever.”
[Audio] Musik naik perlahan, efek cahaya keemasan menyala di tengah bunga.
[Transition] Scroll → kelopak jatuh perlahan ke bawah layar.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
|             ✨ Cahaya keemasan ✨          |
|              🌸 Bunga besar               |
|            💍 Cincin muncul di tengah     |
|                                            |
| “He asked me to bloom with him forever.”   |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Three.js / R3F:** cincin 3D berputar perlahan.
- **GSAP timeline:** sinkronisasi pembukaan kelopak dan munculnya cincin.
- **Lighting effect:** radial gradient + blur shimmer.
- **Particle:** kelopak jatuh (Canvas API).

---

## 💐 **Scene 4 — The Wedding Blossom**

### 🎞️ **Storyboard**

```
[Visual] Background penuh bunga bermekaran serentak.
[Motion] Scroll = “mass bloom animation” di seluruh layar.
[Content] Detail acara: tanggal, lokasi, waktu, dress code.
[Text] “Now our love blossoms into forever.”
[Transition] Scroll ke bawah → background berubah menjadi putih pastel dengan kelopak beterbangan.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌸🌼🌺 Background taman penuh bunga         |
|                                            |
| [Tanggal Acara] [Waktu] [Lokasi]          |
| [Dress Code: Soft Pastel]                  |
|                                            |
| “Now our love blossoms into forever.”      |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP stagger animation:** setiap bunga muncul dengan delay kecil.
- **ScrollTrigger:** sinkronisasi fade-up info acara.
- **Framer Motion:** text glide-in & countdown gentle pop.
- **Background gradient:** soft blush → ivory tone.

---

## 💌 **Scene 5 — Guest Wishes & RSVP**

### 🎞️ **Storyboard**

```
[Visual] Background putih pastel dengan kelopak bunga jatuh perlahan.
[Motion] Hover pada kelopak = sedikit berputar arah.
[Content] Form RSVP dan kolom ucapan.
[Text] “Your wishes make our love bloom brighter.”
[Audio] Musik menurun lembut, fade ke keheningan romantis.
[Transition] Setelah submit RSVP → animasi bunga kecil tumbuh di samping nama user.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌸 Kelopak jatuh pelan-pelan               |
|                                            |
| “Your wishes make our love bloom brighter.”|
|                                            |
| [RSVP Form]                                |
| [Guest Wishes Input]                       |
|                                            |
| 💐 Animasi bunga tumbuh setelah submit     |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Form animation:** input + submit fade-in dari bawah.
- **Success animation:** bunga kecil tumbuh (Lottie / SVG scale).
- **Particle physics ringan:** kelopak jatuh random.
- **Backend:** Supabase / Firebase untuk penyimpanan RSVP & pesan.

---

## ⚙️ **Interactivity Map**

| Aksi | Efek Animasi |
| --- | --- |
| Scroll Down | Menumbuhkan bunga baru di setiap scene |
| Hover pada Kelopak | Kelopak berputar kecil seolah tertiup angin |
| Klik RSVP | Modal form terbuka dengan efek bloom dari tengah |
| Submit Ucapan | Bunga baru tumbuh dengan nama pengirim |
| Toggle Musik | Icon berubah + suara ambient fade in/out |

---

## 🎨 **Moodboard & Visual Guide**

| Elemen | Gaya |
| --- | --- |
| 🎞️ **Mood** | Romantis, lembut, organik |
| 🎨 **Warna** | Pastel pink, blush rose, ivory, sage green |
| 🖋️ **Font** | Playfair Display (judul), Lora / Poppins (body) |
| 🌼 **Lighting** | Soft vignette, gradient natural |
| 🎧 **Audio** | Musik piano & suara angin lembut |
| 🌺 **Motion Style** | Slow, graceful, morph-based animation |

---

## 🚀 **Tech & Performance Tips**

- Gunakan **SVG vector bunga** untuk resolusi tinggi dan file ringan.
- Terapkan **`will-change: transform`** pada elemen animasi besar untuk kelancaran.
- Gunakan **GSAP timeline chaining** agar animasi terasa seperti pertumbuhan alami.
- **Lazy load foto dan Lottie** untuk menjaga TTI (Time To Interactive).
- Buat satu **custom hook useScrollBloom()** untuk mengatur sequence animasi berbasis scroll.

---

## 💖 **Kesan Akhir**

> Website ini seperti taman digital yang hidup dan bernafas, menggambarkan cinta yang tumbuh, mekar, dan berbagi keindahan dengan semua yang melihatnya.
> 
> 
> Warna lembut, gerakan pelan, dan efek alam menciptakan suasana **romantis, damai, dan penuh makna — seperti bunga cinta yang tak pernah layu.**
>