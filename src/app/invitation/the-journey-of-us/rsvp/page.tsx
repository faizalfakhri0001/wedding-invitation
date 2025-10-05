import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "RSVP",
    description: "RSVP placeholder for the Journey of Us invitation.",
  };
}

export default function RsvpPage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl">RSVP</h1>
          <p className="mt-2 text-slate-600">This form will be powered by React Hook Form &amp; Zod.</p>
        </div>
      }
    >
      <PageSection title="Form" eyebrow="Your Presence">
        <p>
          Implement the RSVP form using <code>react-hook-form</code> and <code>zod</code> schemas. Submit via API routes,
          server actions, or third-party services.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
