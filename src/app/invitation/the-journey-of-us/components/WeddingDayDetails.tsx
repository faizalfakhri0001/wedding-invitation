"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageSection } from "@components/shared/PageSection";

export type TimelineEvent = {
  time: string;
  title: string;
  description: string;
};

interface WeddingDayDetailsProps {
  eventDate: string;
  venue: string;
  timeline: TimelineEvent[];
}

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdownState(eventDate: string): CountdownState {
  const target = new Date(eventDate).getTime();
  const now = Date.now();
  const delta = Math.max(target - now, 0);

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  const seconds = Math.floor((delta / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function WeddingDayDetails({ eventDate, venue, timeline }: WeddingDayDetailsProps) {
  const [countdown, setCountdown] = useState<CountdownState>(() => getCountdownState(eventDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdownState(eventDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [eventDate]);

  const countdownBlocks = useMemo(
    () => [
      { label: "Days", value: countdown.days },
      { label: "Hours", value: countdown.hours },
      { label: "Minutes", value: countdown.minutes },
      { label: "Seconds", value: countdown.seconds },
    ],
    [countdown]
  );

  return (
    <PageSection title="The Wedding Day" eyebrow="Scene 5" className="relative overflow-hidden border-none bg-white/90">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(236,72,153,0.12)_0%,rgba(255,255,255,0.7)_45%,rgba(191,219,254,0.2)_100%)]" />
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Ceremony &amp; Celebration</p>
            <h3 className="mt-3 font-display text-3xl text-slate-900">{venue}</h3>
            <p className="mt-3 text-slate-600">
              Join us for a bright and joy-filled day as we exchange vows surrounded by those we love. Dress in soft neutrals to
              blend with the cinematic palette and arrive a little early to enjoy the prelude music.
            </p>
          </div>
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {timeline.map((item) => (
              <li key={item.time} className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-500">{item.time}</div>
                <div className="mt-2 font-semibold text-slate-800">{item.title}</div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="flex w-full flex-wrap justify-center gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 text-slate-800 shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {countdownBlocks.map((block) => (
              <div key={block.label} className="flex flex-col items-center gap-2">
                <span className="text-4xl font-semibold tabular-nums">{String(block.value).padStart(2, "0")}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{block.label}</span>
              </div>
            ))}
          </motion.div>
          <motion.a
            className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-brand-500/90 px-6 py-3 font-semibold uppercase tracking-[0.3em] text-white shadow-lg backdrop-blur transition hover:bg-brand-500"
            href="/invitation/the-journey-of-us/rsvp"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            RSVP
          </motion.a>
          <motion.p
            className="text-center text-xs uppercase tracking-[0.35em] text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Scroll for closing gratitude
          </motion.p>
        </div>
      </div>
    </PageSection>
  );
}
