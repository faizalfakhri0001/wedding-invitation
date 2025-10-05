import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@styles/animations.css";
import "@styles/themes.css";
import { RootProviders } from "@components/layout/RootProviders";

export const metadata: Metadata = {
  title: {
    default: "Wedding Invitation Platform",
    template: "%s | Wedding Invitation Platform",
  },
  description:
    "A multi-brand wedding invitation platform built with Next.js 15, Tailwind CSS, and shared UI primitives.",
  authors: [{ name: "Wedding Invitation Studio" }],
  generator: "Next.js 15",
};

export const viewport: Viewport = {
  themeColor: "#ec4899",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900">
        <RootProviders>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </RootProviders>
      </body>
    </html>
  );
}
