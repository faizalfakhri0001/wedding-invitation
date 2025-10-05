# Storyboard & Wireframe Visual — “Road to Forever”

### 🧩 **Structure Overview (Next.js App Router)**

```
/src/app/(main)/invitation
  ├─ page.tsx                        → Main horizontal scroll timeline
  ├─ components/
  │   ├─ OpeningScene.tsx
  │   ├─ MeetScene.tsx
  │   ├─ AdventureScene.tsx
  │   ├─ ProposalScene.tsx
  │   ├─ DestinationScene.tsx
  │   └─ MusicController.tsx
  ├─ styles/
  │   ├─ journey.css                 → Road path & parallax layers
  │   ├─ vehicles.css                → Car/motion animation
  │   └─ typography.css
  ├─ assets/
  │   ├─ images/road/, /sky/, /city/
  │   ├─ lottie/
  │   └─ audio/

```

---

## 🌅 **Scene 1 — Opening Scene (The Journey Begins)**

### 🎞️ **Storyboard**

```
[Visual] Jalan panjang di bawah langit pagi, mobil kecil diam di sisi kiri layar.
[Motion] Awan bergerak pelan, matahari naik dari horizon.
[Text] “Every love story starts with a first ride.”
[Audio] Musik road trip lembut + efek mesin mobil menyala.
[Transition] Scroll → mobil mulai bergerak ke kanan perlahan.

```

### 🧱 **Wireframe (Layout)**

```
---------------------------------------------------------------
| ☁️        🌞 (matahari naik)         ☁️                      |
|                                                             |
|   🚗 (mobil kecil di kiri)  🛣️ jalan memanjang ke kanan     |
|                                                             |
|   “Every love story starts with a first ride.”              |
|                                                             |
|                  → Scroll to start journey →                |
---------------------------------------------------------------

```

### 🎨 **Detail Teknis**

- **Horizontal scroll** dengan `ScrollTrigger` + `pin: true`.
- **MotionPath animation:** mobil mengikuti jalur SVG jalan.
- **Gradient background:** biru muda → keemasan.
- **Sound effect:** `Howler.js` → mesin mobil + musik lembut.

---

## 🏙️ **Scene 2 — Where We Met**

### 🎞️ **Storyboard**

```
[Visual] Mobil melewati kota kecil, gedung dan pepohonan bergaya flat illustration.
[Motion] Mobil terus berjalan, kamera pan perlahan mengikuti dari samping.
[Text] “We met here, where our paths first crossed.”
[Effect] Papan jalan bertuliskan “Our First Stop”.
[Transition] Scroll → mobil melewati gerbang kecil menuju scene berikutnya.

```

### 🧱 **Wireframe (Layout)**

```
---------------------------------------------------------------
| 🌇 Gedung kota dan pepohonan bergerak parallax               |
|                                                             |
|   🛣️ Jalan horizontal dengan rambu “Our First Stop”          |
|                                                             |
|   🚗 → mobil bergerak dari kiri ke kanan                     |
|                                                             |
|   “We met here, where our paths first crossed.”              |
---------------------------------------------------------------

```

### 🎨 **Detail Teknis**

- **Parallax layering:** langit, gedung, jalan, dan mobil di depth berbeda.
- **GSAP timeline:** sinkronisasi pergerakan mobil & teks fade-in.
- **Interactive signboard:** hover = teks bersinar.
- **Audio:** suara kota samar (burung, angin lembut).

---

## ⛰️ **Scene 3 — Our Adventures**

### 🎞️ **Storyboard**

```
[Visual] Mobil melewati pegunungan dan danau berkilau, suasana sore hangat.
[Motion] Jalan naik-turun, efek tilt lembut saat mobil mendaki.
[Text] “Together, we explored miles and memories.”
[Effect] Kamera sedikit bergetar lembut mengikuti guncangan jalan.
[Transition] Scroll → mobil masuk ke terowongan gelap → fade ke adegan sunset.

```

### 🧱 **Wireframe (Layout)**

```
---------------------------------------------------------------
| ⛰️ Gunung tinggi di background (layer 1)                     |
| 🌲 Pohon & danau (layer 2)                                   |
| 🛣️ Jalan berkelok (layer 3)                                 |
|                                                             |
| 🚗 Mobil naik-turun mengikuti jalur SVG                      |
|                                                             |
| “Together, we explored miles and memories.”                 |
---------------------------------------------------------------

```

### 🎨 **Detail Teknis**

- **MotionPathPlugin:** mobil mengikuti path SVG bergelombang.
- **ScrollTrigger scrub:** sinkronisasi kecepatan scroll & kecepatan mobil.
- **Tilt effect:** mobil sedikit miring saat mendaki/turun.
- **Lighting shift:** langit berubah dari oranye → keemasan → ungu lembut.

