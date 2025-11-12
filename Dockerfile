FROM node:22-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY --from=builder /usr/src/app ./

EXPOSE 3000

CMD [ "node", "server.js" ]