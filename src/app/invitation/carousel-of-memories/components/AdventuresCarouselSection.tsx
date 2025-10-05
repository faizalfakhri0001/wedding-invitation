"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const adventureMoments = [
  {
    title: "Montage Mode",
    detail: "Video snippets glide across a reflective floor while ambient mountain hues wash over the gallery.",
  },
  {
    title: "Sound Layers",
    detail: "Birdsong, distant traffic, and laughter fade in and out as each panel reaches the spotlight.",
  },
  {
    title: "Depth & Zoom",
    detail: "Scroll-triggered camera pushes add cinematic depth so the carousel feels almost touchable.",
  },
];

export function AdventuresCarouselSection() {
  return (
    <PageSection
      eyebrow="Scene 03"
      title="Our Adventures Together"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#1b1f29] via-[#141923] to-[#0e111a] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(167,197,255,0.25),_transparent_70%)]" />
      <p className="text-amber-100/80">
        The carousel accelerates into montage mode — riverside picnics, mountain hikes, and city lights reflected beneath our
        feet. Each rotation gently shifts the lighting from sunrise gold to twilight blue, mirroring the adventures we shared.
      </p>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-amber-100/20 bg-slate-950/40"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,197,255,0.18),_transparent_80%)]" />
          <div className="relative h-72">
            <div className="absolute inset-8 rounded-3xl border border-amber-100/20 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-900/90" />
            <motion.div
              className="absolute inset-x-16 bottom-10 h-28 rounded-full bg-gradient-to-r from-amber-200/10 via-amber-100/5 to-amber-200/10 blur-2xl"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
              className="absolute inset-x-20 top-10 h-40 rounded-3xl border border-amber-100/30 bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-slate-950/80"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        <ul className="space-y-4 text-sm text-amber-100/80">
          {adventureMoments.map((moment) => (
            <li key={moment.title} className="rounded-2xl border border-amber-100/20 bg-slate-950/40 p-4 shadow-inner">
              <h3 className="font-display text-xl text-amber-100">{moment.title}</h3>
              <p className="mt-2 text-amber-100/70">{moment.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
