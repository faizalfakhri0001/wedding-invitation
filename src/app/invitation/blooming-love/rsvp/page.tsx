import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Blooming Love — RSVP",
  description: "Placeholder RSVP page for the Blooming Love invitation variant.",
};

export default function BloomingLoveRsvpPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl">RSVP</h1>
          <p className="mt-3 text-slate-600">Connect React Hook Form and Zod to handle guest responses.</p>
        </div>
      }
    >
      <PageSection title="Content">
        <p>
          Replace this placeholder once the creative direction for Blooming Love&apos;s RSVP experience is ready.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
