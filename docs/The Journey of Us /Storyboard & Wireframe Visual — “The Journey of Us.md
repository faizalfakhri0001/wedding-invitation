# Storyboard & Wireframe Visual — “The Journey of Us”

### 🌟 Konsep Inti

Satu halaman panjang (scroll cinematic) berisi 6 scene besar, tiap scene berperan seperti potongan film.

Transisi antar scene dikendalikan oleh **scroll-based animation** (GSAP ScrollTrigger).

Background berubah halus antar scene dengan **parallax layer** untuk menciptakan depth.

---

## 🧩 **Structure Overview (Next.js App Router)**

```
/src/app/(main)/invitation
  ├─ page.tsx                  → Main cinematic scroll
  ├─ components/
  │   ├─ IntroScene.tsx
  │   ├─ MeetScene.tsx
  │   ├─ MemoryScene.tsx
  │   ├─ ProposalScene.tsx
  │   ├─ WeddingScene.tsx
  │   ├─ ClosingScene.tsx
  │   └─ MusicController.tsx
  ├─ styles/
  │   ├─ scenes.css            → Parallax, blur, lighting
  │   └─ typography.css
  ├─ assets/
  │   ├─ photos/
  │   ├─ music/
  │   └─ lottie/

```

---

## 🪞 **Scene 1 — Intro Scene (Opening Title)**

### 🎞️ Storyboard:

```
[Visual] Langit sore lembut dengan partikel cahaya berkilau
[Motion] Logo “The Journey of Us” muncul dari blur → fade-in
[Text] Nama pasangan muncul dengan handwriting animation
[Audio] Piano lembut mulai bermain
[Transition] Scroll ke bawah → langit berubah menjadi malam

```

### 🧱 Wireframe (Layout)

```
------------------------------------
|        ✨ Partikel Cahaya         |
|                                   |
|     [The Journey of Us]           |
|     [Faizal ❤️ Jannah]            |
|                                   |
|     ↓ Scroll to begin             |
------------------------------------

```

### 🎨 Detail Teknis:

- **GSAP fade + scale intro**
- **Lottie** untuk efek cahaya
- **ScrollTrigger** untuk transisi ke scene berikutnya

---

## 🌇 **Scene 2 — How We Met**

### 🎞️ Storyboard:

```
[Visual] Background: ilustasi tempat pertama bertemu (kafe/kampus)
[Motion] Siluet 2 orang berjalan mendekat
[Text] Chat bubble animasi muncul: "Hey, do you remember our first talk?"
[Transition] Kamera zoom out → muncul tulisan “It all started here”

```

### 🧱 Wireframe:

```
------------------------------------
| ☕  Background Cafe Parallax       |
|                                   |
|  🚶‍♂️       💬 "Hi!"      🚶‍♀️      |
|                                   |
|   Text fade-in: "Our story began" |
------------------------------------

```

### 🎨 Detail Teknis:

- **Parallax layer (background, mid, foreground)**
- **Bubble chat animation (Framer Motion)**
- **Path animation (GSAP MotionPath)**

---

## 🌸 **Scene 3 — Moments We Shared**

### 🎞️ Storyboard:

```
[Visual] Collage 3D kenangan: foto, video, clip pendek
[Motion] Scroll = kamera bergerak melewati foto seperti slideshow sinematik
[Text] “Every moment we shared became a story to tell.”
[Transition] Lens flare & light leak → fade ke proposal scene

```

### 🧱 Wireframe:

```
------------------------------------
| [ 📸 ] [ 📽️ ] [ 💌 ]              |
|                                   |
|   Text: "Every moment we shared"  |
|                                   |
|      Parallax photo depth         |
------------------------------------

```

### 🎨 Detail Teknis:

- **3D camera effect (R3F minimal / GSAP perspective)**
- **Light overlay (CSS blend-mode soft-light)**
- **Subtle background music shift**

---

