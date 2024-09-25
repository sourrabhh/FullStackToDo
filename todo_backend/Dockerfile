
# Use a minimal base image
FROM gcr.io/distroless/java17-debian12

# Copy the JAR file from the build stage
COPY  target/todo_backend.jar /usr/app/todo_backend.jar

WORKDIR /usr/app

EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "todo_backend.jar"]
