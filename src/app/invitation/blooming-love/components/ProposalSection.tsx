"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const shimmerTransition = {
  repeat: Infinity,
  duration: 3.5,
  ease: "easeInOut",
};

const petalPositions = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: index * 0.12,
  duration: 4 + (index % 5) * 0.4,
}));

export function ProposalSection() {
  return (
    <PageSection
      eyebrow="Scene III"
      title="The Golden Bloom"
      className="overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50"
    >
      <div className="relative grid gap-10 md:grid-cols-[1.2fr_auto] md:items-center">
        <div className="space-y-6 text-lg text-slate-600">
          <p>
            When the petals opened in full grace, Faizal knelt beneath the golden glow. With a heart steady and
            sure, he asked Jannah to bloom with him forever.
          </p>
          <p className="text-base text-slate-500">
            The moment shimmered with warmth — soft piano swells, a halo of light, and gentle petals descending
            like whispered blessings.
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full bg-gradient-to-br from-amber-100 via-rose-50 to-white shadow-[0_20px_60px_-30px_rgba(251,191,36,0.8)]">
          <motion.div
            className="absolute inset-6 rounded-full border border-amber-200/70 bg-gradient-to-br from-white via-amber-50 to-rose-50"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-10 rounded-full border border-amber-200/60"
            animate={{ rotate: [0, 6, 0] }}
            transition={shimmerTransition}
          />
          <motion.div
            className="absolute inset-12 rounded-full border border-amber-200/40"
            animate={{ rotate: [0, -6, 0] }}
            transition={{ ...shimmerTransition, duration: 4.2 }}
          />
          <motion.div
            className="absolute inset-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-rose-300 text-4xl shadow-lg"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            💍
          </motion.div>
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            {petalPositions.map((petal, index) => (
              <motion.span
                key={index}
                className="absolute h-2 w-1 rounded-full bg-rose-200"
                style={{ left: petal.left, top: petal.top }}
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: petal.duration, delay: petal.delay }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
}
