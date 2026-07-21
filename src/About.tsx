import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { directions, technologies } from "../data/projects";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="Обо мне" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6 text-lg leading-relaxed text-neutral-300"
          >
            <motion.p variants={fadeUp}>
              Я начинающий AI Developer и разработчик практичных цифровых продуктов. Создаю
              Telegram-ботов, desktop-приложения, парсеры и инструменты автоматизации.
            </motion.p>
            <motion.p variants={fadeUp} className="text-neutral-400">
              Работаю с Python, PySide6, aiogram, Telethon, Electron, React и TypeScript. Мне
              интересны небольшие продукты, которые решают конкретную проблему, экономят время и
              упрощают работу с данными.
            </motion.p>
            <motion.p variants={fadeUp} className="text-neutral-400">
              Использую AI-инструменты для быстрой разработки, тестирования идей и создания рабочих
              MVP.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                Направления
              </h3>
              <div className="flex flex-wrap gap-2">
                {directions.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-neutral-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                Технологии
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee of technologies */}
      <div className="relative mt-20 overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...technologies, ...directions, ...technologies, ...directions].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-600"
            >
              {t}
              <span className="ml-10 text-neutral-800">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
