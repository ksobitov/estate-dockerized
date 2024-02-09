# Build
FROM node:lts-alpine as builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

# Production
FROM nginx:stable-alpine
EXPOSE 3000
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf
