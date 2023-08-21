# Use the official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Expose the port that your Express.js app will listen on
EXPOSE 3000

# Command to start the application with nodemon for hot reloading
CMD ["npm", "start"]
