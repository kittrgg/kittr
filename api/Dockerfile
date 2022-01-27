FROM node:16 as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY ./ ./

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 5000
CMD [ "node", "-r", "tsconfig-paths/register", "build/index.js" ]