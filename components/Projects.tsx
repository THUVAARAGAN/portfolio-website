"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-3 sm:space-y-8 flex flex-col items-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            style={{
              transform: index % 2 === 0 ? 'translateX(-5cm)' : 'translateX(5cm)'
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
