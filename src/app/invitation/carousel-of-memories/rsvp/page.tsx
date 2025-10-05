import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Carousel of Memories — RSVP",
  description: "Placeholder RSVP page for the Carousel of Memories invitation variant.",
};

export default function CarouselOfMemoriesRsvpPage() {
  return (
    <BaseInvitationLayout
      theme="noir-gold"
      hero={
        <div className="mx-auto max-w-3xl text-center text-amber-100">
          <h1 className="font-display text-5xl">RSVP</h1>
          <p className="mt-3 text-amber-100/70">
            Integrate the interactive RSVP experience and guestbook frames for Carousel of Memories here.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-amber-100/40 bg-slate-950/60 text-amber-100">
        <p className="text-amber-100/80">
          Replace this placeholder once the RSVP workflow, guestbook integration, and confirmation animations are implemented
          for Carousel of Memories.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
