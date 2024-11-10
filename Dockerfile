# Шаг 1: Используем Node.js как базовый образ
FROM node:21-alpine

# Шаг 2: Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Шаг 3: Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Шаг 4: Устанавливаем все зависимости
RUN npm install

# Шаг 5: Копируем все файлы проекта в контейнер
COPY . .

# Шаг 6: Собираем проект (создаем production-сборку)
RUN npm run build

# Шаг 7: Устанавливаем "serve" — простой сервер для раздачи статических файлов
RUN npm install -g serve

# Шаг 8: Указываем команду для запуска приложения
CMD ["serve", "-s", "build", "-l", "80"]
