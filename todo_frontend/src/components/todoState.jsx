import { atom, selector } from 'recoil';
import axios from 'axios';

// Atom to store todos state
export const todosState = atom({
  key: 'todosState',
  default: [],
});

// Selector to fetch todos from the backend
export const todosQuery = selector({
  key: 'todosQuery',
  get: async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/todos');
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
  },
});

// Async function to add a todo
export const addTodo = async (newTodoTitle, setTodos) => {
  try {
    const response = await axios.post('http://localhost:8080/api/todos', {
      title: newTodoTitle,
      completed: false,
    });
    setTodos((prevTodos) => [response.data, ...prevTodos]);
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

// Async function to toggle a todo's completed state
export const toggleTodo = async (todoId, setTodos) => {
  try {
    const currentTodo = await axios.get(`http://localhost:8080/api/todos/${todoId}`);
    const response = await axios.put(`http://localhost:8080/api/todos/${todoId}`, {
      ...currentTodo.data,
      completed: !currentTodo.data.completed
    });
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: response.data.completed } : todo
      )
    );
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
};

// Async function to delete a todo
export const deleteTodo = async (todoId, setTodos) => {
  try {
    await axios.delete(`http://localhost:8080/api/todos/${todoId}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
