"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface CountdownSectionProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function CountdownSection({ targetDate }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countdownEntries = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  );

  return (
    <motion.section
      id="countdown"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative min-h-[80vh] bg-white/70 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl text-slate-900 sm:text-5xl">Counting Down to Our Forever</h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Every passing moment brings us closer to celebrating with you.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countdownEntries.map((item) => (
            <div key={item.label} className="rounded-[28px] bg-white/80 p-6 shadow-ethereal backdrop-blur">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="block font-serif text-5xl text-brand-500"
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
              <span className="mt-2 block text-sm uppercase tracking-[0.4em] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
