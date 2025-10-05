import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Road to Forever — RSVP",
  description: "Placeholder RSVP page for the Road to Forever invitation variant.",
};

export default function RoadToForeverRsvpPage() {
  return (
    <BaseInvitationLayout
      theme="sunset-drive"
      hero={
        <div className="mx-auto max-w-3xl text-center text-slate-800">
          <h1 className="font-display text-5xl">RSVP</h1>
          <p className="mt-3 text-slate-500">
            Embed RSVP forms, guest passcodes, and seat selection with animations that match the horizontal road narrative.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-slate-200/60 bg-white/80">
        <p>
          Replace this placeholder with the production-ready RSVP flow. Coordinate success states with the finale confetti sequence and ensure timezone-aware schedule confirmations.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
