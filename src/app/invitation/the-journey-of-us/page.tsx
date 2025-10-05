import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { invitationCatalog } from "@config/invitation";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";
import { formatDateRange } from "@lib/utils";
import { CinematicHero } from "./components/CinematicHero";
import { CinematicScenesSection, type CinematicScene } from "./components/CinematicScenesSection";
import { ProposalSpotlight } from "./components/ProposalSpotlight";
import { WeddingDayDetails, type TimelineEvent } from "./components/WeddingDayDetails";
import { ClosingScene } from "./components/ClosingScene";

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "the-journey-of-us");

export async function generateMetadata(): Promise<Metadata> {
  if (!invitation) {
    notFound();
  }

  return {
    title: invitation.title,
    description: invitation.excerpt,
    openGraph: {
      title: invitation.title,
      description: invitation.excerpt,
      type: "website",
      url: `https://example.com/invitation/${invitation.slug}`,
    },
  };
}

const cinematicScenes: CinematicScene[] = [
  {
    id: "scene-1",
    label: "Scene 1",
    title: "How We Met",
    description:
      "An ordinary coffee run turned magical at the campus courtyard where Ayla and Rendra first crossed paths.",
    highlights: [
      "Parallax layers reveal the buzzing city as two silhouettes drift closer.",
      "Chat bubbles appear with our very first messages — nervous yet sincere.",
      "Soft guitar chords echo the fluttering excitement of a brand-new connection.",
    ],
  },
  {
    id: "scene-2",
    label: "Scene 2",
    title: "Moments We Shared",
    description:
      "From spontaneous road trips to rainy movie nights, our montage celebrates the memories that shaped our rhythm.",
    highlights: [
      "Cinematic carousel scrolls through our favourite polaroids and video snippets.",
      "Typewriter captions narrate the jokes and promises whispered between frames.",
      "Floating bokeh lights slow dance with every swipe to mirror our laughter.",
    ],
  },
  {
    id: "scene-3",
    label: "Scene 3",
    title: "The Little Things",
    description:
      "Every shared sunrise, handwritten note, and late-night drive became the heartbeat of our story.",
    highlights: [
      "Layered illustrations create depth so each keepsake floats gently into focus.",
      "Ambient soundtrack rises subtly as the scroll unveils personal milestones.",
      "Subtle motion blur and light rays evoke the warmth of lingering memories.",
    ],
  },
];

const weddingTimeline: TimelineEvent[] = [
  {
    time: "08:30",
    title: "Guests Arrival & Welcome Drinks",
    description: "Enjoy a handcrafted mocktail while the string quartet sets the tone.",
  },
  {
    time: "09:00",
    title: "Intimate Ceremony",
    description: "Witness our vows framed by glasshouse light and evergreen florals.",
  },
  {
    time: "10:30",
    title: "Brunch Reception",
    description: "Celebrate with artisanal treats, a confetti flourish, and acoustic serenades.",
  },
];

export default function TheJourneyOfUsPage() {
  if (!invitation) {
    notFound();
  }

  const startDate = new Date(invitation.eventDate);
  const endDate = new Date(new Date(invitation.eventDate).getTime() + 3 * 60 * 60 * 1000);
  const eventWindow = formatDateRange(startDate, endDate);

  return (
    <BaseInvitationLayout
      theme="evergreen"
      hero={<CinematicHero invitation={invitation} eventWindow={eventWindow} />}
    >
      <PageSection title="Opening Credits" eyebrow="Scene 0" className="border-none bg-white/80">
        <p>
          Welcome to our cinematic invitation where every scroll cues a new chapter. Glide through floating petals, curated
          soundscapes, and intimate visuals that capture the essence of Ayla and Rendra&apos;s story from the very first hello to the
          moment we say I do.
        </p>
        <p className="text-sm text-slate-500">
          Tip: enable the soundtrack at the finale to experience the full emotional arc, and swipe slowly to savor the animated
          transitions between each scene.
        </p>
      </PageSection>

      <CinematicScenesSection scenes={cinematicScenes} />

      <ProposalSpotlight
        narrative="Under a canopy of candlelight and slow-falling petals, Rendra knelt with a luminous ring that mirrored the stars we had chased together. The moment felt suspended in time — the soundtrack swelled, the world hushed, and every promise we had whispered found its voice."
        vows={[
          "A constellation of candles flickered to reveal the question.",
          "A delicate ring rotated in the glow, catching every heartfelt breath.",
          "Handwritten lettering etched the words that changed everything: ‘And I said… YES!’",
        ]}
      />

      <WeddingDayDetails eventDate={invitation.eventDate} venue={invitation.venue} timeline={weddingTimeline} />

      <ClosingScene
        gratitude="Thank you for journeying through our love story. Your presence, whether near or far, adds warmth to every chapter and we can’t wait to celebrate the next scene with you."
        signature={invitation.couple}
      />
    </BaseInvitationLayout>
  );
}
