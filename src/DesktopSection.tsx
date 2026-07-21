import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { desktopApps, type Project } from "../data/projects";
import { stagger, viewportOnce } from "../lib/motion";

export default function DesktopSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="desktop" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="My Desktop"
          subtitle="Desktop-приложения для парсинга, администрирования и повседневных задач."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {desktopApps.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActive}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
