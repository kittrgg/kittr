FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:16-alpine AS builder
WORKDIR /app
COPY ./ ./
COPY --from=deps /app/node_modules ./node_modules

ARG ENVIRONMENT
ENV ENVIRONMENT ${ENVIRONMENT}

ARG NEXT_PUBLIC_API_PATH
ENV NEXT_PUBLIC_API_PATH ${NEXT_PUBLIC_API_PATH}

ARG NEXT_PUBLIC_ENVIRONMENT
ENV NEXT_PUBLIC_ENVIRONMENT ${NEXT_PUBLIC_ENVIRONMENT}

ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN ${NEXT_PUBLIC_SENTRY_DSN}

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN ${SENTRY_AUTH_TOKEN}

ARG SENTRY_DSN
ENV SENTRY_DSN ${SENTRY_DSN}

RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./package.json

# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "node_modules/.bin/next", "start" ]