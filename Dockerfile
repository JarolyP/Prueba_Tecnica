# Use official Node.js 18 image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Expose port 3000 for the backend server
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]



