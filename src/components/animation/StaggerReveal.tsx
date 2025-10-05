"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerRevealProps {
  children: ReactNode;
  delay?: number;
}

export function StaggerReveal({ children, delay = 0 }: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const fadeChild = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
