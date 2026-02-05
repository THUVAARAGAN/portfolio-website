"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { LuExternalLink } from "react-icons/lu";
import { FaBlog } from "react-icons/fa";

// Placeholder blog posts - replace with actual blog data when available
const blogPostsData = [
  {
    title: "Building Production-Ready RAG Systems",
    excerpt: "Learn how to design and deploy Retrieval-Augmented Generation systems that scale in production environments.",
    category: "LLM & RAG",
    date: "Coming Soon",
    link: "#",
  },
  {
    title: "The Future of AI Agents",
    excerpt: "Exploring the evolution of AI agents and how they're transforming business automation and decision-making.",
    category: "AI Agents",
    date: "Coming Soon",
    link: "#",
  },
  {
    title: "Computer Vision in Production",
    excerpt: "Best practices for deploying computer vision models at scale, from edge devices to cloud infrastructure.",
    category: "Computer Vision",
    date: "Coming Soon",
    link: "#",
  },
] as const;

export default function Blog() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      ref={ref}
      id="blog"
      className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <FaBlog className="text-emerald-600 dark:text-emerald-400 text-2xl" />
        <SectionHeading>Thought Leadership</SectionHeading>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 dark:text-slate-400 mb-12 px-4"
      >
        Insights, experiences, and opinions on AI/ML trends, best practices, and industry innovations.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {blogPostsData.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:border-emerald-300 dark:hover:border-emerald-600 group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {post.date}
              </span>
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <a
              href={post.link}
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium transition-colors"
            >
              Read More
              <LuExternalLink className="w-3 h-3" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
