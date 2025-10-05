import { PageSection } from "@components/shared/PageSection";

export function AdventureSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 3"
      title="Miles of Adventures"
      className="border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-4">
          <p>
            The drive ascends rolling hills and glistening lakes bathed in golden hour light. Road curvature is defined by an
            SVG path that tilts the car gently as it climbs and descends, echoing the storyboard&apos;s kinetic energy.
          </p>
          <p>
            Light shifts from orange to purple using layered gradients and blend modes. A subtle camera shake conveys the
            excitement of the adventure while keeping the interface calm and readable.
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl border border-emerald-200/60 bg-white/80 p-4">
              <span className="font-semibold text-emerald-600">MotionPathPlugin</span>
              <p className="mt-1">Drive the car along an undulating path with scrubbed ScrollTrigger progress.</p>
            </li>
            <li className="rounded-2xl border border-purple-200/60 bg-white/80 p-4">
              <span className="font-semibold text-purple-600">Dynamic lighting</span>
              <p className="mt-1">Swap gradient overlays to transition from afternoon glow to dusk.</p>
            </li>
            <li className="rounded-2xl border border-sky-200/60 bg-white/80 p-4">
              <span className="font-semibold text-sky-600">Cinematic touch</span>
              <p className="mt-1">Add a low amplitude y-axis oscillation to mimic suspension bounce.</p>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-10 shadow-inner">
          <div className="absolute inset-x-12 top-10 h-20 rounded-full bg-gradient-to-r from-emerald-200/50 via-sky-200/40 to-purple-200/50 blur-xl" />
          <div className="relative h-36 overflow-hidden rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-purple-50">
            <div className="absolute inset-x-6 bottom-8 h-3 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-purple-300 opacity-80" />
            <div className="absolute inset-x-10 top-6 h-24 rounded-[2rem] border border-slate-200/70 bg-white/80">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(16,185,129,0.08),_rgba(59,130,246,0.12))]" />
            </div>
            <div className="absolute bottom-10 right-10 rounded-full border border-purple-300/60 bg-purple-100/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-600 shadow">
              Scenic route
            </div>
            <div className="absolute bottom-10 left-10 flex items-center gap-3 rounded-full border border-emerald-300/70 bg-emerald-100 px-4 py-2 text-emerald-700 shadow">
              <span className="text-lg">🌄</span>
              <span className="text-xs uppercase tracking-[0.2em]">Peaks &amp; Lakes</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Layer optional particle sprites (mist, sparkles) with low opacity to emphasize altitude and breeze.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
