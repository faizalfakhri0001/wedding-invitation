"use client";

import { motion } from "framer-motion";

const petalVariants = {
  initial: { scale: 0.6, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

const petalTransition = {
  duration: 1.2,
  ease: [0.33, 1, 0.68, 1],
};

export function BloomingLoveHero() {
  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-rose-100/60 bg-gradient-to-b from-rose-50/80 via-white to-white px-10 pb-16 pt-20 shadow-xl">
      <div className="absolute inset-x-12 top-8 h-48 rounded-full bg-gradient-to-b from-rose-200/70 via-rose-100/30 to-transparent blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-6 text-left md:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.4em] text-rose-500"
          >
            The First Bloom
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-slate-900 md:text-5xl"
          >
            From a tiny seed, love began to grow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-slate-600 md:text-xl"
          >
            Follow the blooming journey of Faizal &amp; Jannah as every scroll unfolds a new petal of their story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 text-sm text-slate-600"
          >
            <div className="rounded-full border border-rose-200/70 bg-white px-4 py-2 shadow-sm">
              Botanical Dream Series
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Scroll to begin the bloom
            </div>
          </motion.div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-56 min-w-[14rem] overflow-hidden rounded-[2.5rem] border border-rose-100/70 bg-white/80 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50" />
          <div className="absolute inset-x-8 bottom-8 top-16">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="mx-auto w-1 rounded-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-700"
            />
            <motion.div
              variants={petalVariants}
              initial="initial"
              animate="animate"
              transition={{ ...petalTransition, delay: 0.6 }}
              className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full bg-emerald-200 blur-xl"
            />
            {["#f7c9d4", "#f9b8cf", "#fcd5e0", "#fcebf0"].map((color, index) => (
              <motion.div
                key={color}
                variants={petalVariants}
                initial="initial"
                animate="animate"
                transition={{ ...petalTransition, delay: 0.75 + index * 0.12 }}
                className="absolute left-1/2 top-0 origin-bottom"
                style={{ transform: `translate(-50%, 0) rotate(${index * 22.5}deg)` }}
              >
                <div
                  className="h-16 w-10 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 70%, ${color} 100%)`,
                  }}
                />
              </motion.div>
            ))}
            <motion.div
              variants={petalVariants}
              initial="initial"
              animate="animate"
              transition={{ ...petalTransition, delay: 1.2 }}
              className="absolute left-1/2 top-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 text-xs font-semibold text-white shadow-lg"
            >
              💍
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute inset-x-0 bottom-6 text-center text-sm text-slate-500"
          >
            Faizal &amp; Jannah
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 flex items-center justify-center gap-3 text-sm text-rose-500"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
        Scroll to explore the blooming journey
      </motion.div>
    </div>
  );
}
