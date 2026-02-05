"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[9999] relative">
      <motion.div
        className="flex fixed top-0 left-1/2 h-[3rem] w-full rounded-none border border-slate-200/60 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-[0.75rem] sm:top-6 sm:h-[3.25rem] sm:w-[56rem] sm:rounded-full dark:bg-slate-900/95 dark:border-slate-700/50 sm:px-12"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        style={{ zIndex: 9999, isolation: "isolate" }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 z-[10000]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.75rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-3 sm:text-[0.85rem] sm:px-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-3 hover:text-slate-950 transition dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap relative z-10",
                  {
                    "text-slate-950 dark:text-slate-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-200 rounded-full absolute inset-0 -z-10 dark:bg-slate-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
