import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@components/ui/button";
import { InvitationList } from "@components/shared/InvitationList";
import { invitationCatalog } from "@config/invitation";

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="light-gradient absolute inset-0" />
      </div>
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-2xl text-brand-500">Crafted with love</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Multi-Invitation Wedding Experiences</h1>
        <p className="mt-6 text-lg text-slate-600">
          Launch unique wedding invitations faster with a shared design system, motion presets,
          and world-class performance powered by Next.js 15.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/invitation/the-journey-of-us">
              View featured invite
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/docs/getting-started">Documentation</Link>
          </Button>
        </div>
      </div>
      <section className="container mx-auto mt-16 max-w-5xl px-6">
        <InvitationList invitations={invitationCatalog.presets} />
      </section>
    </main>
  );
}
