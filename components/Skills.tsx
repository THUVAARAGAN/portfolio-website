"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsByCategory } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

const categoryVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="space-y-10 sm:space-y-12">
        {skillsByCategory.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="text-left sm:text-center"
            variants={categoryVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.08 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 items-center text-lg text-slate-800 dark:text-slate-200">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm dark:bg-slate-800 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
