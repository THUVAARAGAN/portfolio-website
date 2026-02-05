"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/profile.png"}
              alt="Thuvaaragan"
              width={192}
              height={192}
              className="h-24 w-24 sm:h-40 sm:w-40 lg:h-60 lg:w-60 rounded-full object-cover border-4 border-white shadow-2xl ring-2 ring-slate-200/50 dark:border-slate-700 dark:ring-slate-600/50"
              quality={95}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-bold !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-slate-900 dark:text-slate-100">I&apos;m Thuvaaragan, an AI/ML Engineer with 6+ years of experience delivering real-world impact through </span>
        <span className="text-emerald-600 dark:text-emerald-400">Generative AI, Computer Vision, Data Science and LLM-based systems.</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 items-center justify-center px-4 flex-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-800 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-emerald-600 focus:scale-105 active:scale-100 transition shadow-lg font-semibold"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let&apos;s Collaborate{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1" />
        </Link>
        <Link
          href="#work-with-me"
          className="group bg-emerald-600 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-emerald-700 focus:scale-105 active:scale-100 transition shadow-lg font-semibold"
          onClick={() => {
            setActiveSection("Work With Me");
            setTimeOfLastClick(Date.now());
          }}
        >
          Start Your AI Journey{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1" />
        </Link>
        <a
          href="/Thuvaaragan_cv_update.pdf"
          download
          className="group flex items-center gap-2 bg-white px-5 py-2.5 rounded-full outline-none hover:scale-105 focus:scale-105 active:scale-100 transition border border-slate-200 shadow-sm cursor-pointer dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 font-medium"
        >
          Download CV{" "}
          <HiDownload className="opacity-65 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/thuvaaragan-thevarajah-3306ab21b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-slate-700 p-4 rounded-full hover:scale-105 focus:scale-105 active:scale-100 transition border border-slate-200 shadow-sm cursor-pointer dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Thuvaaragan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-slate-700 text-xl p-3.5 rounded-full hover:scale-105 focus:scale-105 active:scale-100 transition border border-slate-200 shadow-sm cursor-pointer dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200"
            aria-label="GitHub Profile"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
