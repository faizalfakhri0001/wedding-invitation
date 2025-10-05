import { invitationCatalog } from "@config/invitation";
import { PageSection } from "@components/shared/PageSection";
import { formatDateRange } from "@lib/utils";

const invitation = invitationCatalog.presets.find((preset) => preset.slug === "carousel-of-memories");

export function InvitationRevealSection() {
  if (!invitation) {
    return null;
  }

  const startDate = new Date(invitation.eventDate);
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
  const eventWindow = formatDateRange(startDate, endDate);

  return (
    <PageSection
      eyebrow="Scene 05"
      title="The Wedding Invitation"
      className="relative overflow-hidden border-amber-100/40 bg-gradient-to-br from-[#20140f] via-[#1a110d] to-[#120b08] text-amber-100"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(250,224,162,0.3),_transparent_75%)]" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-amber-100/80">
            The carousel slows to stillness, dissolving into a single illuminated frame. All supporting memories fade into soft
            silhouettes as the wedding details come into focus, inviting you to be part of our next chapter.
          </p>
          <ul className="space-y-2 text-sm text-amber-100/80">
            <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3 text-amber-100/80">
              <span className="text-lg">🕰️</span>
              {eventWindow}
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3 text-amber-100/80">
              <span className="text-lg">📍</span>
              {invitation.venue}
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-amber-100/20 bg-slate-950/40 p-3 text-amber-100/80">
              <span className="text-lg">🎧</span>
              A brighter reprise of our soundtrack fades in as the RSVP panel appears.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-100/30 bg-slate-950/50 p-6 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,240,217,0.35),_transparent_75%)]" />
          <div className="space-y-2 font-display text-amber-100">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">Now a new story is about to begin</p>
            <p className="text-3xl">{invitation.couple}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/60">invite you to celebrate love</p>
          </div>
          <div className="mt-6 rounded-3xl border border-amber-100/20 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-200/70">Wedding Celebration</p>
            <p className="mt-3 text-2xl font-semibold text-amber-100">
              {startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
            <p className="mt-4 text-sm text-amber-100/70">{invitation.venue}</p>
            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-200/40 via-amber-100/20 to-amber-200/40 px-6 py-3 text-sm font-medium text-amber-950 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.8)] transition hover:from-amber-200/60 hover:to-amber-200/60">
              RSVP &amp; Save the Date
            </button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
