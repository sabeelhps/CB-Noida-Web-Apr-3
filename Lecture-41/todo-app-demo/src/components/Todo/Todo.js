import React from 'react';
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ id,todoText, completed,deleteTodo,markTodoCompleted }) => {
  
  return (
      <li className={styles.todo}>
          <input onChange={()=>markTodoCompleted(id)}  type="checkbox" defaultChecked={ completed } />
          <span style={{textDecoration : completed ? 'line-through' : 'none'}} className={styles["todo-text"]}>{ todoText}</span>
          <span onClick={()=>deleteTodo(id)} className={styles["todo-icon"]}><FaTrashAlt/></span>
    </li>
  )
}

export default Todo;