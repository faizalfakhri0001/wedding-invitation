"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectWrapper } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface RSVPFormValues {
  name: string;
  guests: number;
  attendance: string;
  message: string;
}

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<RSVPFormValues>({
    defaultValues: {
      name: "",
      guests: 1,
      attendance: "Will Attend",
      message: "",
    },
  });

  const onSubmit = (data: RSVPFormValues) => {
    setSubmitted(true);
    setGuestName(data.name.trim() || null);
    setTimeout(() => setSubmitted(false), 4000);
    reset();
  };

  return (
    <motion.section
      id="rsvp"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative min-h-[100vh] bg-white/70 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-slate-900 sm:text-5xl">Will You Join Our Celebration?</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Kindly let us know your presence so we may prepare the warmest welcome for you.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 space-y-6 rounded-[36px] bg-white/85 p-10 shadow-ethereal backdrop-blur"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your full name" {...register("name", { required: true })} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input
                id="guests"
                type="number"
                min={1}
                max={5}
                {...register("guests", { valueAsNumber: true, min: 1 })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="attendance">Attendance</Label>
              <SelectWrapper>
                <Select id="attendance" {...register("attendance")}> 
                  <option value="Will Attend">Will Attend</option>
                  <option value="Will Celebrate From Afar">Will Celebrate From Afar</option>
                </Select>
              </SelectWrapper>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Share a warm message for the couple" rows={4} {...register("message")} />
          </div>

          <Button asChild size="lg" className="mt-4 w-full rounded-2xl bg-brand-500 text-white shadow-lg shadow-rose-200/60">
            <motion.button type="submit" whileTap={{ scale: 0.97 }}>
              Send Your RSVP
            </motion.button>
          </Button>

          <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: submitted ? 1 : 0 }} className="min-h-12">
            {submitted && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-emerald-50/80 px-5 py-3 text-emerald-600"
              >
                <Check className="h-5 w-5" />
                <span>
                  Thank you{guestName ? `, ${guestName}` : ""} for sharing your joy with us!
                </span>
              </motion.div>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
