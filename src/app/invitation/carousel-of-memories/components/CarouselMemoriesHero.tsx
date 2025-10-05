"use client";

import { motion } from "framer-motion";

const frameVariants = {
  initial: { opacity: 0, y: 24, rotateX: -12 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
};

const memoryFrames = [
  {
    id: "frame-1",
    label: "First hello",
    accent: "from-amber-200/60 via-amber-100/30 to-transparent",
    delay: 0.25,
  },
  {
    id: "frame-2",
    label: "Late night drives",
    accent: "from-rose-200/40 via-rose-100/20 to-transparent",
    delay: 0.4,
  },
  {
    id: "frame-3",
    label: "Proposal glow",
    accent: "from-yellow-200/40 via-amber-100/20 to-transparent",
    delay: 0.55,
  },
];

export function CarouselMemoriesHero() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-amber-100/60 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-900 px-12 pb-20 pt-24 text-slate-100 shadow-[0_40px_120px_-60px_rgba(12,10,9,0.8)]">
      <div className="absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(circle_at_center,_rgba(255,228,196,0.28),_transparent_65%)] blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-amber-200/80"
          >
            Enter the memory hall
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-amber-100 sm:text-5xl"
          >
            Welcome to Luna &amp; Arga&apos;s cinematic carousel of memories.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-xl text-lg text-amber-50/80"
          >
            Glide through the spotlighted frames, let the warm lighting guide your scroll, and relive the chapters that brought
            us to this wedding celebration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 text-sm text-amber-100/80"
          >
            <div className="rounded-full border border-amber-300/40 bg-slate-950/60 px-4 py-2 backdrop-blur">
              Cinematic Memory Gallery
            </div>
            <div className="flex items-center gap-2 rounded-full border border-amber-200/30 bg-slate-950/60 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
              Scroll to rotate the carousel
            </div>
          </motion.div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2.5rem] border border-amber-200/40 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,214,165,0.45),_transparent_70%)]" />
          <div className="absolute inset-6 rounded-[2rem] border border-amber-100/20 bg-slate-950/70 backdrop-blur">
            <div className="absolute inset-x-8 top-6 flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
                className="h-16 w-16 rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-200/50 via-amber-100/20 to-transparent shadow-inner"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="h-40 w-full rounded-2xl border border-amber-100/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
              />
            </div>
            <div className="absolute inset-x-10 bottom-10 flex flex-col items-center gap-3 text-center text-xs uppercase tracking-[0.3em] text-amber-100/70">
              <span className="text-[0.65rem]">Interactive Scroll</span>
              <span className="text-[0.65rem]">Cinematic Lighting</span>
            </div>
          </div>
          {memoryFrames.map((frame) => (
            <motion.div
              key={frame.id}
              variants={frameVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: frame.delay, ease: [0.33, 1, 0.68, 1] }}
              className="absolute left-1/2 top-1/2 h-28 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-amber-100/40 bg-slate-900/70 backdrop-blur"
              style={{ transform: "translate(-50%, -50%) rotateX(12deg)", boxShadow: "0 25px 60px -35px rgba(0,0,0,0.6)" }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${frame.accent}`} />
              <div className="absolute inset-2 rounded-[1.2rem] border border-amber-100/30 bg-slate-950/80" />
              <p className="absolute inset-x-3 bottom-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-amber-100/70 text-center">
                {frame.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 flex items-center justify-center gap-3 text-sm text-amber-100/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
        Scroll slowly to enter the gallery
      </motion.div>
    </div>
  );
}
