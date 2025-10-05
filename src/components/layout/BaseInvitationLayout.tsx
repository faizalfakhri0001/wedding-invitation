"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@lib/utils";

interface BaseInvitationLayoutProps {
  children: ReactNode;
  theme?: string;
  className?: string;
  hero?: ReactNode;
  footer?: ReactNode;
}

export function BaseInvitationLayout({ children, theme, className, hero, footer }: BaseInvitationLayoutProps) {
  return (
    <div data-theme={theme} className={cn("relative flex min-h-screen flex-col", className)}>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 to-white px-6 py-20 text-center"
      >
        <div className="absolute inset-0 -z-10 motion-float bg-[radial-gradient(circle_at_top,_var(--color-primary)_0%,_transparent_70%)] opacity-30" />
        {hero}
      </motion.header>
      <main className="flex-1 bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl space-y-16">{children}</div>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900/90 py-12 text-center text-sm text-slate-100"
      >
        {footer ?? <p>Crafted with love and Next.js</p>}
      </motion.footer>
    </div>
  );
}
