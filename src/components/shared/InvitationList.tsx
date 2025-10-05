/** @format */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { InvitationPreset } from "@config/invitation";

interface InvitationListProps {
  invitations: InvitationPreset[];
}

export function InvitationList({ invitations }: InvitationListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {invitations.map((invitation) => (
        <motion.div
          key={invitation.slug}
          className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">
                {invitation.theme}
              </p>
              <h3 className="mt-2 font-display text-2xl">{invitation.title}</h3>
              <p className="mt-3 text-sm text-slate-600">
                {invitation.excerpt}
              </p>
            </div>
            <span className="font-script text-3xl text-brand-400">
              {invitation.couple}
            </span>
          </div>
          <Link
            href={`/invitation/${invitation.slug}`}
            className="mt-6 inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-600"
          >
            Explore
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
