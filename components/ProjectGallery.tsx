"use client";

import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { LuExternalLink } from "react-icons/lu";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function ProjectGallery() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  // Show top 3 featured projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section
      ref={ref}
      className="mb-12 max-w-[60rem] scroll-mt-28"
      id="featured-projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Explore some of my innovative AI solutions that drive real-world impact
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 line-clamp-1">
                  {project.title}
                </h3>
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex-shrink-0 ml-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LuExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8"
      >
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View All Projects
          <LuExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
