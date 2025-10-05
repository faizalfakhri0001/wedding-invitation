import { PageSection } from "@components/shared/PageSection";

export function MeetSceneSection() {
  return (
    <PageSection
      eyebrow="Scene 2"
      title="Where Our Paths Crossed"
      className="border-sky-200/60 bg-gradient-to-br from-white via-sky-50 to-emerald-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 p-8 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_75%)]" />
          <div className="relative space-y-4">
            <p className="font-semibold uppercase tracking-[0.25em] text-sky-600">Parallax city</p>
            <p className="text-slate-600">
              Layered silhouettes of buildings, trees, and signage move at different speeds as the car glides across the road. A
              playful signboard labelled “Our First Stop” glows subtly on hover.
            </p>
            <p className="text-slate-600">
              Use GSAP timelines to coordinate the vehicle&apos;s MotionPath with typography fades and skyline parallax, evoking the
              nostalgia of their first encounter.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-200 bg-white/90 p-4 text-sm">
              <p className="font-semibold text-sky-600">Storyboard</p>
              <p className="mt-1 text-slate-600">City panorama slides by while the camera gently pans with the car.</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white/90 p-4 text-sm">
              <p className="font-semibold text-emerald-600">Interaction</p>
              <p className="mt-1 text-slate-600">Hover on the sign to trigger a glow and display a memory tooltip.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p>
            Colour the scene with warm blue hour tones that contrast the orange highlights of the hero section. Ambient audio of
            distant city birds and soft wind adds texture without overpowering the soundtrack.
          </p>
          <p>
            Suggested assets include vector skylines, illustrated foliage, and a custom type badge for the signpost. Optimise the
            stack with `next/image` responsive imports to keep the horizontal journey performant.
          </p>
          <p className="rounded-2xl border border-sky-200/60 bg-white/70 p-4 text-sm text-slate-600">
            Motion tip: anchor the vehicle to an invisible layer, then animate the environment instead of the car for smoother parallax on low-powered devices.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
