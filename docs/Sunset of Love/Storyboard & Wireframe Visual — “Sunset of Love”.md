# Storyboard & Wireframe Visual — “Sunset of Love”

### 🧩 **Structure Overview (Next.js App Router)**

```
/src/app/(main)/invitation
  ├─ page.tsx                        → Main cinematic scroll
  ├─ components/
  │   ├─ OpeningScene.tsx
  │   ├─ EncounterScene.tsx
  │   ├─ GrowthScene.tsx
  │   ├─ PromiseScene.tsx
  │   ├─ NightScene.tsx
  │   ├─ RsvpScene.tsx
  │   └─ MusicController.tsx
  ├─ styles/
  │   ├─ parallax.css                → Layer depth, scroll smooth
  │   ├─ transitions.css
  │   └─ typography.css
  ├─ assets/
  │   ├─ images/
  │   ├─ lottie/
  │   └─ music/

```

---

## 🌞 **Scene 1 — Opening Scene (Golden Sky Intro)**

### 🎞️ **Storyboard**

```
[Visual] Langit berwarna keemasan dengan awan lembut bergerak lambat.
[Motion] Matahari bersinar lembut di tengah atas layar.
[Text] “Every sunset tells a story... ours began with a glance.”
[Audio] Petikan gitar akustik mulai terdengar.
[Transition] Scroll ke bawah membuat matahari perlahan turun, awan bergerak lebih cepat.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| ☁️     ☁️     🌞 (matahari)     ☁️        |
|                                            |
|     “Every sunset tells a story...”        |
|     [Faizal & Jannah]                      |
|                                            |
|            ↓ Scroll to begin               |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP ScrollTrigger:** animasi posisi matahari (translateY) dan kecepatan awan.
- **Gradient background morph:** dari biru muda → gold.
- **Parallax depth:** awan depan lebih cepat dari awan belakang.
- **Framer Motion:** teks fade-up dengan delay lembut.

---

## 🌇 **Scene 2 — The Encounter**

### 🎞️ **Storyboard**

```
[Visual] Background kota kecil / taman, langit jingga keemasan.
[Motion] Dua siluet karakter berjalan dari sisi berlawanan.
[Text] “When paths crossed, hearts listened.”
[Effect] Lens flare muncul di tengah mereka saat berhenti.
[Transition] Scroll ke bawah → matahari makin dekat horizon.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌇 Horizon lembut, gedung & pohon (parallax) |
|                                              |
| 🚶‍♂️   💫 flare   🚶‍♀️                     |
|                                              |
| “When paths crossed, hearts listened.”       |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Parallax Layer:**
    - Layer 1: Langit
    - Layer 2: Gedung, pepohonan
    - Layer 3: Jalan & karakter
- **GSAP Path Animation:** karakter bergerak & berhenti sinkron.
- **Lens flare:** Lottie animation triggered saat mereka berhenti.
- **Audio cue:** Suara lembut angin & burung sore.

---

## 🌤️ **Scene 3 — Growing Together**

### 🎞️ **Storyboard**

```
[Visual] Latar taman penuh bunga bermekaran, warna langit peach-pink.
[Motion] Scroll = bunga bermekaran bertahap, foto pasangan fade-in.
[Text] “With every day, our story bloomed beautifully.”
[Transition] Langit berubah dari peach → coral, awan makin sedikit.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌸🌼🌷   Background taman (multi-layer)      |
|                                            |
| [Foto pasangan fade-in di tengah]          |
| “Our story bloomed beautifully.”           |
|                                            |
| Kelopak bunga terbang halus (particle)     |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Scroll-based bloom animation:** tiap scroll trigger = bunga baru muncul.
- **Framer Motion:** fade-in foto & teks dengan delay bertingkat.
- **Canvas particle:** kelopak jatuh dengan arah acak (Math.random).
- **Gradient morph:** background dari coral → pink muda.

---

## 🌅 **Scene 4 — Promise at Sunset**

### 🎞️ **Storyboard**

```
[Visual] Matahari besar di horizon, warna langit jingga pekat.
[Motion] Kamera cinematic zoom mendekat ke pasangan bergandengan tangan.
[Text] “And under this sunset, we made a promise.”
[Effect] Refleksi air di bawah, lampu kota mulai menyala.
[Transition] Langit berubah dari oranye → ungu → biru malam.

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌇 Matahari besar di tengah horizon        |
| 👫 Siluet pasangan bergandengan tangan     |
|                                            |
| Refleksi air (mirror gradient)             |
| “And under this sunset, we made a promise.”|
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP timeline sequence:**
    1. Matahari tenggelam
    2. Gradient background berubah
    3. Lampu kota fade-in
