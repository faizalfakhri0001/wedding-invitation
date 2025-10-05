import { PageSection } from "@components/shared/PageSection";

export function DestinationSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 5"
      title="Wedding Destination Reveal"
      className="border-amber-200/60 bg-gradient-to-br from-white via-amber-50 to-rose-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p>
            The road finally opens to a celebration-ready venue framed by arches of flowers. Details for the ceremony appear in
            a staggered rhythm, reinforcing the ScrollTrigger finale.
          </p>
          <p>
            Introduce RSVP and map buttons with a gentle bounce using Framer Motion. Confetti particles can be triggered when the
            RSVP modal is submitted to echo the storyboard&apos;s celebratory finale.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-amber-200/70 bg-white/80 p-5 text-sm text-slate-600">
              <p className="font-semibold text-amber-600">Content blocks</p>
              <p className="mt-1">Event date, time, venue, RSVP call-to-action, and embedded map.</p>
            </div>
            <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-5 text-sm text-slate-600">
              <p className="font-semibold text-rose-600">Interaction map</p>
              <p className="mt-1">Submitting RSVP triggers confetti and pauses the car to signify arrival.</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white/80 p-8 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.2),_transparent_75%)]" />
          <div className="relative space-y-5">
            <div className="rounded-[2.5rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 text-center text-slate-700 shadow">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Welcome to our forever</p>
              <p className="mt-2 font-display text-2xl text-slate-900">12 July 2025 · 16:00 WIB</p>
              <p className="text-sm text-slate-600">Serenity Garden Pavilion, Bandung</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="rounded-full border border-amber-300/70 bg-amber-100 px-4 py-2 text-amber-700">RSVP Reveal</span>
                <span className="rounded-full border border-rose-300/70 bg-rose-100 px-4 py-2 text-rose-700">Interactive Map</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Consider layering a subtle animated path from the opening scene to the venue to visualise the full journey.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
