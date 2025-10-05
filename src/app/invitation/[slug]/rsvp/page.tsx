import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";
import { getInvitationBySlug } from "@lib/data/invitations";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) {
    return { title: "Invitation not found" };
  }

  return {
    title: `${invitation.title} — RSVP`,
    description: `RSVP page scaffold for ${invitation.title}.`,
  };
}

export default function RsvpPage({ params }: PageProps) {
  const { slug } = params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) {
    notFound();
  }

  return (
    <BaseInvitationLayout
      theme={invitation.theme.toLowerCase().replace(/\s+/g, "-")}
      hero={
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl">RSVP</h1>
          <p className="mt-3 text-slate-600">Capture guest responses with shared form building blocks.</p>
        </div>
      }
    >
      <PageSection title="Form">
        <p>
          Compose forms with React Hook Form, Zod schemas, and shadcn/ui inputs. Hook up to API routes or server
          actions.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
