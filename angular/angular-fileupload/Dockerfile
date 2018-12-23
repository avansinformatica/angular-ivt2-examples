# Create image based on the official Node image from dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy all the code needed to run the application into the working directory
COPY . /usr/src/app

# Copy dependency definitions
# COPY package.json /usr/src/app
# COPY angular.json /usr/src/app

# Install dependecies
RUN npm install
# RUN npm run postinstall
WORKDIR /usr/src/app/client
RUN ../node_modules/@angular/cli/bin/ng build --configuration=docker
WORKDIR /usr/src/app

# Set environment variables
ENV NODE_ENV=production

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["node", "server.js"]