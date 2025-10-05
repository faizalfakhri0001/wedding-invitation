import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "Road to Forever — Story",
  description: "Storyboard and narrative blueprint for the Road to Forever invitation variant.",
};

export default function RoadToForeverStoryPage() {
  return (
    <BaseInvitationLayout
      theme="sunset-drive"
      hero={
        <div className="mx-auto max-w-3xl text-center text-slate-800">
          <h1 className="font-display text-5xl">Storyboard</h1>
          <p className="mt-3 text-slate-500">
            Reference notes for crafting the cinematic horizontal journey of Nara &amp; Dimas.
          </p>
        </div>
      }
    >
      <PageSection title="Scene Outline" className="border-orange-200/60 bg-white/80">
        <ol className="list-decimal space-y-3 pl-5 text-slate-600">
          <li>
            <span className="font-medium text-slate-700">Opening Scene:</span> Sunrise, car ignition, gentle motion cue.
          </li>
          <li>
            <span className="font-medium text-slate-700">Where We Met:</span> Parallax cityscape, glowing signboard, nostalgic copy.
          </li>
          <li>
            <span className="font-medium text-slate-700">Our Adventures:</span> Mountainous roads, lighting shift, tilt effect.
          </li>
          <li>
            <span className="font-medium text-slate-700">Proposal Stop:</span> Sunset pause, silhouette reveal, confetti fall.
          </li>
          <li>
            <span className="font-medium text-slate-700">Wedding Destination:</span> Venue reveal, RSVP &amp; map call-to-actions.
          </li>
        </ol>
      </PageSection>
      <PageSection title="Production Notes" className="border-slate-200/60 bg-white/80">
        <ul className="list-disc space-y-2 pl-5 text-slate-600">
          <li>Adopt container-based ScrollTrigger to manage horizontal pinning.</li>
          <li>Optimise SVG road assets and reuse across breakpoints.</li>
          <li>Prepare audio stems for ignition, city ambience, adventure, proposal, and finale.</li>
          <li>Design fallback states for non-horizontal scroll devices by stacking scenes vertically.</li>
        </ul>
      </PageSection>
    </BaseInvitationLayout>
  );
}
