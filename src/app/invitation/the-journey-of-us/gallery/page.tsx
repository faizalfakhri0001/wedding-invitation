import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description: "Gallery placeholder for the Journey of Us invitation.",
  };
}

export default function GalleryPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl">Gallery</h1>
          <p className="mt-2 text-slate-600">Showcase engagement photos, videos, or 3D scenes here.</p>
        </div>
      }
    >
      <PageSection title="Media Grid" eyebrow="Highlights">
        <p>Populate this section with Next.js Image components, lightboxes, or video embeds.</p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
