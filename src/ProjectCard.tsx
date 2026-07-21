import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { fadeUp } from "../lib/motion";

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  const title = project.displayTitle ?? project.title;

  return (
    <motion.button
      variants={fadeUp}
      onClick={() => onOpen(project)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 sm:p-7"
      aria-label={`${title}, открыть подробное описание`}
    >
      {/* dynamic top border glow */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-sm text-neutral-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-neutral-400 transition-all duration-300 group-hover:border-neutral-500 group-hover:text-white">
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>

      <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
        {title}
        {project.status && (
          <span className="font-mono text-xs font-normal text-neutral-500">
            {project.status}
          </span>
        )}
      </h3>

      <span className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
        {project.kind}
      </span>

      <p className="mt-4 flex-1 text-sm text-neutral-400">{project.shortDescription}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-base px-2 py-0.5 font-mono text-[11px] text-neutral-500"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.button>
  );
}
