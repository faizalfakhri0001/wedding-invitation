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
    title: `${invitation.title} — Gift`,
    description: `Gift page scaffold for ${invitation.title}.`,
  };
}

export default function GiftPage({ params }: PageProps) {
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
          <h1 className="font-display text-5xl">Send a Gift</h1>
          <p className="mt-3 text-slate-600">Provide registry links, bank transfers, or shipping details.</p>
        </div>
      }
    >
      <PageSection title="Gift Details">
        <p>
          Each invitation can tailor this section to match its tone—use cards, accordions, or 3D interactive elements.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
