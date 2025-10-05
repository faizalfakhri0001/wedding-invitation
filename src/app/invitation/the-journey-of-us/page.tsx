import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { invitationCatalog } from "@config/invitation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";
import { motion } from "framer-motion";
import { fadeChild, StaggerReveal } from "@components/animation/StaggerReveal";
import { formatDateRange } from "@lib/utils";

const ThreeBackdrop = dynamic(() => import("@components/animation/ThreeBackdrop").then((mod) => mod.ThreeBackdrop), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100 to-transparent" />,
});

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "the-journey-of-us");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: invitation?.title,
    description: invitation?.excerpt,
    openGraph: {
      title: invitation?.title,
      description: invitation?.excerpt,
      type: "website",
      url: `https://example.com/invitation/${invitation?.slug}`,
    },
  };
}

export default function TheJourneyOfUsPage() {
  if (!invitation) {
    return null;
  }

  const startDate = new Date(invitation.eventDate);
  const endDate = new Date(new Date(invitation.eventDate).getTime() + 3 * 60 * 60 * 1000);

  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="relative mx-auto max-w-3xl text-center text-slate-900">
          <ThreeBackdrop />
          <p className="font-script text-3xl text-brand-500">{invitation.theme}</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl">{invitation.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{invitation.excerpt}</p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-2 text-sm uppercase tracking-[0.35em] text-slate-600"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>{invitation.couple}</span>
            <span>{formatDateRange(startDate, endDate)}</span>
            <span>{invitation.venue}</span>
          </motion.div>
        </div>
      }
    >
      <PageSection title="Welcome" eyebrow="Opening">
        <p>
          We are thrilled to invite you to celebrate the union of {invitation.couple}. This invitation template showcases
          how a single codebase can deliver bespoke visual storytelling for each couple.
        </p>
      </PageSection>

      <PageSection title="Event Timeline" eyebrow="Story Highlights">
        <StaggerReveal>
          <motion.ul className="space-y-4">
            <motion.li variants={fadeChild} className="rounded-2xl bg-brand-50/60 p-4 text-sm text-slate-700">
              08:30 — Guests Arrival &amp; Welcome Drinks
            </motion.li>
            <motion.li variants={fadeChild} className="rounded-2xl bg-brand-50/60 p-4 text-sm text-slate-700">09:00 — Intimate Ceremony</motion.li>
            <motion.li variants={fadeChild} className="rounded-2xl bg-brand-50/60 p-4 text-sm text-slate-700">
              10:30 — Brunch Reception with Acoustic Session
            </motion.li>
          </motion.ul>
        </StaggerReveal>
      </PageSection>

      <PageSection title="RSVP" eyebrow="We would love to know">
        <p>
          This page will be powered by React Hook Form + Zod validation. Connect it with your preferred backend or use
          server actions for direct submissions.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
