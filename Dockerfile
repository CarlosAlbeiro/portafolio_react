# Build stage
FROM node:18 AS build
WORKDIR /app


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Restore Nginx config to listen on 8089 and handle SPA routes
RUN echo 'server { \
    listen 8082; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]