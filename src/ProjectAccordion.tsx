import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Project } from "../data/projects";
import TechTags from "./TechTags";

interface Props {
  project: Project;
}

export default function ProjectAccordion({ project }: Props) {
  const [open, setOpen] = useState(false);
  const title = project.displayTitle ?? project.title;

  return (
    <motion.div
      layout
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-neutral-600"
    >
      {/* subtle top glow line on hover */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
        aria-expanded={open}
        aria-label={`${title}, раскрыть описание`}
      >
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line bg-base px-3 py-1 font-mono text-xs text-neutral-400">
              {project.kind}
            </span>
            {project.username && (
              <span className="font-mono text-xs text-neutral-500">{project.username}</span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>

          <p className="mt-3 max-w-2xl text-sm text-neutral-400 sm:text-base">
            {project.shortDescription}
          </p>

          <div className="mt-5">
            <TechTags items={project.technologies} />
          </div>
        </div>

        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-neutral-400 transition-colors group-hover:border-neutral-500 group-hover:text-white">
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={18} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-6 pb-8 pt-6 sm:px-8">
              <p className="max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
