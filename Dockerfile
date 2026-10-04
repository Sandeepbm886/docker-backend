FROM node:jod-trixie-slim

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]