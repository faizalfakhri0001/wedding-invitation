import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Road to Forever — Gallery",
  description: "Placeholder gallery page for the Road to Forever invitation variant.",
};

export default function RoadToForeverGalleryPage() {
  return (
    <BaseInvitationLayout
      theme="sunset-drive"
      hero={
        <div className="mx-auto max-w-3xl text-center text-slate-800">
          <h1 className="font-display text-5xl">Gallery</h1>
          <p className="mt-3 text-slate-500">
            Curate cinemagraphs, cityscapes, and travel polaroids from Nara &amp; Dimas&apos; journey to enrich the Road to Forever experience.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-orange-200/60 bg-white/80">
        <p>
          Replace this placeholder once the creative assets, looping background videos, and interactive gallery hotspots are ready to be integrated.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
