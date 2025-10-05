import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { BloomingLoveHero } from "./components/BloomingLoveHero";
import { BloomingLoveOverviewSection } from "./components/BloomingLoveOverviewSection";
import { GardenMemoriesSection } from "./components/GardenMemoriesSection";
import { ProposalSection } from "./components/ProposalSection";
import { WeddingBlossomSection } from "./components/WeddingBlossomSection";
import { GuestRsvpSection } from "./components/GuestRsvpSection";

export const metadata: Metadata = {
  title: "Blooming Love",
  description: "A cinematic wedding invitation inspired by a botanical journey that blooms with every scroll.",
};

export default function BloomingLovePage() {
  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={<BloomingLoveHero />}
      footer={
        <div className="space-y-2">
          <p>May every step of Faizal &amp; Jannah&apos;s journey continue to bloom with grace.</p>
          <p className="text-xs text-slate-400">Designed as part of the Botanical Dream invitation series.</p>
        </div>
      }
    >
      <BloomingLoveOverviewSection />
      <GardenMemoriesSection />
      <ProposalSection />
      <WeddingBlossomSection />
      <GuestRsvpSection />
    </BaseInvitationLayout>
  );
}
