FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
# RUN npm test - if you want to test before to build
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]