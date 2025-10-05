"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const memories = [
  {
    year: "2016",
    title: "First Encounter",
    description: "A simple hello over coffee became the seed of every story that followed.",
  },
  {
    year: "2019",
    title: "Building Our Garden",
    description: "Late-night talks, spontaneous road trips, and learning to grow side by side.",
  },
  {
    year: "2023",
    title: "Blooming Promise",
    description: "He whispered a promise under the stars — that their garden would always have room to bloom.",
  },
];

export function GardenMemoriesSection() {
  return (
    <PageSection
      eyebrow="Scene II"
      title="Garden of Memories"
      className="overflow-hidden bg-gradient-to-br from-rose-50/80 via-white to-emerald-50/70"
    >
      <div className="relative">
        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-rose-100/60 blur-3xl" />
        <p className="max-w-2xl text-lg text-slate-600">
          Each memory bloomed beautifully, just like the garden we built together. Scroll gently and watch as
          every petal reveals a moment that shaped Faizal &amp; Jannah&apos;s love.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-rose-100/60 bg-white/90 p-6 shadow-lg"
            >
              <motion.div
                className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 opacity-40"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: index * 0.4 }}
              />
              <motion.span
                className="text-xs uppercase tracking-[0.3em] text-emerald-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {memory.year}
              </motion.span>
              <h3 className="mt-3 font-display text-2xl text-slate-900">{memory.title}</h3>
              <p className="mt-3 text-slate-600">{memory.description}</p>
              <motion.div
                className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-emerald-200 via-rose-200 to-rose-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
