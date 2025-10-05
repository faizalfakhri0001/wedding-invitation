"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

interface ClosingSceneProps {
  gratitude: string;
  signature: string;
}

export function ClosingScene({ gratitude, signature }: ClosingSceneProps) {
  const [audioEnabled, setAudioEnabled] = useState(false);

  return (
    <PageSection
      title="See You On Our Special Day"
      eyebrow="Scene 6"
      className="relative overflow-hidden border-none bg-slate-950 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.15),_transparent_70%)]" />
      <div className="space-y-6 text-center">
        <p className="text-lg leading-relaxed text-slate-200">{gratitude}</p>
        <motion.button
          type="button"
          className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white/50 hover:bg-white/10"
          onClick={() => setAudioEnabled((value) => !value)}
          whileTap={{ scale: 0.96 }}
          whileHover={{ y: -2 }}
        >
          <span className="h-2 w-2 rounded-full bg-brand-400" />
          {audioEnabled ? "Pause Soundtrack" : "Play Soundtrack"}
        </motion.button>
        <AnimatePresence mode="wait">
          {audioEnabled ? (
            <motion.p
              key="audio-on"
              className="text-sm uppercase tracking-[0.3em] text-brand-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              Gentle piano theme is playing
            </motion.p>
          ) : (
            <motion.p
              key="audio-off"
              className="text-sm uppercase tracking-[0.3em] text-slate-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              Soundtrack muted — tap to relive the score
            </motion.p>
          )}
        </AnimatePresence>
        <div className="pt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">With love</p>
          <motion.p
            className="mt-3 font-script text-4xl text-brand-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            {signature}
          </motion.p>
        </div>
      </div>
    </PageSection>
  );
}
