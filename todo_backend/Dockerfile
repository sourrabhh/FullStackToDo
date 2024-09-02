FROM openjdk:17

COPY target/todo-0.0.1-SNAPSHOT.jar /usr/app/todo_backend.jar

WORKDIR /usr/app

EXPOSE 8080

CMD [ "java", "-jar", "todo_backend.jar" ]
