"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { LuExternalLink } from "react-icons/lu";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-100 max-w-[42rem] border border-slate-200 overflow-hidden relative h-[25rem] rounded-xl shadow-lg sm:h-[20rem] transition group hover:shadow-xl hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:border-slate-600 sm:pr-8 sm:group-even:pl-8 flex flex-col">
        <div className="pt-4 pb-7 px-5 flex flex-col h-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-0 sm:group-even:ml-[18rem]">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <a
              className="text-emerald-700 dark:text-emerald-400 hover:underline"
              href={project.linkUrl}
              target="_blank"
            >
              <LuExternalLink />
            </a>
          </div>

          <p className="mt-2 leading-relaxed text-sm text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.tags.map((tag) => (
              <li
                className="bg-slate-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-slate-600 dark:text-slate-100"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          quality={95}
          className="sm:absolute sm:top-8 sm:-right-40 w-full object-cover sm:w-[28.25rem] rounded-t-lg shadow-2xl sm:group-even:right-[initial] sm:group-even:-left-40 group-even:left-0 sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:rotate-2 sm:group-hover:scale-[1.04] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-90"
        />
      </section>
    </motion.div>
  );
}
