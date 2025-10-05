"use client";

import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

const eventDetails = [
  {
    label: "Date",
    value: "Saturday, 17 August 2024",
    description: "Doors open at 3.30 PM | Ceremony begins at 4.00 PM",
  },
  {
    label: "Venue",
    value: "The Glasshouse Garden, Bandung",
    description: "Jl. Bunga Melati No. 8 — Surrounded by blooming archways",
  },
  {
    label: "Dress Code",
    value: "Soft Pastel Botanicals",
    description: "Think blush, sage, champagne, and gentle florals",
  },
];

export function WeddingBlossomSection() {
  return (
    <PageSection
      eyebrow="Scene IV"
      title="The Wedding Blossom"
      className="overflow-hidden bg-gradient-to-br from-rose-50/60 via-white to-emerald-50/60"
    >
      <div className="relative">
        <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6 text-lg text-slate-600">
            <p>
              As the garden blooms in harmony, we invite you to witness Faizal &amp; Jannah&apos;s vow to forever.
              Petals dance in the wind, music sways softly, and the air is filled with the scent of fresh love.
            </p>
            <p className="text-base text-slate-500">
              Your presence will complete the bloom — join us and become part of the floral symphony that celebrates
              their union.
            </p>
          </div>
          <div className="space-y-5">
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-rose-500">{detail.label}</p>
                <p className="mt-2 font-display text-2xl text-slate-900">{detail.value}</p>
                <p className="mt-2 text-sm text-slate-600">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4 rounded-full border border-rose-200/60 bg-white/80 px-6 py-3 text-sm text-rose-600 shadow-sm"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-lg">🌸</span>
          Please arrive 30 minutes before the ceremony to enjoy a guided stroll through the botanical installations.
        </motion.div>
      </div>
    </PageSection>
  );
}
