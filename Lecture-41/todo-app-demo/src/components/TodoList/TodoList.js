import React from 'react'
import Form from '../Form/Form';
import Todo from '../Todo/Todo';

const TodoList = ({ todos,addTodo,deleteTodo,markTodoCompleted }) => {
    return (
    <section>
            <Form addTodo={addTodo} />
            <ul>
                {
                    todos.map((todo) => {
                        return <Todo
                            key={todo.id}
                            id={todo.id}
                            todoText={todo.todoText}
                            completed={todo.completed}
                            deleteTodo={deleteTodo}
                            markTodoCompleted={markTodoCompleted}
                        />
                    })
                }
            </ul>
    </section>
  )
}

export default TodoList;