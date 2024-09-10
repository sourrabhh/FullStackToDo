FROM openjdk:17

COPY target/todo_backend.jar /usr/app/todo_backend.jar

WORKDIR /usr/app

EXPOSE 8080

CMD [ "java", "-jar", "todo_backend.jar" ]
