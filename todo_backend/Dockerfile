FROM maven:3.9.8-eclipse-temurin-17 AS build

WORKDIR /usr/src/app

# Copy file to working directory
COPY pom.xml .
COPY /src ./src

RUN mvn clean package


FROM gcr.io/distroless/java17-debian12

WORKDIR /usr/app

COPY --from=build /usr/src/app/target/todo_backend.jar /usr/app/todo_backend.jar
# COPY target/todo_backend.jar /usr/app/todo_backend.jar

EXPOSE 8080

CMD [ "java", "-jar", "todo_backend.jar" ]


