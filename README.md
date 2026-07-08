src/
├── assets/                  # Статика (шрифты, изображения, SVG)
│   ├── fonts/
│   ├── icons/               # Кастомные SVG-иконки в виде React-компонентов
│   └── images/              # Отрендеренные изображения окон, текстуры дерева
│
├── components/              # Глобальные, изолированные UI-элементы (Дизайн-система)
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   ├── Slider/
│   │   │   ├── Slider.tsx
│   │   │   └── Slider.css
│   │   └── Accordion/
│   │       ├── Accordion.tsx
│   │       └── Accordion.css
│   │
│   └── layout/              # Каркас сайта
│       ├── Header/
│       │   ├── Header.tsx
│       │   └── Header.css
│       └── Footer/
│
├── features/                # Бизнес-модули / Крупные секции лендинга
│   ├── hero/                # Главный экран
│   │   ├── Hero.tsx
│   │   └── Hero.css
│   │
│   ├── product-specs/       # Таблица характеристик (из файла 150f145b-71dd-4d35-9d4c-c760ebf64c74)
│   │   ├── components/      # Внутренние подкомпоненты фичи (например, TabButton)
│   │   ├── ProductSpecs.tsx
│   │   └── ProductSpecs.css
│   │
│   ├── benefits/            # Блок преимуществ (из файла 93fb9a1a-671f-4f16-9f57-2f7b915600c3)
│   │   ├── Benefits.tsx
│   │   └── Benefits.css
│   │
│   └── order-calculator/    # Интерактивный калькулятор стоимости остекления
│       ├── hooks/           # Внутренний хук калькулятора (useCalculator)
│       ├── OrderCalculator.tsx
│       └── OrderCalculator.css
│
├── hooks/                   # Глобальные кастомные хуки (useMediaQuery, useClickOutside)
├── types/                   # Глобальные TypeScript интерфейсы (продукт, калькулятор)
├── utils/                   # Хелперы (форматирование цен, валидаторы форм)
│
├── App.tsx                  # Точка сборки модулей страницы
├── main.tsx
└── index.css                # Глобальные переменные, сброс стилей (reset/normalize)