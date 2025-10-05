# Storyboard & Wireframe Visual — “Carousel of Memories”

### 🧩 **Structure Overview (Next.js App Router)**

```
/src/app/(main)/invitation
  ├─ page.tsx                        → Main cinematic scroll / gallery
  ├─ components/
  │   ├─ OpeningScene.tsx
  │   ├─ CarouselScene.tsx
  │   ├─ ProposalScene.tsx
  │   ├─ WeddingScene.tsx
  │   ├─ ClosingScene.tsx
  │   └─ MusicController.tsx
  ├─ styles/
  │   ├─ carousel.css
  │   ├─ lighting.css
  │   └─ typography.css
  ├─ assets/
  │   ├─ images/gallery/
  │   ├─ lottie/
  │   └─ audio/

```

---

## 🖼️ **Scene 1 — Opening Scene (Welcome to Our Memories)**

### 🎞️ **Storyboard**

```
[Visual] Ruangan gelap perlahan diterangi cahaya lembut.
[Motion] Satu frame foto melayang di udara, disinari cahaya spotlight.
[Text] “Welcome to Our Memories.”
[Audio] Musik piano lembut mulai terdengar.
[Transition] Scroll → kamera bergerak mendekat ke frame, lalu “masuk” ke galeri carousel.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
|      🌑 Background gelap dengan cahaya lembut |
|                                              |
|       🖼️  Frame foto pertama (fade-in)       |
|                                              |
|   “Welcome to Our Memories”                  |
|                                              |
|         ↓ Scroll to enter the gallery        |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Lighting fade-in:** GSAP timeline + CSS gradient radial.
- **Parallax shadow effect:** Depth illusion di frame foto.
- **ScrollTrigger:** Scroll pertama memicu pergerakan kamera ke dalam ruangan.
- **Audio:** Fade-in lembut 3 detik pertama.

---

## 🌀 **Scene 2 — Carousel of Our First Days**

### 🎞️ **Storyboard**

```
[Visual] Carousel 3D berputar perlahan di ruangan hangat dengan lampu keemasan.
[Motion] Scroll = carousel berputar 15–20° menampilkan foto kenangan pertama (chat, tempat pertemuan, senyum pertama).
[Text] “Where it all began.”
[Audio] Gitar akustik lembut + suara klik kamera di background.
[Transition] Scroll → carousel terus berputar ke sisi foto berikutnya.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌇 Lighting hangat (ambient gold hue)      |
|                                            |
|      🖼️ 🖼️ 🖼️ 🖼️ (carousel berputar)       |
|                                            |
|    “Where it all began.”                   |
|                                            |
|  Scroll → memunculkan foto baru            |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Three.js + R3F:** Foto diatur melingkar (radius ±6).
- **ScrollTrigger:** Scroll = rotasi carousel `y-axis`.
- **Depth of field:** Fokus pada foto aktif, blur pada lainnya.
- **GSAP Lighting change:** warna cahaya menyesuaikan tone foto.

---

## 🧭 **Scene 3 — Our Adventures**

### 🎞️ **Storyboard**

```
[Visual] Carousel kini menampilkan video pendek & foto perjalanan.
[Motion] Scroll = carousel berputar ke sisi lain, menampilkan tiap momen seperti montase.
[Effect] Refleksi lembut di lantai (mirror floor).
[Text] “Every adventure was a story we wrote together.”
[Transition] Scroll → kamera bergerak sedikit maju (zoom-in lembut).

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🏞️ Background soft blur (mountain/lake)   |
|                                            |
|   🎠 Carousel 3D (foto & video mix)         |
|                                            |
| “Every adventure was a story we wrote…”    |
|                                            |
| Scroll → kamera bergerak mendekat          |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Video texture mapping** pada plane 3D (MP4 short loops).
- **GSAP z-axis camera movement** untuk efek depth sinematik.
- **Refleksi:** Floor shader / plane semi-reflective.
- **Sound layer:** Ambient alam (burung, angin, langkah).

---

## 💍 **Scene 4 — The Proposal Frame**

### 🎞️ **Storyboard**

```
[Visual] Carousel berhenti, spotlight fokus pada satu foto utama — momen lamaran.
[Motion] Semua frame lain blur dan meredup.
[Text] “The moment everything changed.”
[Effect] Kelopak bunga jatuh pelan, cahaya keemasan memancar di sekitar foto.
[Audio] Piano naik lembut, tempo lebih emosional.
[Transition] Scroll → foto mulai bergerak mundur perlahan, menggantikan scene undangan.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌸 Kelopak bunga jatuh dari atas layar     |
|                                            |
|       🖼️ Foto proposal (fokus utama)       |
|                                            |
|   “The moment everything changed.”         |
|                                            |
| Background blur lembut & gelap             |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Depth of Field:** Foto utama dalam fokus, background bokeh.
- **Particle:** Kelopak bunga (Lottie / Canvas).
- **Lighting:** PointLight fokus di tengah frame.
- **GSAP fade sequence:** Text & lighting muncul serempak.

