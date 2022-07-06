FROM node:16-alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

FROM node:16-alpine AS sourcer
RUN apk update
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore

ENV PORT 3000
EXPOSE 3000

RUN yarn turbo run build test --scope=web --includeDependencies --no-deps

CMD ["yarn", "start"]