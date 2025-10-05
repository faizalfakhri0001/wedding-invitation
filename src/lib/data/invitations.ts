import { invitationCatalog } from "@config/invitation";

export function getInvitationBySlug(slug: string) {
  return invitationCatalog.presets.find((preset) => preset.slug === slug);
}

export function getAllInvitationSlugs() {
  return invitationCatalog.presets.map((preset) => preset.slug);
}
