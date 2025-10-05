import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Carousel of Memories — Story",
  description: "Placeholder story page for the Carousel of Memories invitation variant.",
};

export default function CarouselOfMemoriesStoryPage() {
  return (
    <BaseInvitationLayout
      theme="noir-gold"
      hero={
        <div className="mx-auto max-w-3xl text-center text-amber-100">
          <h1 className="font-display text-5xl">Storyline</h1>
          <p className="mt-3 text-amber-100/70">
            Customize this scene with deeper narrative beats, voiceover scripts, and photo curation for Luna &amp; Arga.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-amber-100/40 bg-slate-950/60 text-amber-100">
        <p className="text-amber-100/80">
          Replace this placeholder once the cinematic storytelling script and assets for Carousel of Memories are ready to be
          woven into the experience.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
