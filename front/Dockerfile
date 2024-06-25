# Imagen de Nginx
FROM nginx:alpine

# Copiar los archivos HTML al directorio de Nginx
COPY ./src/main/resources/templates /usr/share/nginx/html
COPY ./src/main/resources/static /usr/share/nginx/html/static

# Exponer el puerto en el que Nginx estará escuchando
EXPOSE 80
