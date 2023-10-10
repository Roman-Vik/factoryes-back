# Этап сборки для разработки
FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 4000

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]