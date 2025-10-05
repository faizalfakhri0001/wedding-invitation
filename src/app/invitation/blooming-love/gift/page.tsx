import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Blooming Love — Gift",
  description: "Placeholder gift page for the Blooming Love invitation variant.",
};

export default function BloomingLoveGiftPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl">Gift Registry</h1>
          <p className="mt-3 text-slate-600">Share contribution details, QR codes, or drop-off instructions.</p>
        </div>
      }
    >
      <PageSection title="Content">
        <p>
          Replace this placeholder once the creative direction for Blooming Love&apos;s gift experience is ready.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
