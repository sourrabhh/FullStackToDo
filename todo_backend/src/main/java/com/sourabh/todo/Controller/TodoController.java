package com.sourabh.todo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sourabh.todo.Model.Todo;
import com.sourabh.todo.Repository.TodoRepository;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
//@CrossOrigin(origins = "http://localhost:3000") // Adjust as per your frontend URL
@CrossOrigin(origins = "ae4160162054a400087b6a34a6db22e8-966672813.us-east-1.elb.amazonaws.com:3000") 
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setTitle(todoDetails.getTitle());
        todo.setCompleted(todoDetails.isCompleted());
        final Todo updatedTodo = todoRepository.save(todo);
        return ResponseEntity.ok(updatedTodo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        todoRepository.delete(todo);
        return ResponseEntity.noContent().build();
    }
}