---

## 🌇 **Scene 4 — The Proposal Stop**

### 🎞️ **Storyboard**

```
[Visual] Mobil berhenti di tempat indah (pantai / taman / bukit).
[Motion] Sunset di belakang mereka, cahaya redup lembut.
[Text] “And at this stop, forever began.”
[Effect] Siluet pasangan di samping mobil, confetti halus jatuh.
[Transition] Scroll → kamera zoom out → terlihat rute menuju venue pernikahan.

```

### 🧱 **Wireframe (Layout)**

```
---------------------------------------------------------------
| 🌅 Background sunset & langit jingga                         |
|                                                             |
| 🚗 Mobil berhenti di tengah layar                           |
| 👫 Siluet pasangan berdiri di samping mobil                  |
| ✨ Cahaya matahari dari belakang                             |
|                                                             |
| “And at this stop, forever began.”                          |
---------------------------------------------------------------

```

### 🎨 **Detail Teknis**

- **GSAP fade sequence:** sunset fade-in + confetti particle.
- **Lighting shader (optional Three.js):** untuk efek glow matahari.
- **ScrollTrigger pin:** freeze scene sejenak sebelum transisi.
- **Audio:** romantis lembut, piano & suara ombak halus.

---

## 💒 **Scene 5 — The Wedding Destination**

### 🎞️ **Storyboard**

```
[Visual] Mobil tiba di lokasi pernikahan: taman atau venue penuh bunga.
[Motion] Confetti dan kelopak beterbangan di udara.
[Content] Detail acara, RSVP button, dan map lokasi.
[Text] “Welcome to our forever.”
[Effect] Mobil berhenti, lampu depan padam, layar fade lembut.
[Audio] Musik bahagia dan penuh cinta.

```

### 🧱 **Wireframe (Layout)**

```
---------------------------------------------------------------
| 🎉 Confetti & bunga beterbangan                             |
| 🌺 Venue pernikahan di background                           |
| 🛣️ Jalan berakhir di depan gerbang “Our Wedding”             |
| 🚗 Mobil berhenti di depan venue                             |
|                                                             |
| “Welcome to our forever.”                                   |
| [Tanggal] [Waktu] [Lokasi] [RSVP Button]                    |
---------------------------------------------------------------

```

### 🎨 **Detail Teknis**

- **ScrollTrigger final:** memunculkan detail acara satu per satu.
- **Framer Motion bounce:** RSVP & map button muncul dengan lembut.
- **Confetti particle (Canvas):** sinkron dengan akhir musik.
- **Optional mini-map animation:** path dari awal → ke venue muncul.

---

## ⚙️ **Interactivity Map**

| Aksi | Efek Animasi |
| --- | --- |
| Scroll / Swipe Right | Mobil bergerak ke checkpoint berikutnya |
| Hover pada Tanda Jalan | Teks bercahaya / muncul popup momen |
| Klik RSVP | Form muncul dengan animasi pop-up |
| Submit RSVP | Mobil “berhenti” di venue + confetti muncul |
| Toggle Musik | Tombol audio on/off dengan fade in/out |

---

## 🎨 **Moodboard & Visual Guide**

| Elemen | Gaya |
| --- | --- |
| 🎞️ **Mood** | Ceria, nostalgic, cinematic |
| 🎨 **Warna** | Pastel beige, dusty orange, mint green, warm blue |
| 🖋️ **Font** | Montserrat SemiBold (judul), Poppins (body) |
| 🌄 **Lighting** | Gradient dari pagi → sore → malam |
| 🎧 **Audio** | Musik road-trip mellow & ambient nature |
| 🚘 **Motion Style** | Smooth, playful, parallax-based camera |

---

## 🚀 **Tech & Performance Tips**

- Gunakan **SVG vector** untuk kendaraan dan jalur jalan agar ringan.
- Implementasikan **horizontal scroll dengan `ScrollTrigger + containerAnimation`**.
- Buat setiap scene sebagai **section yang di-pin** selama animasi berlangsung.
- Gunakan **GSAP `MotionPathPlugin`** untuk mengatur posisi mobil di jalur SVG.
- **Optimalkan gambar lanskap** menggunakan `next/image` dengan kualitas 80–90%.

---

## 💖 **Kesan Akhir**

> “Road to Forever” menghadirkan pengalaman seperti menonton film perjalanan cinta interaktif —
> 
> 
> Setiap scroll membawa pengguna semakin dekat ke “tujuan akhir” cinta sejati.
> 
> Perpaduan animasi, warna hangat, dan musik lembut membuat website ini terasa **hidup, penuh makna, dan memorable** bagi siapa pun yang melihatnya.
>