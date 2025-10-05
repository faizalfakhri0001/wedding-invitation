"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const galleryItems = [
  { id: 1, caption: "Sunlit Morning" },
  { id: 2, caption: "City Promenade" },
  { id: 3, caption: "Evening Serenade" },
  { id: 4, caption: "Garden Stroll" },
  { id: 5, caption: "Starry Promises" },
  { id: 6, caption: "Quiet Moments" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function GallerySection() {
  return (
    <motion.section
      id="gallery"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative min-h-[120vh] bg-gradient-to-b from-white to-rose-50/50 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl text-slate-900 sm:text-5xl">Keepsakes of Love</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Glimpses of the quiet, joy-filled moments that shape our story.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-[30px] bg-white/70 shadow-ethereal backdrop-blur"
            >
              <Skeleton className="h-72 w-full bg-gradient-to-br from-rose-100/60 via-white to-rose-50/70 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/80">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-lg font-semibold">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
