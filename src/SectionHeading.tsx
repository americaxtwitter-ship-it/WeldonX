import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12"
    >
      <span className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
        <span>{index}</span>
        <span className="h-px w-10 bg-line" />
      </span>
      <h2 className="text-balance text-4xl font-bold tracking-tightest text-white sm:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-neutral-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
