import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Developer documentation for the wedding invitation platform.",
};

export default function GettingStartedPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <header>
        <h1 className="font-display text-4xl">Getting Started</h1>
        <p className="mt-3 text-slate-600">
          Follow these steps to create new invitation experiences and extend the shared design system.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-display text-2xl">1. Configure the Invitation</h2>
        <p>Add a new preset inside <code>config/invitation.ts</code> to expose metadata and theming.</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-2xl">2. Scaffold Pages</h2>
        <p>
          Duplicate the <code>the-journey-of-us</code> folder or run <code>npm run create:invitation &lt;slug&gt;</code> to
          generate the required routes instantly.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-2xl">3. Compose Experiences</h2>
        <p>
          Reuse shared components from <code>src/components/shared</code> or craft new variations in
          <code>src/components/layout</code> and <code>src/components/animation</code>.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-2xl">4. Deploy</h2>
        <p>Run <code>npm run build</code> and deploy to Vercel for instant previews.</p>
      </section>
    </main>
  );
}
