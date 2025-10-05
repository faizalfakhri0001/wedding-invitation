import { PageSection } from "@components/shared/PageSection";

export function OpeningSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 1"
      title="The Journey Begins"
      className="border-orange-200/60 bg-gradient-to-br from-sky-50 via-white to-orange-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p>
            Dawn breaks over a still road as Nara &amp; Dimas prepare for their first ride. Soft clouds drift across the hero panel
            while the convertible waits on the left edge of the viewport, ready to follow the SVG highway.
          </p>
          <p>
            The scene is pinned as the user begins to scroll. MotionPath animates the car forward while ScrollTrigger synchronises
            the sunrise gradient and type reveal for the line “Every love story starts with a first ride.”
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="rounded-2xl border border-orange-200/60 bg-white/80 p-4 text-sm">
              <p className="font-semibold text-orange-600">Visual beats</p>
              <p className="mt-1 text-slate-600">Morning sky gradient, drifting clouds, hero quote fade-in.</p>
            </li>
            <li className="rounded-2xl border border-sky-200/60 bg-white/80 p-4 text-sm">
              <p className="font-semibold text-sky-600">Technical notes</p>
              <p className="mt-1 text-slate-600">Horizontal scroll container, pinned timeline, ambient engine audio.</p>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white/70 p-8 shadow-inner">
          <div className="absolute inset-x-0 top-6 mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-orange-200 via-amber-200 to-transparent blur-xl" />
          <div className="relative h-32 rounded-full border border-slate-200 bg-gradient-to-r from-sky-100 via-white to-orange-100">
            <div className="absolute inset-0 flex items-end justify-start px-6 pb-4">
              <div className="flex h-12 items-center gap-3 rounded-full border border-orange-300/70 bg-orange-100 px-4 text-orange-700 shadow-md">
                <span className="text-lg">🚗</span>
                <span className="text-xs uppercase tracking-[0.25em]">Ignition</span>
              </div>
            </div>
            <div className="absolute inset-x-6 bottom-3 h-1 rounded-full bg-gradient-to-r from-sky-300 via-orange-300 to-rose-200" />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Tip: Layer the road, sky, and UI badges on different z-index levels to amplify parallax.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
