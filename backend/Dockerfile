# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the app files
COPY . .

# Expose your backend port (5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
