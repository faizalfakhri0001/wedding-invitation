/** @format */

"use client";

import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect, useRef } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isCoarsePointer ? 0.5 : 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 1.6),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      gestureOrientation: "vertical",
      lerp: 0.15,
    });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== undefined) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
