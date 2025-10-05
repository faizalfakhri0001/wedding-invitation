# Wedding Invitation Platform

A multi-invitation Next.js 15 scaffold that enables teams to design and launch multiple bespoke wedding invitation
microsites from a single codebase. Each invitation reuses the shared layout, UI primitives, and motion system while
keeping room for unique storytelling per couple.

## Tech Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS + shadcn/ui utility components
- Framer Motion + Lenis for cinematic scrolling
- Three.js via `@react-three/fiber` for optional 3D accents
- React Query for async data orchestration
- Zod + React Hook Form for form validation

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx            # Global layout + providers
│  ├─ page.tsx              # Control center overview
│  └─ invitation/           # Individual invitation experiences
│     ├─ the-journey-of-us/ # Example fully wired invitation
│     ├─ blooming-love/     # Placeholder variant ready for art direction
│     └─ [slug]/            # Dynamic fallback for new invitations
├─ components/              # Shared UI, layout, animation primitives
├─ lib/                     # Utilities and invitation data helpers
├─ styles/                  # Global theme and animation styles
└─ config/                  # Invitation metadata + theme presets
```

## Creating a New Invitation

1. Add a new preset to `config/invitation.ts` with the couple name, palette, and metadata.
2. Duplicate an existing invitation folder (e.g. `the-journey-of-us`) or run the helper script:

   ```bash
   npm run create:invitation <your-slug>
   ```

3. Customize the generated pages (`page.tsx`, `story/page.tsx`, etc.) while reusing shared components.
4. Update metadata or add bespoke components as needed. Deploy instantly to Vercel.

## Next Steps

- Flesh out per-page content with bespoke designs.
- Connect RSVP endpoints using React Query or server actions.
- Expand `components/animation` with GSAP/Lottie driven sequences as required.
- Integrate analytics, password protection, or CMS as needed.
