# WeldonX Portfolio

Персональный сайт-портфолио разработчика Telegram-ботов, desktop-приложений и инструментов автоматизации. Одностраничный сайт с плавным скроллом, крупной типографикой и аккуратными анимациями.

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Запуск

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу, который выведет Vite (по умолчанию http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

## Структура

```
reyxhacker-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/
    │   └── projects.ts        Все данные о проектах и контактах
    ├── lib/
    │   └── motion.ts          Общие варианты анимаций Framer Motion
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── HeroBackdrop.tsx
        ├── About.tsx
        ├── SectionHeading.tsx
        ├── BotsSection.tsx
        ├── DesktopSection.tsx
        ├── ProjectAccordion.tsx
        ├── ProjectCard.tsx
        ├── ProjectModal.tsx
        ├── TechTags.tsx
        ├── Contacts.tsx
        └── Footer.tsx
```

## Изменение данных

Все проекты, направления, технологии и контакты вынесены в `src/data/projects.ts`.
Компоненты не содержат захардкоженных данных, поэтому для правок достаточно менять этот файл.
