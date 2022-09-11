import React from 'react'
import useToggle from '../hooks/useToggle';

const Happy = () => {

    const [isHappy, toggleIsHappy] = useToggle(false); 

    return (
        <div>
            <h1 onClick={toggleIsHappy}> { isHappy ? '😄' : '🙁'}  </h1>
      </div>
    )
}

export default Happy;