- **CSS gradient reflection:** simulate water mirror.
- **Optional:** Three.js soft glow di sekitar matahari.
- **Sound:** Orkestra lembut dengan crescendo.

---

## 🌌 **Scene 5 — The Wedding Night**

### 🎞️ **Storyboard**

```
[Visual] Langit berubah menjadi malam berbintang, warna biru tua.
[Motion] Bintang-bintang muncul satu per satu, kunang-kunang berterbangan.
[Text] “Our forever begins tonight.”
[Interaction] Hover kunang-kunang → muncul teks kecil “love”.
[Transition] Scroll → kamera naik ke langit (parallax upward).

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🌌 Langit malam penuh bintang              |
| 💫 Particle kunang-kunang (canvas)         |
| 👫 Pasangan berdiri di bawah pohon         |
| “Our forever begins tonight.”              |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Particle System:** Fireflies dengan GSAP motion path acak.
- **Canvas / Lottie shooting star.**
- **Hover state:** text tooltip muncul kecil di dekat kunang-kunang.
- **Audio:** ambient malam (angin lembut, jangkrik).
- **ScrollTrigger:** efek kamera naik (parallax translateY).

---

## 💌 **Scene 6 — RSVP & Gratitude**

### 🎞️ **Storyboard**

```
[Visual] Langit malam tenang, lampion mulai terbang satu per satu.
[Motion] Scroll memunculkan lebih banyak lampion ke langit.
[Text] “Join us as our story continues under the stars.”
[Content] RSVP button, Map link, dan Guestbook input.
[Transition] Fade-out musik → muncul pesan “Thank you for sharing our love.”

```

### 🧱 **Wireframe (Layout)**

```
--------------------------------------------
| 🎋 Lampion naik (Lottie animation)         |
|                                            |
| “Join us as our story continues...”        |
| [RSVP Button]   [Map Button]               |
| 💬 Guest Wishes Input                      |
| “Thank you for sharing our love.”          |
--------------------------------------------

```

### 🎨 **Detail Teknis**

- **Scroll-triggered lampion spawn:** tiap scroll = 2–3 lampion naik.
- **Framer Motion:** animasi bounce lembut pada tombol RSVP/Map.
- **Modal RSVP:** animasi fade-in + blur background.
- **Firestore / Supabase:** simpan pesan ucapan tamu.
- **Ending effect:** fade-out seluruh layer dengan musik memudar.

---

## ⚙️ **Interactivity Map**

| Aksi | Efek Animasi |
| --- | --- |
| Scroll Down | Menggerakkan matahari & mengganti warna langit |
| Hover pada Bunga / Kunang-kunang | Efek glow & tooltip text |
| Klik RSVP | Modal form muncul dengan blur lembut |
| Submit Guest Wish | Animasi kertas / lampion terbang |
| Toggle Musik | Ikon berubah + fade volume halus |

---

## 🎨 **Moodboard & Visual Guide**

| Elemen | Gaya |
| --- | --- |
| 🎞️ **Mood** | Cinematic, romantic, tranquil |
| 🎨 **Warna** | Sky blue → gold → peach → coral → violet → indigo |
| 🖋️ **Font** | Cormorant Garamond (judul) + Poppins (body) |
| 🌄 **Lighting** | Gradient transition, lens flare, glow reflection |
| 🎧 **Audio** | Gitar akustik → orkestra ringan → ambient malam |
| 🕊️ **Motion** | Smooth, slow scroll-triggered transitions |

---

## 🚀 **Tech & Performance Tips**

- Gunakan **GSAP ScrollTrigger timeline** agar tiap scene sinkron dengan pergerakan user.
- **Preload image & gradient layer** agar transisi langit halus tanpa flicker.
- Gunakan **lazy load Three.js / particle** hanya di scene yang membutuhkannya (Promise & Night).
- **Optimize background gradient via CSS linear-interpolation** bukan video.
- Tambahkan **Lenis.js** untuk scroll halus dan cinematic timing.

---

## 💖 **Kesan Akhir**

> Website ini menghadirkan pengalaman romantis yang imersif, di mana setiap scroll terasa seperti menyaksikan matahari terbenam bersama pasangan.
> 
> 
> Warna langit, musik, dan animasi bergerak selaras — menciptakan perasaan hangat, nostalgic, dan damai, layaknya kisah cinta yang berakhir di bawah langit berbintang.
>