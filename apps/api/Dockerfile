# FROM node:16-alpine as base

# # Create app directory
# WORKDIR /home/node/app

# # Install app dependencies
# COPY package*.json ./
# RUN npm install

# # Bundle app source
# COPY ./ ./

# EXPOSE 5000

# ENV NODE_ENV production

# CMD [ "npx", "ts-node", "src/index.ts" ]

FROM node:alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

FROM node:alpine AS sourcer
RUN apk update
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .

CMD [ "npx", "ts-node", "src/index.ts" ]