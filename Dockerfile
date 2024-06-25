# Imagen de Maven
FROM maven:3.8.4-openjdk-11-slim AS build

# Establecer app como directorio principal
WORKDIR /app

# Copiar pom.xml a la imagen y resolver dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el resto del codigo y compilar aplicación
COPY src ./src
RUN mvn package -DskipTests

# Imagen OpenJDK para iniciar aplicación
FROM openjdk:11-jre-slim

# Copia el archivo JAR de la etapa de construcción
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar /usr/app/demo.jar

# Establecer usr/app como directorio de trabajo
WORKDIR /usr/app

# Puerto en el que se inicia SpringBoot
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "demo.jar"]
