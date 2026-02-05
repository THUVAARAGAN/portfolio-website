"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FaCertificate } from "react-icons/fa";

const certificationsData = [
  {
    title: "Machine Learning",
    issuer: "Stanford",
    date: "Feb 2021",
    icon: FaCertificate,
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Nov 2021",
    icon: FaCertificate,
  },
] as const;

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.3);

  return (
    <section
      ref={ref}
      id="certifications"
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Certificates</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-12">
        {certificationsData.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:border-emerald-300 dark:hover:border-emerald-600 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                  <IconComponent className="text-emerald-600 dark:text-emerald-400 text-xl" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
