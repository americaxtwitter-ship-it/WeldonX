export type ProjectCategory = "telegram" | "desktop";

export interface Project {
  id: string;
  title: string;
  displayTitle?: string;
  category: ProjectCategory;
  kind: string;
  status?: string;
  username?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  link?: string;
}

export const telegramBots: Project[] = [
  {
    id: "twitter-x-parsing-bot",
    title: "Twitter X Parsing Bot",
    category: "telegram",
    kind: "Telegram Bot",
    status: "Telegram Bot",
    username: "@Twitter_X_parsing_bot",
    shortDescription:
      "Telegram-бот для поиска, сбора и обработки информации из X/Twitter.",
    fullDescription:
      "Telegram-бот для поиска, сбора и обработки информации из X/Twitter. Позволяет автоматизировать работу с публикациями, фильтрами и результатами парсинга через удобный интерфейс Telegram. Управление ведется прямо в чате: пользователь задает параметры поиска, а бот возвращает отфильтрованные результаты в структурированном виде.",
    technologies: ["Python", "Telegram Bot API", "aiogram", "Parsing", "Automation"],
  },
];

export const desktopApps: Project[] = [
  {
    id: "avitohunter",
    title: "AvitoHunter",
    category: "desktop",
    kind: "Desktop / Parser",
    shortDescription:
      "Desktop-приложение для мониторинга объявлений на Avito.",
    fullDescription:
      "Desktop-приложение для мониторинга объявлений на Avito. Помогает отслеживать новые предложения, изменения цен, историю объявлений и нужные параметры поиска. Данные сохраняются локально, что позволяет анализировать динамику по интересующим позициям.",
    technologies: ["Python", "PySide6", "Parsing", "SQLite", "Automation"],
  },
  {
    id: "ssh-client",
    title: "SSH-CLIENT",
    category: "desktop",
    kind: "Desktop / Developer Tool",
    shortDescription:
      "Desktop-клиент для подключения к удаленным серверам по SSH.",
    fullDescription:
      "Desktop-клиент для подключения к удаленным серверам по SSH. Поддерживает работу с терминалом, файлами через SFTP, просмотр системной информации и выполнение серверных команд. Интерфейс собирает основные инструменты администрирования в одном окне.",
    technologies: ["Electron", "TypeScript", "SSH", "SFTP", "React"],
  },
  {
    id: "ostrov",
    title: "Ostrov",
    displayTitle: "Ostrov",
    category: "desktop",
    kind: "macOS App",
    status: "for macOS",
    shortDescription:
      "Экспериментальное macOS-приложение с минималистичным интерфейсом.",
    fullDescription:
      "Экспериментальное macOS-приложение с минималистичным интерфейсом, созданное как самостоятельный desktop-продукт. Архитектура проекта позволяет позже заменить это описание на более подробное по мере развития приложения.",
    technologies: ["macOS", "Desktop UI"],
  },
  {
    id: "macbrowser",
    title: "Macbrowser",
    category: "desktop",
    kind: "macOS / Browser",
    shortDescription:
      "Минималистичный браузерный desktop-проект для macOS.",
    fullDescription:
      "Минималистичный браузерный desktop-проект для macOS с упором на простой интерфейс, быстрый доступ к нужным функциям и собственную структуру управления вкладками. Основная идея проекта - убрать лишнее и оставить только то, что действительно нужно в ежедневной работе.",
    technologies: ["macOS", "Browser", "Desktop UI"],
  },
  {
    id: "controller-mail",
    title: "Controller_maill",
    displayTitle: "Controller Mail",
    category: "desktop",
    kind: "Desktop / Email Tool",
    shortDescription:
      "Приложение для хранения и управления почтовыми аккаунтами.",
    fullDescription:
      "Приложение для хранения и управления почтовыми аккаунтами. Поддерживает импорт данных, просмотр списка ящиков, проверку их состояния и работу с полученными письмами. Все данные хранятся локально и остаются под контролем пользователя.",
    technologies: ["Python", "IMAP", "Local Storage", "Desktop UI"],
  },
  {
    id: "devstek",
    title: "DevStek",
    category: "desktop",
    kind: "Developer Tool",
    shortDescription:
      "Набор инструментов для разработчика в одном desktop-интерфейсе.",
    fullDescription:
      "Набор инструментов для разработчика, объединенных в одном desktop-интерфейсе. Проект предназначен для автоматизации повторяющихся технических задач и быстрого доступа к рабочим функциям без переключения между разными утилитами.",
    technologies: ["Desktop UI", "Automation", "Developer Tool"],
  },
];

export const directions = [
  "Telegram Bots",
  "Desktop Apps",
  "Automation",
  "Parsing",
  "AI Tools",
];

export const technologies = [
  "Python",
  "TypeScript",
  "React",
  "PySide6",
  "Electron",
  "aiogram",
  "Telethon",
];

export const contactLink = "https://t.me/weldon_adro";
export const contactHandle = "@weldon_adro";
