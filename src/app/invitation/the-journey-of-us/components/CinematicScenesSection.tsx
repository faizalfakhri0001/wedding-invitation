"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";
import { cn } from "@lib/utils";

export type CinematicScene = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  accent?: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function CinematicScenesSection({ scenes }: { scenes: CinematicScene[] }) {
  return (
    <PageSection
      title="Chapters of Our Story"
      eyebrow="Cinematic Scroll"
      className="relative overflow-hidden border-none bg-gradient-to-br from-brand-50/80 via-white/90 to-white/60"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_55%)]" />
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {scenes.map((scene) => (
          <motion.article
            key={scene.id}
            variants={itemVariants}
            className={cn(
              "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur",
              scene.accent
            )}
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.22),transparent_65%)]" />
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-400">{scene.label}</span>
            <h3 className="font-display text-2xl text-slate-900">{scene.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{scene.description}</p>
            <ul className="mt-auto space-y-2 text-sm text-slate-500">
              {scene.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </PageSection>
  );
}
