import { PageSection } from "@components/shared/PageSection";

const interactions = [
  {
    action: "Scroll / Swipe Right",
    effect: "The convertible advances to the next checkpoint with synced MotionPath progress.",
  },
  {
    action: "Hover on Signboards",
    effect: "Glow highlight and reveal mini pop-ups of Nara & Dimas' milestone memories.",
  },
  {
    action: "Toggle Music",
    effect: "Ambient road-trip soundtrack fades in/out using Howler.js for seamless loops.",
  },
  {
    action: "Click RSVP",
    effect: "Modal lifts with Framer Motion spring; submitting triggers celebratory confetti and pauses the car at the venue.",
  },
];

export function InteractivitySection() {
  return (
    <PageSection
      eyebrow="Interaction Map"
      title="Driving the Experience"
      className="border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-sky-50"
    >
      <p>
        Road to Forever is designed as a horizontal journey where every action nudges the narrative forward. Use the map below to
        coordinate micro-interactions with their respective animation cues.
      </p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white/80">
        <div className="grid grid-cols-1 divide-y divide-slate-200 text-sm text-slate-600 md:grid-cols-2 md:divide-x md:divide-y-0">
          {interactions.map((item) => (
            <div key={item.action} className="p-5">
              <p className="font-semibold uppercase tracking-[0.2em] text-slate-500">{item.action}</p>
              <p className="mt-2 leading-relaxed">{item.effect}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Implement container-based ScrollTrigger timelines so each scene can be iterated independently without breaking the full
        journey.
      </p>
    </PageSection>
  );
}
