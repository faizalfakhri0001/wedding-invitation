"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function StorySection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "15%"]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.85]);

  return (
    <motion.section
      ref={(node) => {
        containerRef.current = node;
      }}
      id="story"
      className="relative flex h-[150vh] items-center justify-center overflow-hidden bg-white/40"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-x-0 -inset-y-32"
      >
        <Skeleton className="h-full w-full rounded-none bg-gradient-to-b from-rose-100/70 via-white to-rose-50/60" aria-hidden />
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <motion.div
          style={{ opacity: cardOpacity }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl rounded-[40px] bg-white/80 p-12 text-center shadow-ethereal backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-white/40" aria-hidden />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl text-slate-900 sm:text-5xl"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            From the first serendipitous meeting beneath the canopy of autumn lights to the countless sunrise coffees and midnight
            talks, our journey has been woven with gentle laughter and unwavering faith. Every chapter brought us closer, and on
            October 12th 2025 we invite you to witness the moment our paths unite forever.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
