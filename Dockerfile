FROM node 

WORKDIR /app

COPY . .

COPY package.json package-lock.json ./
RUN npm install

RUN npm install -g typescript ts-node

EXPOSE 4000

CMD ["sh", "-c", "npm run dev && npx nodemon"]