"use client";

import { motion } from "framer-motion";

const carVariants = {
  initial: { x: -40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const sunVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export function RoadToForeverHero() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-orange-200/40 bg-gradient-to-b from-sky-100/70 via-white to-orange-50 px-10 pb-16 pt-20 text-slate-800 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.55)]">
      <div className="absolute inset-x-0 -top-40 h-72 bg-[radial-gradient(circle_at_center,_rgba(253,186,116,0.35),_transparent_70%)] blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div className="space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-orange-500"
          >
            A cinematic road-trip invitation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl"
          >
            Road to Forever follows Nara &amp; Dimas through every mile that led to “I do”.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-xl text-lg text-slate-600"
          >
            Scroll horizontally to steer their vintage convertible across skylines, mountain passes, and the warm glow of their proposal.
            Each checkpoint reveals immersive storytelling, layered parallax, and lovingly curated wedding details.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 text-sm"
          >
            <div className="rounded-full border border-orange-300/50 bg-white/70 px-4 py-2 text-orange-600 backdrop-blur">Scroll to ignite the journey</div>
            <div className="flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-50/80 px-4 py-2 text-sky-600 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-ping" />
              MotionPath storytelling
            </div>
          </motion.div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2.75rem] border border-orange-200/40 bg-gradient-to-b from-sky-100 via-white to-orange-50 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
          <motion.div
            variants={sunVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-200 via-orange-300 to-amber-300 blur-md"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_70%)]" />
          <div className="absolute inset-x-10 bottom-12 flex flex-col gap-4">
            <div className="relative h-40 overflow-hidden rounded-full border border-slate-200 bg-white/70 shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(56,189,248,0.15)_0%,_rgba(253,186,116,0.15)_100%)]" />
              <motion.div
                variants={carVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.1, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-orange-300/70 bg-orange-100 px-5 py-2 text-orange-700 shadow-md"
              >
                <span className="text-lg">🚗</span>
                <span className="text-xs uppercase tracking-[0.3em]">Road to Forever</span>
              </motion.div>
              <div className="absolute bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-sky-200 via-orange-200 to-rose-200 opacity-80" />
            </div>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">Interactive Scroll · Ambient Audio · RSVP Reveal</p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16 flex items-center justify-center gap-3 text-sm text-slate-500"
      >
        <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          ↠
        </motion.span>
        Swipe or scroll right to join the drive
      </motion.div>
    </div>
  );
}
