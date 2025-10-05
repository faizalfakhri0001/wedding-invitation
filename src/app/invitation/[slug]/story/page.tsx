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
    title: `${invitation.title} — Story`,
    description: `Story page scaffold for ${invitation.title}.`,
  };
}

export default function StoryPage({ params }: PageProps) {
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
          <h1 className="font-display text-5xl">Our Story</h1>
          <p className="mt-3 text-slate-600">Adapt this shared template to narrate {invitation.couple}&apos;s journey.</p>
        </div>
      }
    >
      <PageSection title="Timeline">
        <p>
          This dynamic fallback page ensures every new invitation automatically has a story structure ready to fill.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
