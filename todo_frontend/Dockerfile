# Use a lightweight Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Expose the port your application runs on (optional)
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