## 💍 **Scene 4 — The Proposal**

### 🎞️ Storyboard:

```
[Visual] Scene dengan lilin, bunga, dan cincin melayang 3D
[Motion] Cahaya lilin menyala satu per satu → spotlight ke cincin
[Text] “He asked...” → pause → “And she said, YES!”
[Audio] Musik naik sedikit dramatis

```

### 🧱 Wireframe:

```
------------------------------------
| 🕯️🕯️💍🕯️🕯️                       |
|                                   |
|     "He asked..."                 |
|     [Cincin muncul 3D]            |
|     "And she said, YES!"          |
------------------------------------

```

### 🎨 Detail Teknis:

- **Three.js object ringan (cincin berputar)**
- **GSAP sequence (delay & light flicker)**
- **Glow filter (CSS backdrop-filter + blur)**

---

## 💒 **Scene 5 — The Wedding Day**

### 🎞️ Storyboard:

```
[Visual] Background lokasi acara (venue / taman / gedung)
[Motion] Confetti halus jatuh, countdown animasi berjalan
[Content] Detail acara + RSVP button muncul dengan soft bounce
[Audio] Musik paling cerah dari seluruh scene

```

### 🧱 Wireframe:

```
------------------------------------
| 🎉 Confetti Particle Animation 🎉 |
|                                   |
|   [Tanggal, Waktu, Lokasi]       |
|   [Map Button] [RSVP Button]     |
|                                   |
|   Countdown: 14 Days to Go        |
------------------------------------

```

### 🎨 Detail Teknis:

- **Scroll-triggered fade-up untuk elemen acara**
- **Confetti particle via Canvas / Lottie**
- **Interactive RSVP modal (Framer Motion)**

---

## 🌌 **Scene 6 — Closing Scene & Guest Wishes**

### 🎞️ Storyboard:

```
[Visual] Langit malam penuh bintang, siluet pasangan bergandengan tangan
[Motion] Bintang berkelip, shooting star sesekali lewat
[Text] “See you on our special day.”
[Interaction] User bisa tulis pesan → animasi kertas terbang

```

### 🧱 Wireframe:

```
------------------------------------
| 🌌 Starry Sky Background          |
|                                   |
|   👫 Siluet pasangan               |
|   "See you on our special day"    |
|                                   |
|   💬 Input ucapan tamu            |
------------------------------------

```

### 🎨 Detail Teknis:

- **Particle.js / custom canvas stars**
- **GSAP random twinkle animation**
- **Text reveal (mask transition)**
- **Guestbook animation (Framer Motion)**

---

## ⚙️ **Interactivity Map**

| Aksi | Efek Animasi |
| --- | --- |
| Scroll Down | Ganti scene (fade + parallax) |
| Hover on Photo | Zoom gentle + vignette |
| Click RSVP | Modal fade-in form |
| Submit Wish | Kertas terbang (Lottie) |
| Toggle Music | Icon berubah (mute/unmute animasi) |

---

## 🎨 **Moodboard & Visual Guide**

| Elemen | Gaya |
| --- | --- |
| 🎞️ **Mood** | Nostalgic, romantic, cinematic |
| 🎨 **Warna** | Warm ivory, soft gold, peach, beige |
| 🖋️ **Font** | Playfair Display (judul), Great Vibes (handwriting) |
| 🌅 **Lighting** | Soft gradient light leaks (top-to-bottom) |
| 🎧 **Audio** | Piano → orchestral buildup → ambient night outro |

---

## 🚀 **Tech & Performance Tips**

- Gunakan **GSAP timeline chaining** antar scene agar animasi terasa satu alur.
- Optimalkan gambar dengan `next/image` dan `blurDataURL` preload.
- Gunakan **lazy loading untuk Lottie & Three.js** di scene berat (proposal & wedding).
- Implementasikan **scroll smoothing** dengan `Lenis` atau `Locomotive Scroll`.