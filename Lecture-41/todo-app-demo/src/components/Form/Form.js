import React, { useState } from 'react';
import useFormInp from '../../hooks/useFormInp';
import styles from './Form.module.css';

const Form = (props) => {

    const [todoInp, setTodoInp, resetTodoInp] = useFormInp();
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (todoInp.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.addTodo(todoInp);
        resetTodoInp();
        setIsValid(true);
    }

    const inputChangeHandler = (event) => {
        setTodoInp(event);
        setIsValid(true);
    }

    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <h1 className={styles.heading}>Add Todos</h1>
            <div>
                <input
                    onChange={inputChangeHandler}
                    className={`${styles["form-input"]} ${!isValid ? styles.warning: ''}`}
                    type="text"
                    placeholder="Add Todos"
                    id="todo"
                    value={todoInp}
                />
            </div>
            <button className={styles['form-btn']}>Add</button>
      </form>
    )
}

export default Form;