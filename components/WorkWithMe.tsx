"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { 
  FaHandshake, 
  FaLightbulb, 
  FaRocket,
  FaCode,
  FaBrain,
  FaCloud
} from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const servicesData = [
  {
    icon: FaBrain,
    title: "AI Strategy & Consulting",
    description: "Expert guidance on implementing AI solutions that align with your business goals.",
  },
  {
    icon: FaCode,
    title: "Custom AI Development",
    description: "End-to-end development of AI/ML systems tailored to your specific needs.",
  },
  {
    icon: FaRocket,
    title: "Production ML Systems",
    description: "Deploy scalable, production-ready ML models with monitoring and optimization.",
  },
  {
    icon: FaCloud,
    title: "Cloud AI Solutions",
    description: "Leverage AWS, Azure, and GCP for robust, scalable AI infrastructure.",
  },
  {
    icon: FaLightbulb,
    title: "RAG & LLM Integration",
    description: "Build intelligent chatbots and knowledge systems using RAG and LLMs.",
  },
  {
    icon: FaHandshake,
    title: "Collaboration & Training",
    description: "Work alongside your team or provide training on AI/ML best practices.",
  },
] as const;

export default function WorkWithMe() {
  const { ref } = useSectionInView("Work With Me", 0.3);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="work-with-me"
      className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Work With Me</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 dark:text-slate-400 mb-12 px-4"
      >
        I help businesses and teams leverage cutting-edge AI technologies to solve complex problems and drive innovation. 
        Let&apos;s discuss how we can work together to bring your AI vision to life.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-12">
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:border-emerald-300 dark:hover:border-emerald-600 group"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                <IconComponent className="text-emerald-600 dark:text-emerald-400 text-xl" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 hover:scale-105 focus:scale-105 active:scale-100 transition shadow-lg"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get In Touch
          <BsArrowRight className="opacity-75 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
