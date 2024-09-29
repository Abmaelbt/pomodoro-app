# Dockerfile for backend
FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port your backend app runs on
EXPOSE 5000

# Command to run the Node.js server
CMD ["node", "index.js"]
