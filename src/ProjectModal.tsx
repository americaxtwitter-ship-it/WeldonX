import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import TechTags from "./TechTags";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const title = project?.displayTitle ?? project?.title;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-elevated p-6 glow-soft sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {project.kind}
                </span>
                <h3 className="mt-2 flex flex-wrap items-baseline gap-2 text-2xl font-bold tracking-tight text-white">
                  {title}
                  {project.status && (
                    <span className="font-mono text-xs font-normal text-neutral-500">
                      {project.status}
                    </span>
                  )}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-neutral-400 transition-colors hover:text-white"
                aria-label="Закрыть окно"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              {project.fullDescription}
            </p>

            <div className="mt-6">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                Технологии
              </h4>
              <TechTags items={project.technologies} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
