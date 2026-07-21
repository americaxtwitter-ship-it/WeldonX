import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroBackdrop from "./HeroBackdrop";
import { contactLink } from "../data/projects";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#bots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-20 sm:px-8"
    >
      <HeroBackdrop />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-neutral-500"
        >
          Personal Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-[15vw] font-black leading-[0.92] tracking-tightest text-white sm:text-[9rem]"
        >
          WeldonX
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-xl font-medium tracking-tight text-neutral-200 sm:text-2xl"
        >
          AI Developer &amp; Product Builder
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-base text-neutral-400"
        >
          I build bots, desktop apps and automation tools.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 max-w-xl text-sm text-neutral-500"
        >
          Создаю Telegram-ботов, desktop-приложения, парсеры и инструменты автоматизации.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Смотреть проекты"
          >
            Смотреть проекты
            <ArrowDown
              size={16}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </button>

          <a
            href={contactLink}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-neutral-500"
            aria-label="Связаться в Telegram"
          >
            Связаться
            <ArrowUpRight
              size={16}
              className="text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-neutral-500 transition-colors hover:text-neutral-300"
        aria-label="Прокрутить вниз"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <span className="relative flex h-8 w-5 justify-center rounded-full border border-line pt-1.5">
            <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-neutral-400" />
          </span>
        </span>
      </motion.button>
    </section>
  );
}