---

## 💌 **Scene 5 — The Wedding Invitation**

### 🎞️ **Storyboard**

```
[Visual] Carousel berhenti dan perlahan berubah menjadi frame undangan.
[Motion] Semua frame di belakang menghilang → hanya satu frame besar di tengah.
[Content] Detail acara (tanggal, waktu, lokasi, RSVP).
[Effect] Cahaya putih hangat menyorot dari atas seperti “new beginning.”
[Audio] Musik berubah ke versi romantis lebih cerah.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| ☀️ Cahaya putih keemasan di tengah layar  |
|                                            |
|   🖼️ Frame undangan besar (centered)       |
|                                            |
| [Tanggal] [Waktu] [Lokasi] [RSVP Button]  |
|                                            |
| “Now a new story is about to begin.”       |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Frame morph:** Scale up foto terakhir → ubah jadi layout undangan.
- **GSAP timeline:** fade foto lain, ubah warna lighting jadi cerah.
- **Framer Motion:** animasi tombol RSVP fade-up.
- **Audio transition:** fade to bright theme.

---

## 🌌 **Scene 6 — Closing Scene & Gratitude**

### 🎞️ **Storyboard**

```
[Visual] Galeri perlahan redup, satu per satu foto menyala seperti bintang.
[Text] “Thank you for being part of our story.”
[Effect] Background berubah menjadi langit malam penuh titik cahaya (foto mini).
[Audio] Musik menurun lembut, diakhiri suara lembut “camera click”.
[Transition] Fade-out → muncul tombol replay di tengah layar.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌌 Background hitam, titik cahaya (foto mini) |
|                                              |
| “Thank you for being part of our story.”     |
|                                              |
| [Replay Button]                              |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Particle system:** foto-foto kecil jadi “bintang”.
- **Fade-out timeline:** GSAP + ScrollTrigger end sequence.
- **Replay:** Reset state scroll ke awal (GSAP `scrollTo` plugin).

---

## ⚙️ **Interactivity Map**

| Aksi | Efek Animasi |
| --- | --- |
| Scroll Down | Carousel berputar dan ganti foto otomatis |
| Hover Foto | Foto aktif mendapat highlight dan blur background |
| Klik Frame | Foto tampil lebih besar dengan deskripsi singkat |
| Klik RSVP | Modal muncul dengan efek fade + blur |
| Submit RSVP | Animasi frame berubah jadi bunga mekar |
| Klik Replay | Scroll kembali ke opening scene |

---

## 🎨 **Moodboard & Visual Guide**

| Elemen | Gaya |
| --- | --- |
| 🎞️ **Mood** | Nostalgic, cinematic, elegant |
| 🎨 **Warna** | Warm beige, soft gold, ivory, chocolate brown |
| 🖋️ **Font** | Cormorant Garamond (judul), Lora (body) |
| 💡 **Lighting** | Spotlight hangat + vignette lembut |
| 🎧 **Audio** | Piano & gitar akustik reverb |
| 🪩 **Motion Style** | Smooth, subtle, depth-focused |

---

## 🚀 **Tech & Performance Tips**

- Gunakan **low-poly scene** agar performa carousel tetap ringan (≤ 100 draw calls).
- **Preload semua foto** (blurDataURL) untuk transisi halus antar frame.
- Gunakan **PostProcessing (Bloom + DOF)** agar efek lighting cinematic tanpa berat.
- Buat **reusable hook `useCarouselRotation()`** untuk mengontrol rotasi via scroll.
- Gunakan **lazy import** untuk scene berat seperti `ProposalScene` dan `WeddingScene`.

---

## 💖 **Kesan Akhir**

> “Carousel of Memories” membuat pengunjung merasa seolah masuk ke dalam galeri kenangan pribadi pasangan.
> 
> 
> Setiap scroll menghadirkan momen hangat baru, dengan transisi lembut dan cahaya hangat yang membuat website terasa **hidup, personal, dan penuh cinta.**
> 
> Ini bukan sekadar undangan — ini adalah **film cinta interaktif dalam bentuk web.**
>