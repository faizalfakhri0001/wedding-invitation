import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Carousel of Memories — Gallery",
  description: "Placeholder gallery page for the Carousel of Memories invitation variant.",
};

export default function CarouselOfMemoriesGalleryPage() {
  return (
    <BaseInvitationLayout
      theme="noir-gold"
      hero={
        <div className="mx-auto max-w-3xl text-center text-amber-100">
          <h1 className="font-display text-5xl">Gallery</h1>
          <p className="mt-3 text-amber-100/70">
            Insert Carousel of Memories imagery, motion renders, or interactive prototypes here.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-amber-100/40 bg-slate-950/60 text-amber-100">
        <p className="text-amber-100/80">
          Replace this placeholder when the curated gallery assets and cinematic renders for Carousel of Memories are ready to
          showcase.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
