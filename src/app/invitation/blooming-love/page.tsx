import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Blooming Love",
  description: "Placeholder layout for the Blooming Love invitation variant.",
};

export default function BloomingLovePage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-3xl text-brand-500">Botanical Dream</p>
          <h1 className="font-display text-5xl">Blooming Love</h1>
          <p className="mt-4 text-slate-600">
            Tailor this page with custom illustrations, parallax backgrounds, or GSAP powered sequences.
          </p>
        </div>
      }
    >
      <PageSection title="Overview">
        <p>This page intentionally left as a scaffold. Populate it with bespoke Blooming Love content.</p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
