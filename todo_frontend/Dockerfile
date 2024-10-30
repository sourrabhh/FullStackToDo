# Stage 1: Build stage using a lightweight Node.js image
FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:lts-alpine AS production
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
