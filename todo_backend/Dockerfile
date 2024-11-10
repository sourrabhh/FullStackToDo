
FROM maven:3.9.8-eclipse-temurin-21 AS build

WORKDIR /usr/src/app

COPY pom.xml ./

COPY src  ./src

RUN mvn clean package -DskipTests


FROM gcr.io/distroless/java17-debian12

WORKDIR /usr/app

# Copy the JAR file from the build stage
COPY --from=build  /usr/src/app/target/todo_backend.jar /usr/app/todo_backend.jar

EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "todo_backend.jar"]
