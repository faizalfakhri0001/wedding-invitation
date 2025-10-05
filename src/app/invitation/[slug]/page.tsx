import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";
import { getInvitationBySlug, getAllInvitationSlugs } from "@lib/data/invitations";

interface InvitationPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllInvitationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: InvitationPageProps): Promise<Metadata> {
  const { slug } = params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) {
    return { title: "Invitation not found" };
  }

  return {
    title: invitation.title,
    description: invitation.excerpt,
  };
}

export default function InvitationPage({ params }: InvitationPageProps) {
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
          <p className="font-script text-2xl text-brand-500">Customizable Hero</p>
          <h1 className="font-display text-5xl">{invitation.title}</h1>
          <p className="mt-4 text-slate-600">{invitation.excerpt}</p>
        </div>
      }
    >
      <PageSection title="Starter Template" eyebrow="Extend Me">
        <p>
          This dynamic route is intended for invitations that have not yet been handcrafted. Duplicate the
          <code>the-journey-of-us</code> folder, update the config, and start building.
        </p>
      </PageSection>

      <PageSection title="Shared Building Blocks" eyebrow="Composability">
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Shared layout, typography, and animation primitives.</li>
          <li>Tailwind CSS with shadcn/ui for consistent UI.</li>
          <li>Framer Motion + Lenis for storytelling transitions.</li>
        </ul>
      </PageSection>
    </BaseInvitationLayout>
  );
}
