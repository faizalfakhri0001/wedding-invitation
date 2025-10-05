import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Carousel of Memories — Gift",
  description: "Placeholder gift registry page for the Carousel of Memories invitation variant.",
};

export default function CarouselOfMemoriesGiftPage() {
  return (
    <BaseInvitationLayout
      theme="noir-gold"
      hero={
        <div className="mx-auto max-w-3xl text-center text-amber-100">
          <h1 className="font-display text-5xl">Gifts &amp; Blessings</h1>
          <p className="mt-3 text-amber-100/70">
            Outline registry details or heartfelt notes for Carousel of Memories guests here.
          </p>
        </div>
      }
    >
      <PageSection title="Content" className="border-amber-100/40 bg-slate-950/60 text-amber-100">
        <p className="text-amber-100/80">
          Replace this placeholder with the preferred gift registry, banking details, or blessings instructions tailored to the
          Carousel of Memories concept.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
