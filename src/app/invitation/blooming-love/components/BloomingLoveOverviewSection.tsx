"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

export function BloomingLoveOverviewSection() {
  return (
    <PageSection
      eyebrow="Scene I"
      title="A Botanical Story Unfolds"
      className="overflow-hidden bg-gradient-to-br from-white via-rose-50/70 to-emerald-50/60"
    >
      <div className="relative grid gap-10 md:grid-cols-[1.1fr_auto] md:items-center">
        <div className="space-y-6 text-lg text-slate-600">
          <p>
            Inspired by a gentle garden awakening at sunrise, Blooming Love guides guests through a cinematic
            scroll experience. Each section blossoms with handcrafted motion, gradients, and whispered
            storytelling.
          </p>
          <p className="text-base text-slate-500">
            ScrollTrigger sequences and framer-motion flourishes keep the journey immersive — from the first sprout
            to the grand bloom of vows.
          </p>
        </div>
        <motion.div
          className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-rose-100/70 bg-gradient-to-br from-rose-200 via-rose-100 to-emerald-50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className="absolute inset-10 rounded-full border border-white/60"
            animate={{ rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-400"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.75 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.span
            className="relative z-10 font-display text-xl text-white drop-shadow"
            animate={{ scale: [1, 1.04, 1], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            Bloom
          </motion.span>
        </motion.div>
      </div>
    </PageSection>
  );
}
