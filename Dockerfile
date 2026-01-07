# Etapa de build
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa de deploy
FROM nginx:alpine

# Copiar arquivos de build Angular
COPY --from=build /app/dist/mfe-login /usr/share/nginx/html

# Expor porta e iniciar o servidor
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]