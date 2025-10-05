import type { Metadata } from "next";
import Link from "next/link";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";
import { invitationCatalog } from "@config/invitation";

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "the-journey-of-us");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${invitation?.title ?? "Our"} Story`,
    description: "Story timeline placeholder page for the Journey of Us invitation.",
  };
}

export default function StoryPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl">Our Story</h1>
          <p className="mt-3 text-slate-600">
            This page demonstrates how individual invitation routes can extend the base layout while using shared
            components.
          </p>
        </div>
      }
    >
      <PageSection title="Timeline" eyebrow="Chapters">
        <p>Replace this content with the couple&apos;s story timeline using bespoke visuals or animations.</p>
      </PageSection>
      <PageSection title="Back to Invitation">
        <Link className="text-brand-500" href="/invitation/the-journey-of-us">
          Return to cover page
        </Link>
      </PageSection>
    </BaseInvitationLayout>
  );
}
