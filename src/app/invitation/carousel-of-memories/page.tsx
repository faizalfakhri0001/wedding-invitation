import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { invitationCatalog } from "@config/invitation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { MemoryHallOpeningSection } from "./components/MemoryHallOpeningSection";
import { CarouselMemoriesHero } from "./components/CarouselMemoriesHero";
import { FirstDaysCarouselSection } from "./components/FirstDaysCarouselSection";
import { AdventuresCarouselSection } from "./components/AdventuresCarouselSection";
import { ProposalSpotlightSection } from "./components/ProposalSpotlightSection";
import { InvitationRevealSection } from "./components/InvitationRevealSection";
import { ClosingSceneSection } from "./components/ClosingSceneSection";
import { InteractiveHighlightsSection } from "./components/InteractiveHighlightsSection";

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "carousel-of-memories");

export const metadata: Metadata = {
  title: "Carousel of Memories",
  description: "A cinematic invitation experience where a 3D carousel reveals Luna & Arga's most intimate memories.",
};

export default function CarouselOfMemoriesPage() {
  if (!invitation) {
    notFound();
  }

  return (
    <BaseInvitationLayout
      theme="noir-gold"
      hero={<CarouselMemoriesHero />}
      footer={
        <div className="space-y-2">
          <p>Thank you for travelling through Luna &amp; Arga&apos;s Carousel of Memories.</p>
          <p className="text-xs text-amber-200/70">Designed as an intimate cinematic gallery for cherished guests.</p>
        </div>
      }
    >
      <MemoryHallOpeningSection />
      <FirstDaysCarouselSection />
      <AdventuresCarouselSection />
      <ProposalSpotlightSection />
      <InvitationRevealSection />
      <InteractiveHighlightsSection />
      <ClosingSceneSection />
    </BaseInvitationLayout>
  );
}
