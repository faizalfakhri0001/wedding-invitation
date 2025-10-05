import { PageSection } from "@components/shared/PageSection";

export function ProposalSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 4"
      title="The Proposal Stop"
      className="border-rose-200/60 bg-gradient-to-br from-orange-50 via-rose-50 to-slate-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p>
            The car eases to a halt beside a glowing horizon. Silhouettes of Nara &amp; Dimas appear next to the vehicle as confetti
            sparkles fall from the sky. The camera momentarily locks, allowing the couple&apos;s quote “And at this stop, forever
            began.” to breathe.
          </p>
          <p>
            A GSAP fade sequence blends sunset gradients, confetti particles, and gentle zoom-out before the scene transitions
            towards the wedding venue map.
          </p>
          <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 text-sm text-slate-600">
            <p className="font-semibold text-rose-600">Art direction</p>
            <p className="mt-2">
              Combine soft peach and magenta for the sky, layer silhouettes with multiply blend modes, and add a faint glassmorphism card for the quote.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-white/80 p-8 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.16),_transparent_75%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <div className="rounded-full border border-rose-300/70 bg-rose-100 px-4 py-2 text-xs uppercase tracking-[0.25em] text-rose-600">
                Pause &amp; Promise
              </div>
              <div className="rounded-full border border-orange-300/70 bg-orange-100 px-4 py-2 text-xs uppercase tracking-[0.25em] text-orange-600">
                Confetti FX
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6 shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),_transparent_70%)]" />
              <div className="relative space-y-3 text-center text-slate-600">
                <p className="text-sm uppercase tracking-[0.35em] text-rose-500">Quote overlay</p>
                <p className="font-display text-2xl text-slate-800">“And at this stop, forever began.”</p>
                <p className="text-xs text-slate-500">Reveal after the vehicle brakes to zero velocity.</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Audio bed: soft piano with distant ocean waves fades in as the confetti descends.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
