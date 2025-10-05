"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageSection } from "@components/shared/PageSection";

export function GuestRsvpSection() {
  return (
    <PageSection
      eyebrow="Scene V"
      title="Guest Wishes & RSVP"
      className="overflow-hidden bg-gradient-to-b from-white via-rose-50/70 to-rose-100/40"
    >
      <div className="relative space-y-8">
        <motion.p
          className="max-w-2xl text-lg text-slate-600"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your wishes make our love bloom brighter. Leave a heartfelt note or confirm your presence — each message
          will grow into a petal that accompanies us down the aisle.
        </motion.p>
        <motion.form
          className="grid gap-4 rounded-3xl border border-rose-100/70 bg-white/90 p-6 shadow-lg md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="space-y-2 text-sm font-medium text-slate-600">
            Full Name
            <input
              type="text"
              placeholder="Write your full name"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-slate-700 shadow-inner focus:border-rose-300 focus:outline-none"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-600">
            Email or Phone
            <input
              type="text"
              placeholder="Let us know how to reach you"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-slate-700 shadow-inner focus:border-rose-300 focus:outline-none"
            />
          </label>
          <label className="md:col-span-2">
            <span className="text-sm font-medium text-slate-600">Message or Wishes</span>
            <textarea
              rows={4}
              placeholder="Share a warm wish or a special memory"
              className="mt-2 w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-slate-700 shadow-inner focus:border-rose-300 focus:outline-none"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <motion.button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send with Love
            </motion.button>
            <p className="text-sm text-slate-500">
              After submitting, a tiny flower sprouts beside your name as a keepsake in our guest book.
            </p>
          </div>
        </motion.form>
        <motion.div
          className="flex flex-wrap items-center gap-3 text-sm text-rose-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100">🎧</span>
          Prefer to experience the bloom with music? Toggle the ambient soundtrack from the floating control or visit
          our <Link href="/invitation/blooming-love/story" className="font-semibold text-rose-500 underline">story page</Link>.
        </motion.div>
      </div>
    </PageSection>
  );
}
