# Use an official Node.js runtime as a base image
FROM node:latest


# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY COPY . /usr/src/app

# Install app dependencies
RUN npm install



# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]

