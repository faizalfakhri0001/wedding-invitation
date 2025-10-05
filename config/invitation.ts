export type InvitationPreset = {
  slug: string;
  title: string;
  couple: string;
  theme: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  excerpt: string;
  eventDate: string;
  venue: string;
  timezone: string;
};

type InvitationCatalog = {
  presets: InvitationPreset[];
  defaults: {
    timezone: string;
  };
};

export const invitationCatalog: InvitationCatalog = {
  defaults: {
    timezone: "Asia/Jakarta",
  },
  presets: [
    {
      slug: "the-journey-of-us",
      title: "The Journey of Us",
      couple: "Ayla & Rendra",
      theme: "Ethereal Glow",
      palette: {
        primary: "#ec4899",
        secondary: "#f472b6",
        accent: "#bfdbfe",
      },
      excerpt: "Soft gradients, floating petals, and a cinematic scrolling story about Ayla and Rendra.",
      eventDate: "2025-05-18T09:00:00+07:00",
      venue: "The Glasshouse, Jakarta",
      timezone: "Asia/Jakarta",
    },
    {
      slug: "blooming-love",
      title: "Blooming Love",
      couple: "Sena & Mira",
      theme: "Botanical Dream",
      palette: {
        primary: "#16a34a",
        secondary: "#f97316",
        accent: "#bef264",
      },
      excerpt: "A lush garden theme with organic shapes, delicate lines, and immersive parallax scenes.",
      eventDate: "2025-08-02T10:00:00+07:00",
      venue: "The Forest Chapel, Bandung",
      timezone: "Asia/Jakarta",
    },
  ],
};
