"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { InvitationPreset } from "@config/invitation";

const ThreeBackdrop = dynamic(
  () => import("@components/animation/ThreeBackdrop").then((mod) => mod.ThreeBackdrop),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/80 via-white/50 to-transparent" />
    ),
  }
);

interface CinematicHeroProps {
  invitation: InvitationPreset;
  eventWindow: string;
}

export function CinematicHero({ invitation, eventWindow }: CinematicHeroProps) {
  return (
    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/80 px-10 py-16 text-center text-slate-900 shadow-2xl backdrop-blur">
      <ThreeBackdrop />
      <motion.span
        className="font-script text-3xl text-brand-500"
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        {invitation.theme}
      </motion.span>
      <motion.h1
        className="font-display text-5xl md:text-6xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {invitation.title}
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg text-slate-700"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {invitation.excerpt}
      </motion.p>
      <motion.div
        className="mt-4 flex flex-col items-center gap-2 text-sm uppercase tracking-[0.35em] text-slate-600"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <span>{invitation.couple}</span>
        <span>{eventWindow}</span>
        <span>{invitation.venue}</span>
      </motion.div>
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-brand-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <span className="rounded-full border border-brand-200/60 bg-white/80 px-4 py-2 shadow">Cinematic Scroll</span>
        <span className="rounded-full border border-brand-200/60 bg-white/80 px-4 py-2 shadow">Love Story</span>
        <span className="rounded-full border border-brand-200/60 bg-white/80 px-4 py-2 shadow">Audio Ready</span>
      </motion.div>
    </div>
  );
}
