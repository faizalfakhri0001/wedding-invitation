import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run create:invitation <slug>");
  process.exit(1);
}

const segments = ["story", "gallery", "rsvp", "gift"];
const basePath = join(process.cwd(), "src/app/invitation", slug);

if (existsSync(basePath)) {
  console.error(`Invitation ${slug} already exists.`);
  process.exit(1);
}

mkdirSync(basePath, { recursive: true });
segments.forEach((segment) => {
  mkdirSync(join(basePath, segment), { recursive: true });
});

const pageTemplate = `import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "${slug.replace(/-/g, " ")}",
  description: "Generated invitation scaffold page.",
};

export default function InvitationPage() {
  return (
    <BaseInvitationLayout hero={<div className=\"mx-auto max-w-3xl text-center\"><h1 className=\"font-display text-5xl capitalize\">${slug.replace(/-/g, " ")}</h1></div>}>
      <PageSection title="Overview">
        <p>Customize this invitation by editing the generated files inside <code>app/invitation/${slug}</code>.</p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
`;

writeFileSync(join(basePath, "page.tsx"), pageTemplate);

segments.forEach((segment) => {
  const segmentTemplate = `import type { Metadata } from "next";
import { BaseInvitationLayout } from "@components/layout/BaseInvitationLayout";
import { PageSection } from "@components/shared/PageSection";

export const metadata: Metadata = {
  title: "${slug.replace(/-/g, " ")} ${segment}",
  description: "Generated invitation scaffold page.",
};

export default function Page() {
  return (
    <BaseInvitationLayout hero={<div className=\"mx-auto max-w-3xl text-center\"><h1 className=\"font-display text-5xl capitalize\">${segment}</h1></div>}>
      <PageSection title="Content">
        <p>Extend this ${segment} section to match the couple's narrative.</p>
      </PageSection>
    </BaseInvitationLayout>
  );
}
`;

  writeFileSync(join(basePath, segment, "page.tsx"), segmentTemplate);
});

console.info(`Invitation scaffold created at src/app/invitation/${slug}`);
