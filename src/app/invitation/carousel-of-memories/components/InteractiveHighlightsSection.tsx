"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const features = [
  {
    title: "Scroll to Rotate",
    description: "Subtle easing keeps every scroll-linked rotation smooth and cinematic, replicating a steady camera rig.",
  },
  {
    title: "Hover Captions",
    description: "Each frame whispers the story behind the memory with elegant type that glows on hover.",
  },
  {
    title: "Auto-Play Montage",
    description: "Idle visitors witness a gentle autoplay sequence accompanied by a softly looping score.",
  },
  {
    title: "Guestbook Frames",
    description: "Messages from loved ones appear as miniature frames orbiting the carousel after an RSVP is submitted.",
  },
];

export function InteractiveHighlightsSection() {
  return (
    <PageSection
      eyebrow="Interactive"
      title="Immersive Touchpoints"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#15100d] via-[#110d0a] to-[#0d0907] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(244,196,134,0.22),_transparent_80%)]" />
      <p className="text-amber-100/80">
        Beyond the cinematic scroll, Carousel of Memories invites guests to linger and interact with the gallery. These touches
        transform the site into an intimate experience that feels curated just for them.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="rounded-2xl border border-amber-100/20 bg-slate-950/50 p-5"
            whileHover={{ y: -4, borderColor: "rgba(255, 214, 170, 0.6)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <h3 className="font-display text-xl text-amber-100">{feature.title}</h3>
            <p className="mt-2 text-sm text-amber-100/70">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
