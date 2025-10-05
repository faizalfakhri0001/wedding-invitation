import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

interface PageSectionProps {
  title: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}

export function PageSection({ title, eyebrow, className, children }: PageSectionProps) {
  return (
    <motion.section
      className={cn("space-y-4 rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-sm", className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p> : null}
        <h2 className="font-display text-3xl">{title}</h2>
      </div>
      <div className="text-slate-600">{children}</div>
    </motion.section>
  );
}
