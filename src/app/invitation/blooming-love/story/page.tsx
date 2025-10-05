import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Blooming Love — Story",
  description: "Placeholder story page for the Blooming Love invitation variant.",
};

export default function BloomingLoveStoryPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl">Storyline</h1>
          <p className="mt-3 text-slate-600">Customize this section with Blooming Love specific storytelling.</p>
        </div>
      }
    >
      <PageSection title="Content">
        <p>
          Replace this placeholder once the creative direction for Blooming Love&apos;s story experience is ready.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
