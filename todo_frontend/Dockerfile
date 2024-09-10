# Stage 1: Build stage using a lightweight Node.js image
FROM node:lts-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (if applicable, e.g., if you're using Webpack or similar)
RUN npm run build

# Stage 2: Use distroless base image for production
FROM gcr.io/distroless/nodejs:18

# Set the working directory in the distroless image
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Set environment to production
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
