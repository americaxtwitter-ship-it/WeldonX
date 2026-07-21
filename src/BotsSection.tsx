import SectionHeading from "./SectionHeading";
import ProjectAccordion from "./ProjectAccordion";
import { telegramBots } from "../data/projects";

export default function BotsSection() {
  return (
    <section id="bots" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="My Bots"
          subtitle="Telegram-боты для автоматизации сбора и обработки данных."
        />

        <div className="space-y-4">
          {telegramBots.map((project) => (
            <ProjectAccordion key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
