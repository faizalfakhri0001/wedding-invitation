import { PageSection } from "@components/shared/PageSection";

const openingHighlights = [
  "Soft spotlight reveals a floating frame with our very first photo together.",
  "Subtle piano score fades in as the vignette around the gallery lifts.",
  "Scroll cues a cinematic push-in, inviting guests deeper into the memory hall.",
];

export function MemoryHallOpeningSection() {
  return (
    <PageSection
      eyebrow="Scene 01"
      title="Welcome to Our Memory Hall"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-amber-50"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,214,169,0.35),_transparent_65%)] opacity-80" />
      <p className="text-amber-100/80">
        The gallery awakens with a single illuminated frame. Warm light spills across dark walls while a soft piano overture
        prepares our guests for the story ahead. As you begin to scroll, the camera glides forward and the doors to our carousel
        of memories quietly open.
      </p>
      <ul className="grid gap-3 text-sm text-amber-100/80 sm:grid-cols-3">
        {openingHighlights.map((highlight) => (
          <li key={highlight} className="rounded-2xl border border-amber-200/20 bg-slate-950/60 p-4 text-amber-100/80">
            {highlight}
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
