import { CountdownSection } from "@/components/invitation/the-journey-of-us/CountdownSection";
import { GallerySection } from "@/components/invitation/the-journey-of-us/GallerySection";
import { GiftSection } from "@/components/invitation/the-journey-of-us/GiftSection";
import { HeroSection } from "@/components/invitation/the-journey-of-us/HeroSection";
import { RSVPSection } from "@/components/invitation/the-journey-of-us/RSVPSection";
import { StorySection } from "@/components/invitation/the-journey-of-us/StorySection";

const WEDDING_DATE = "2025-10-12T10:00:00+07:00";

export default function TheJourneyOfUsInvitationPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-white via-rose-50/40 to-white text-slate-900">
      <HeroSection />
      <StorySection />
      <GallerySection />
      <CountdownSection targetDate={WEDDING_DATE} />
      <RSVPSection />
      <GiftSection />
    </main>
  );
}
