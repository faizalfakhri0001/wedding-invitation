"use client";

import { Gift, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const giftAccounts = [
  {
    bank: "Bank Central Asia",
    short: "BCA",
    accountName: "Faizal Ahmad",
    accountNumber: "1234 5678 909",
  },
  {
    bank: "Bank Rakyat Indonesia",
    short: "BRI",
    accountName: "Jannah Rahmadani",
    accountNumber: "7788 1122 3344",
  },
];

export function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (accountNumber: string, index: number) => {
    try {
      await navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""));
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2500);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <motion.section
      id="gift"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative min-h-[90vh] bg-gradient-to-b from-rose-50/40 to-white px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500">
            <Gift className="h-6 w-6" />
          </span>
          <h2 className="mt-6 font-serif text-4xl text-slate-900 sm:text-5xl">A Token of Love</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Your presence is the most precious gift. Should you wish to share a token of love, our digital envelope awaits.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {giftAccounts.map((account, index) => (
            <motion.div
              key={account.accountNumber}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] bg-white/85 p-8 text-left shadow-ethereal backdrop-blur"
            >
              <div className="absolute inset-0 rounded-[32px] border border-white/50" aria-hidden />
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-100/70 via-white to-rose-50/70" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-rose-400/80">{account.short}</p>
                  <p className="text-lg font-semibold text-slate-800">{account.bank}</p>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-slate-600">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Account Name</p>
                <p className="text-lg font-medium text-slate-800">{account.accountName}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Account Number</p>
                <p className="text-lg font-semibold text-slate-900">{account.accountNumber}</p>
              </div>
              <Button asChild variant="outline" className="mt-8 w-full rounded-2xl border-rose-100 bg-rose-50/60 text-rose-500">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleCopy(account.accountNumber, index)}
                  className="flex items-center justify-center gap-2"
                >
                  {copiedIndex === index ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  {copiedIndex === index ? "Copied" : "Copy Account Number"}
                </motion.button>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
