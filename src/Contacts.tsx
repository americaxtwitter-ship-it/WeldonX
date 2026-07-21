import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { contactLink, contactHandle } from "../data/projects";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden border-t border-line px-5 py-28 sm:px-8 sm:py-40"
    >
      {/* decorative watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center text-[16vw] font-black leading-none tracking-tightest text-white/[0.02]"
      >
        AVAILABLE FOR PROJECTS
      </span>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500"
        >
          <span>04</span>
          <span className="h-px w-10 bg-line" />
          <span>Контакты</span>
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-balance text-4xl font-bold tracking-tightest text-white sm:text-6xl"
        >
          Let&rsquo;s build something useful.
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-neutral-400">
          Открыт к обсуждению Telegram-ботов, desktop-приложений, автоматизации и небольших
          цифровых продуктов.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-start gap-4">
          <a
            href={contactLink}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Написать в Telegram"
          >
            <Send size={18} />
            Написать в Telegram
          </a>
          <span className="font-mono text-sm text-neutral-500">
            Telegram - {contactHandle}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
