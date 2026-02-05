"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    quote: "Thuvaaragan delivered exceptional AI solutions that transformed our business processes. His expertise in Generative AI and LLMs is outstanding.",
    author: "Client",
    role: "Tech Lead",
    company: "Exentai",
  },
  {
    quote: "Working with Thuvaaragan was a game-changer. His innovative approach to RAG systems and production ML helped us achieve remarkable results.",
    author: "Colleague",
    role: "Senior Engineer",
    company: "4 Axis Solutions",
  },
  {
    quote: "Thuvaaragan's technical depth and problem-solving skills are impressive. He consistently delivers high-quality AI solutions that exceed expectations.",
    author: "Collaborator",
    role: "Project Manager",
    company: "Vital Masks",
  },
] as const;

export default function Testimonials() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>What People Say</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-12">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
          >
            <FaQuoteLeft className="text-emerald-600 dark:text-emerald-400 text-2xl mb-4" />
            <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                {testimonial.author}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
