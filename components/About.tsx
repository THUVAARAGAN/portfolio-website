"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28 text-slate-700 dark:text-slate-300"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a seasoned{" "}
        <span className="font-medium">AI/ML Engineer</span> with 6 years of
        experience specializing in{" "}
        <span className="font-medium">Generative AI, Computer Vision, AI Agents,
        Large Language Models (LLMs), NLP, and Deep Learning.</span> I thrive in
        fast-paced environments, excelling at rapid learning, problem-solving, and
        collaborating within dynamic teams to deliver production-ready AI solutions
        with measurable business impact.
      </p>
      <p className="mb-3">
        What excites me most about AI is its ability to solve real-world problems that truly make a difference. 
        I&apos;m driven by seeing how AI can transform industries—from building assistive 
        technologies for the visually impaired, to optimizing business operations, to creating intelligent systems 
        that augment human capabilities. I envision a future where AI seamlessly integrates into everyday life, 
        simplifying complex tasks and unlocking new possibilities.
      </p>
      <p className="mb-3">
        I enjoy tackling challenging problems and managing end-to-end AI projects, ranging from agentic voice 
        systems and RAG-powered chatbots to vision-based smart parking systems (TADHack 2022 – 2nd Runner-Up) 
        and spatial image captioning for assistive technology (IEEE Innovative Challenge 2023 – Finalist). 
        I hold a{" "}
        <span className="font-medium">BSc. Eng. (Hons.)</span> in Electronic &
        Telecommunication Engineering from the University of Moratuwa, with a CGPA of 3.69.
      </p>
    </motion.section>
  );
}
