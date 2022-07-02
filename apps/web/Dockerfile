FROM node:alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=web --docker

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
COPY .gitignore .gitignore

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN ${SENTRY_AUTH_TOKEN}

ARG SENTRY_ORG
ENV SENTRY_ORG ${SENTRY_ORG}

ARG SENTRY_URL
ENV SENTRY_URL ${SENTRY_URL}

ARG SENTRY_PROJECT
ENV SENTRY_PROJECT ${SENTRY_PROJECT}

RUN yarn turbo run build test --scope=web --includeDependencies --no-deps