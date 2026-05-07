# Etapa 1: Construcción (Build)
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Producción (Servir los archivos estáticos)
FROM nginx:alpine
# Copiamos los archivos compilados de la etapa anterior a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Exponemos el puerto 8082 (el puerto por defecto de Nginx)
EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]