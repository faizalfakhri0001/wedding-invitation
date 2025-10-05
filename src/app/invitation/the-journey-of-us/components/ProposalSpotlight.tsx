"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

interface ProposalSpotlightProps {
  narrative: string;
  vows: string[];
}

export function ProposalSpotlight({ narrative, vows }: ProposalSpotlightProps) {
  return (
    <PageSection
      title="The Proposal"
      eyebrow="Scene 4"
      className="relative overflow-hidden border-none bg-slate-900 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.28),transparent_70%)]" />
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-200">{narrative}</p>
          <ul className="space-y-3 text-sm text-slate-300">
            {vows.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <motion.span
                  className="mt-1 inline-flex h-2.5 w-2.5 flex-none items-center justify-center rounded-full bg-brand-400/80"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_50px_rgba(236,72,153,0.35)]"
            initial={{ rotate: -12, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-40 w-40 rounded-full border border-white/20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.span
              className="absolute text-sm uppercase tracking-[0.4em] text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              She said Yes
            </motion.span>
            <motion.div
              className="absolute h-1 w-1 rounded-full bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
}
