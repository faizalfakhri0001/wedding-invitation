"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const petals = [
  { left: "10%", top: "12%", delay: 0 },
  { left: "28%", top: "8%", delay: 0.2 },
  { left: "46%", top: "18%", delay: 0.4 },
  { left: "68%", top: "10%", delay: 0.6 },
  { left: "82%", top: "22%", delay: 0.8 },
  { left: "18%", top: "36%", delay: 1 },
  { left: "34%", top: "48%", delay: 1.2 },
  { left: "58%", top: "38%", delay: 1.4 },
  { left: "74%", top: "46%", delay: 1.6 },
  { left: "12%", top: "62%", delay: 1.8 },
  { left: "32%", top: "70%", delay: 2 },
  { left: "52%", top: "68%", delay: 2.2 },
  { left: "70%", top: "72%", delay: 2.4 },
  { left: "86%", top: "60%", delay: 2.6 },
];

export function ProposalSpotlightSection() {
  return (
    <PageSection
      eyebrow="Scene 04"
      title="The Proposal Spotlight"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#2a1b1b] via-[#1d1111] to-[#130a0a] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(255,196,196,0.25),_transparent_75%)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/30 bg-slate-950/50 p-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,216,190,0.45),_transparent_80%)]"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-amber-100/30 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/90">
            {petals.map((petal, index) => (
              <motion.span
                key={index}
                className="absolute text-xl opacity-70"
                style={{ left: petal.left, top: petal.top }}
                animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 6 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: petal.delay }}
              >
                🌸
              </motion.span>
            ))}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-10 rounded-[1.2rem] border border-amber-100/40 bg-slate-950/60 backdrop-blur"
            >
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-amber-100/80">
                <span className="text-3xl">💍</span>
                <p className="text-sm uppercase tracking-[0.35em]">She said yes</p>
              </div>
            </motion.div>
          </div>
          <div className="space-y-4 text-amber-100/80">
            <p className="text-amber-100/80">
              Under a canopy of falling petals, Luna whispered yes as golden light gathered around us. The carousel paused, all
              other frames softened into blur, and the soundtrack rose to hold that suspended second forever.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3">
                <span className="text-lg">✨</span>
                Depth-of-field pushes every other memory into bokeh while the proposal glows at center stage.
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3">
                <span className="text-lg">🎼</span>
                A gentle swell in the piano theme ushers in heartfelt narration of the question that changed everything.
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3">
                <span className="text-lg">🌹</span>
                Floating particles drift upward, mirroring the joyful rush of that moment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
