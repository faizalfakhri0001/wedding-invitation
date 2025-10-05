"use client";

import { motion } from "framer-motion";
import { FloatingRings } from "./FloatingRings";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative flex h-screen min-h-[680px] items-center justify-center overflow-hidden bg-cinematic-gradient px-6"
    >
      <Skeleton className="absolute inset-0 bg-gradient-to-br from-white/60 via-pink-50/70 to-rose-100/60" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7),_transparent_60%)]" aria-hidden />
      <FloatingRings className="mix-blend-screen opacity-90" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center text-slate-900">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-rose-400/80"
        >
          The Journey of Us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-5xl font-semibold text-slate-900 drop-shadow-sm sm:text-6xl md:text-7xl"
        >
          Faizal &amp; Jannah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg"
        >
          The Journey of Us — October 12 2025
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.6em] text-slate-500"
        >
          Scroll to Begin
        </motion.span>
      </div>
    </motion.section>
  );
}
