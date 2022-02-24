FROM node:16-alpine as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY ./ ./

EXPOSE 5000

ENV NODE_ENV production

CMD [ "node", "./dist/src/index.js" ]