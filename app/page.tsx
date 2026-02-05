import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import ProjectGallery from "@/components/ProjectGallery";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import WorkWithMe from "@/components/WorkWithMe";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mb-10 ">
      <Intro />
      <ProjectGallery />
      <SectionDivider />
      <About />
      <Education />
      <Certifications />
      <Achievements />
      <Projects />
      <Skills />
      <Testimonials />
      <WorkWithMe />
      <Blog />
      <Contact />
    </main>
  );
}
