import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { invitationCatalog } from "@config/invitation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { RoadToForeverHero } from "./components/RoadToForeverHero";
import { OpeningSceneSection } from "./components/OpeningSceneSection";
import { MeetSceneSection } from "./components/MeetSceneSection";
import { AdventureSceneSection } from "./components/AdventureSceneSection";
import { ProposalSceneSection } from "./components/ProposalSceneSection";
import { DestinationSceneSection } from "./components/DestinationSceneSection";
import { InteractivitySection } from "./components/InteractivitySection";
import { MoodboardSection } from "./components/MoodboardSection";

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "road-to-forever");

export const metadata: Metadata = {
  title: "Road to Forever",
  description:
    "A horizontal-scroll wedding experience that drives guests through Nara & Dimas' cinematic milestones before arriving at their celebration.",
};

export default function RoadToForeverPage() {
  if (!invitation) {
    notFound();
  }

  return (
    <BaseInvitationLayout
      theme="sunset-drive"
      hero={<RoadToForeverHero />}
      footer={
        <div className="space-y-2">
          <p>Thank you for riding along Nara &amp; Dimas&apos; Road to Forever.</p>
          <p className="text-xs text-orange-100/80">Crafted as part of the cinematic road-trip invitation series.</p>
        </div>
      }
    >
      <OpeningSceneSection />
      <MeetSceneSection />
      <AdventureSceneSection />
      <ProposalSceneSection />
      <DestinationSceneSection />
      <InteractivitySection />
      <MoodboardSection />
    </BaseInvitationLayout>
  );
}
