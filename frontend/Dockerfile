#Dockerfile фронтенд
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:latest AS prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/conf.d/frontend.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"