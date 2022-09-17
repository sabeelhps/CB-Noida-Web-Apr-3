import React, { useState, useEffect } from 'react';
import styles from './TodoApp.module.css';
import TodoList from '../TodoList/TodoList';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {
    
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]'); 
    
    const [todos, setTodos] = useState(initialTodos);
    
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const addTodo = (todoInpText) => {
        setTodos((prevState) => {
            return [...prevState, { id: uuid(), todoText: todoInpText, completed: false }];
        });
    }

    const deleteTodo = (todoId) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoId);
        });
    }

    const markTodoCompleted = (todoId) => {
        setTodos((prevState) => {
            return prevState.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        });
    }

    return (
      <section className={styles["todo-app"]}>
            <TodoList
                todos={todos}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                markTodoCompleted={markTodoCompleted}
            />
      </section>
  )
}

export default TodoApp;