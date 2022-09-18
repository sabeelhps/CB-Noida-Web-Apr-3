import React, { useReducer } from 'react';

const countReducer = (state, action) => { //this should return a state
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    }
    else if (action.type === 'DECREMENT') {
        return {
            count: state.count - 1
        }
    }
    else {
        throw new Error('Invalid Operation')
    }
}

const UseReducerDemo = () => {
    // useReducer(reducer function, initial state);
    const [countState, dispatch] = useReducer(countReducer, {
        count: 0
    });

    return (
        <div>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            <h1>Count : { countState.count }</h1>
        </div>
    )
}

export default UseReducerDemo;