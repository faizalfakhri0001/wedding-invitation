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
    title: `${invitation.title} — Gallery`,
    description: `Gallery page scaffold for ${invitation.title}.`,
  };
}

export default function GalleryPage({ params }: PageProps) {
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
          <h1 className="font-display text-5xl">Gallery</h1>
          <p className="mt-3 text-slate-600">Drop in imagery, video loops, or immersive 3D scenes.</p>
        </div>
      }
    >
      <PageSection title="Media Grid">
        <p>
          Use shared UI primitives to assemble responsive grids or interactive sliders for each couple.
        </p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
