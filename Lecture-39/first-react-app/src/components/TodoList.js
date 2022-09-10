import React from 'react';
import Todo from './Todo';

const TodoList = () => {

    const todos = [
        {   
            id:1,
            todoText: "Learn React",
            isCompleted:false
        },
        {   
            id:2,
            todoText: "Go to Gym",
            isCompleted:false
        }, {   
            id:3,
            todoText: "Watch Movie",
            isCompleted:false
        },
        {   
            id:4,
            todoText: "Buy Vegetables",
            isCompleted:false
        },
        {
            id: 5,
            todoText: "This is new todo",
            isCompleted:true
        }
    ]


    // const transformedTodos = todos.map((todo) => {
    //     return <li>{todo.todoText}</li>
    // });


    return (
        <ul>
            {todos.map((todo) => {
                return <Todo todoText={ todo.todoText}/>
           })}
      </ul>
    )
}

export default TodoList