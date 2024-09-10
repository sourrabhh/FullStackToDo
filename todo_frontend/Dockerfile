# Stage 1: Build stage using a lightweight Node.js image
FROM node:lts-alpine 

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]