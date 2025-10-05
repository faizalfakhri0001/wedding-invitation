import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Road to Forever — Gift",
  description: "Placeholder gift registry page for the Road to Forever invitation variant.",
};

export default function RoadToForeverGiftPage() {
  return (
    <BaseInvitationLayout
      theme="sunset-drive"
      hero={
        <div className="mx-auto max-w-3xl text-center text-slate-800">
          <h1 className="font-display text-5xl">Gift Registry</h1>
          <p className="mt-3 text-slate-500">
            Prepare space for curated registries, digital angpao, and personalised thank-you messages themed around the road-trip narrative.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-slate-200/60 bg-white/80">
        <p>
          Swap this placeholder with actual payment integrations, banking details, or charity links that suit Nara &amp; Dimas&apos; Road to Forever story.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
