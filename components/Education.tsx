"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "BSc.Eng.(Hons.) in Electronic and Telecommunication Engineering",
    institution: "University of Moratuwa, Sri Lanka",
    period: "Oct 2018 – May 2023",
    details: "CGPA – 3.69",
    icon: FaGraduationCap,
  },
  {
    degree: "G.C.E. Advanced Level Examination",
    institution: "Jaffna Hindu College, Sri Lanka",
    period: "2017",
    details: "Combined Mathematics, Physics and Chemistry – 3A's – Ranked 137th in the island (Z-score: 2.2532)",
    icon: FaUniversity,
  },
] as const;

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);

  return (
    <section
      ref={ref}
      id="education"
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-12">
        {educationData.map((edu, index) => {
          const IconComponent = edu.icon;
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
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                    {edu.period}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.details}
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
