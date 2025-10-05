"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const gratitudeNotes = [
  "Thank you for stepping into our memory hall.",
  "Your presence turns every frame into something brighter.",
  "We cannot wait to celebrate the next chapter with you.",
];

export function ClosingSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 06"
      title="Closing Scene & Gratitude"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#090b12] via-[#07060c] to-[#05040a] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(209,213,255,0.18),_transparent_80%)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/20 bg-slate-950/50 p-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,245,255,0.2),_transparent_80%)]"
        />
        <motion.div
          className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-amber-100/30 bg-slate-950/80"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        >
          <span className="text-2xl">⭐</span>
        </motion.div>
        <div className="relative mt-8 space-y-4 text-amber-100/80">
          {gratitudeNotes.map((note) => (
            <p key={note} className="text-sm text-amber-100/80">
              {note}
            </p>
          ))}
        </div>
        <button className="relative mt-10 inline-flex items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-200/30 via-amber-100/10 to-amber-200/30 px-6 py-3 text-sm font-medium text-amber-50 transition hover:from-amber-200/50 hover:to-amber-200/50">
          Replay the Gallery
        </button>
      </div>
    </PageSection>
  );
}
