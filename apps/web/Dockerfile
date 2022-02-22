FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci --production

FROM node:16-alpine AS builder
WORKDIR /app
COPY ./ ./
COPY --from=deps /app/node_modules ./node_modules

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

# TODO: Use standalone as seen here: https://github.com/vercel/next.js/tree/canary/examples/with-docker
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "node_modules/.bin/next", "start" ]