FROM node:16-slim AS builder
RUN apt-get update
RUN apt-get install -y openssl
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-slim AS installer
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

FROM node:16-slim AS sourcer
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN npx prisma generate --schema=packages/prisma/schema.prisma

CMD [ "npx", "ts-node", "apps/api/src/index.ts" ]