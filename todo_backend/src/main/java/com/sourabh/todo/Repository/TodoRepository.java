package com.sourabh.todo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sourabh.todo.Model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}