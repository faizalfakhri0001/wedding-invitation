import { PageSection } from "@components/shared/PageSection";

const palette = [
  { name: "Pastel beige", value: "#f8ede3" },
  { name: "Dusty orange", value: "#f5a261" },
  { name: "Mint green", value: "#b6e2d3" },
  { name: "Warm blue", value: "#74b9ff" },
];

export function MoodboardSection() {
  return (
    <PageSection
      eyebrow="Moodboard"
      title="Visual & Audio Direction"
      className="border-slate-200/60 bg-gradient-to-br from-white via-slate-50 to-orange-50"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p>
            The mood blends cinematic nostalgia with playful optimism. Pair Montserrat for headings and Poppins for body copy to
            keep typography crisp across both Indonesian and English copywriting.
          </p>
          <p>
            Transition the lighting from morning blues to sunset ambers as the journey advances. An ambient road-trip soundtrack
            with gentle percussions anchors the entire experience.
          </p>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-700">Audio cues</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Engine ignition &amp; soft wind during the opening scene.</li>
              <li>City ambience layered with subtle guitar riffs for the meet scene.</li>
              <li>Piano swells and ocean waves to underline the proposal moment.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {palette.map((color) => (
              <div key={color.name} className="rounded-3xl border border-slate-200 bg-white/80 p-4">
                <div className="h-24 rounded-2xl" style={{ backgroundColor: color.value }} />
                <p className="mt-3 text-sm font-medium text-slate-700">{color.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{color.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Consider pairing the palette with grain overlays or halftone textures for extra warmth while keeping assets lightweight.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
