import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gift",
    description: "Gift registry placeholder for the Journey of Us invitation.",
  };
}

export default function GiftPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl">Send Your Love</h1>
          <p className="mt-2 text-slate-600">Share bank details, e-wallet addresses, or shipping instructions.</p>
        </div>
      }
    >
      <PageSection title="Gift Options" eyebrow="With Gratitude">
        <p>
          List registry links, QR codes, or postal addresses. This shared template ensures consistent styling while
          allowing each invitation to inject bespoke content.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
