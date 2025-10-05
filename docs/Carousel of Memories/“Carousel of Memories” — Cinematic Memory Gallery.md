# “Carousel of Memories” — Cinematic Memory Gallery

### 🧠 **Konsep Utama**

Website ini menampilkan **perjalanan cinta pasangan** melalui sebuah **“galeri kenangan interaktif”** —

bayangkan seperti museum pribadi yang penuh foto, video, dan potongan momen istimewa,

semuanya disusun dalam bentuk **carousel 3D yang dapat digerakkan oleh scroll** atau drag lembut.

Tujuan utama dari konsep ini adalah **menghadirkan nostalgia dan emosi hangat**,

di mana tamu undangan merasa seperti **menyaksikan film dokumenter cinta** yang hidup dan bisa dijelajahi sendiri.

Gaya visualnya bisa dibuat:

- 🖼️ **Cinematic Minimalist:** fokus pada lighting, depth, dan tone warm.
- 💫 **Dreamy Romantic:** penuh efek blur halus, bokeh, dan transisi slow.

---

## 🎬 **Struktur Halaman & Story Flow**

### 1️⃣ **Opening Scene – Enter the Memory Hall**

- **Visual:** Sebuah frame foto mengambang di ruang gelap, perlahan menyala.
- **Efek:** Cahaya berpendar lembut dan muncul tulisan “Welcome to Our Memories.”
- **Transisi:** Scroll → kamera bergerak maju ke dalam galeri 3D.

---

### 2️⃣ **Scene 1 – Our First Days**

- **Visual:** Carousel 3D foto pertama kali bertemu, chat pertama, tempat nongkrong.
- **Efek:** Scroll = carousel berputar 15° dan menampilkan foto baru.
- **Text:** “Where everything began…”
- **Musik:** Lembut, menimbulkan rasa nostalgia.

---

### 3️⃣ **Scene 2 – Adventures Together**

- **Visual:** Carousel menampilkan video singkat & foto perjalanan.
- **Efek:** Zoom cinematic dan lighting berubah mengikuti tone (siang → sore).
- **Text:** “Every adventure was a chapter we wrote together.”

---

### 4️⃣ **Scene 3 – The Proposal Moment**

- **Visual:** Frame foto proposal menjadi pusat carousel, semua foto lainnya blur.
- **Efek:** Fokus sinematik, kelopak bunga beterbangan, cahaya hangat.
- **Text:** “The day that changed everything.”

---

### 5️⃣ **Scene 4 – The Wedding Invitation**

- **Visual:** Carousel berhenti, fokus ke satu frame utama berisi undangan.
- **Efek:** Semua foto di belakang fade-out, muncul detail acara & RSVP.
- **Text:** “Now, a new story is about to begin.”

---

## ✨ **Style & Visual Direction**

| Elemen | Detail |
| --- | --- |
| 🎨 **Warna Dominan** | Soft gold, ivory, rose beige, deep brown |
| 🧭 **Tone & Mood** | Nostalgic, intimate, cinematic |
| 🖋️ **Typography** | Headings: *Cormorant Garamond* / *Playfair Display*Body: *Lora* / *Poppins* |
| 💡 **Lighting Style** | Vignette halus + depth blur + highlight pada foto aktif |
| 🎧 **Audio Experience** | Musik instrumental romantis dengan ambience reverb |
| 🎥 **Animasi Transisi** | Camera pan, slow zoom, fade, blur-to-focus cinematic |

---

## ⚙️ **Teknologi & Library yang Bisa Digunakan**

| Aspek | Tools / Library Rekomendasi |
| --- | --- |
| **Framework utama** | Next.js (App Router) |
| **3D Engine / Carousel** | Three.js + React Three Fiber (R3F) |
| **Scroll Animation** | GSAP + ScrollTrigger (sinkron rotasi carousel) |
| **Depth & Blur Effect** | PostProcessing (Depth of Field / Bloom) |
| **Audio Control** | Howler.js |
| **Form RSVP** | React Hook Form + Supabase / Firebase |
| **Image Optimizer** | Next/Image (blur preview + lazy load) |

---

## 💡 **Interactive Bonus Features**

1. 🖼️ **Scroll to Rotate:** Pengguna dapat memutar carousel dengan scroll atau drag lembut.
2. 🎞️ **Auto-Play Montage Mode:** Setelah beberapa detik idle, carousel bergerak otomatis dengan musik.
3. 💬 **Hover Caption:** Saat user hover foto, muncul kutipan momen seperti “Our first trip” atau “Her smile that day.”
4. 🕯️ **Ambient Mode:** Background redup, hanya frame aktif yang disorot.
5. 💌 **Guestbook Integration:** Tamu dapat menambahkan ucapan, lalu ucapan mereka muncul sebagai “mini frame” di carousel.

---

## 🧭 **Pengalaman Pengguna (User Flow)**

1. User membuka website → frame foto pertama menyala → teks sambutan muncul.
2. Scroll atau drag → kamera bergerak masuk ke ruang galeri.
3. Carousel berputar, menampilkan momen demi momen dengan transisi lembut.
4. Setelah mencapai frame terakhir → undangan pernikahan muncul dengan tombol RSVP.
5. RSVP → musik lembut berubah, muncul ucapan penutup “Thank you for being part of our story.”

---

## 💖 **Kesan Akhir**

> Website ini terasa seperti museum cinta pribadi yang hidup,
> 
> 
> penuh cahaya lembut, kenangan, dan emosi.
> 
> Tamu yang melihatnya tidak sekadar membaca undangan — mereka **merasakan perjalanan cinta** pasangan dari awal hingga saat ini.
> 
> Semua momen terekam dalam ruang visual yang tenang, sinematik, dan sangat romantis.
> 

---

## 🚀 **Performance & Implementation Notes**

- Gunakan **Three.js instancing** untuk carousel agar ringan di mobile.
- Simpan foto di folder `public/gallery` dan optimalkan dengan ukuran responsif (`srcset`).
- Gunakan **GSAP `ScrollTrigger + timeline`** untuk mengontrol rotasi carousel sesuai scroll progress.
- Gunakan **PostProcessing efek ringan (bloom + vignette)** untuk depth yang sinematik.
- Tambahkan **smoothing scroll (Lenis)** agar rotasi carousel terasa halus dan cinematic.

[**Storyboard & Wireframe Visual — “Carousel of Memories”**](Storyboard%20&%20Wireframe%20Visual%20%E2%80%94%20%E2%80%9CCarousel%20of%20Memor%20283bdc2a9218802f9a59c61142ad2abd.md)