"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const memories = [
  {
    title: "Our First Messages",
    description: "Glowing chat bubbles hover beside the carousel as the first panels rotate into view.",
  },
  {
    title: "Favorite Corner Cafe",
    description: "Warm ambient lighting deepens while gentle camera flashes mimic captured polaroids.",
  },
  {
    title: "The First Laugh",
    description: "Audio waveforms shimmer in sync with our laughter, softly animating above the frame.",
  },
];

export function FirstDaysCarouselSection() {
  return (
    <PageSection
      eyebrow="Scene 02"
      title="Carousel of Our First Days"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#271a16] via-[#1f1512] to-[#160f0c] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.2),_transparent_75%)]" />
      <p className="text-amber-100/80">
        Slow rotations reveal the sparks that started it all. Each scroll nudges the carousel by fifteen degrees, unveiling new
        frames bathed in honeyed gold and soft vignette shadows.
      </p>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ rotateY: -12, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-72 rounded-[2.5rem] border border-amber-200/20 bg-slate-950/40"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,222,173,0.2),_transparent_75%)]" />
          <div className="absolute inset-10 grid grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="rounded-2xl border border-amber-100/20 bg-gradient-to-b from-slate-900/80 via-slate-950/60 to-slate-950/90 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.7)]"
                style={{ transform: `rotateY(${index * 15 - 45}deg)` }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 p-4 text-center text-[0.65rem] uppercase tracking-[0.3em] text-amber-100/80">
                  <span className="text-lg">🖼️</span>
                  Memory {index + 1}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <ul className="space-y-4 text-sm text-amber-100/80">
          {memories.map((memory) => (
            <li key={memory.title} className="rounded-2xl border border-amber-200/20 bg-slate-950/40 p-4 shadow-inner">
              <h3 className="font-display text-xl text-amber-100">{memory.title}</h3>
              <p className="mt-2 text-amber-100/70">{memory.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
