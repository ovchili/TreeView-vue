# MStroy Frontend Test Task

Тестовое задание: реализация хранилища `TreeStore` на TypeScript и Vue-компонента с использованием AgGrid.

## 📦 Структура проекта

```
mstroy-test-task/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── types.ts           # интерфейс TreeItem
│   ├── TreeStore.ts       # класс хранилища
│   ├── components/
│   │   └── TreeGrid.vue   # компонент с таблицей AgGrid
│   └── main.ts            # вход в приложение
└── tests/
    └── TreeStore.test.ts  # unit-тесты для TreeStore
```

## 🚀 Запуск проекта

1. Установить зависимости:

```bash
npm install
```

2. Запустить dev-сервер:

```bash
npm run dev
```

По умолчанию приложение доступно на [http://localhost:5173](http://localhost:5173).

3. Прогнать unit-тесты:

```bash
npm run test
```

## 🛠 Технологии

- **Vue 3** (Composition API + `<script setup>` + TypeScript)
- **AgGrid Vue 3** — таблица с поддержкой tree data
- **Vite** — сборка и запуск dev-сервера
- **Vitest** — unit-тесты
- **TypeScript** — строгая типизация

## 📚 TreeStore API

Класс `TreeStore` принимает в конструктор массив объектов с полями `id` и `parent` (и любыми произвольными данными).

Методы:

- `getAll()` — возвращает все элементы.
- `getItem(id)` — возвращает элемент по `id`.
- `getChildren(id)` — возвращает прямых потомков элемента.
- `getAllChildren(id)` — возвращает всех потомков на всех уровнях.
- `getAllParents(id)` — возвращает путь от элемента к корню.
- `addItem(item)` — добавляет элемент.
- `removeItem(id)` — удаляет элемент и его потомков.
- `updateItem(item)` — обновляет элемент.

Все операции оптимизированы для работы через `Map`, что минимизирует количество обходов массива.

## 📊 Компонент TreeGrid.vue

- Использует `<AgGridVue />` для отображения элементов `TreeStore`.
- Столбцы:

  - **№ п/п** — порядковый номер строки.
  - **Название** — значение поля `label`.
  - **Категория** — "Группа" (если есть потомки) или "Элемент".

- Дерево строится с помощью `treeData` и `getDataPath`.

## ✅ Тесты

`tests/TreeStore.test.ts` покрывает все методы `TreeStore`:

- создание и получение элементов,
- поиск детей и родителей,
- добавление, обновление и удаление элементов.

Запуск:

```bash
npm run test
```
