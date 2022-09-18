import React, { useEffect,useState } from 'react';

const UseEffectDemo = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Inside use effect');
        const timer = setInterval(() => {
            setCount((prevState) => {
                if (prevState === 10) {
                    clearInterval(timer);
                    setCount(0);
                    return;
                }
                return prevState + 1;
            });
        }, 1000);

        return () => {
            // cleanup function
            clearInterval(timer);
        }
    },[]);
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://jsonplaceholder.typicode.com/todos/100', {
            signal:signal
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        
        
        return () => {
            // cleanup function
            controller.abort();
        }
    },[])

    console.log('Inside Component');
  
    return (
        <div>
            <h1>UseEffectDemo</h1>
            <h2>Count : {count}</h2>
         </div>
    )
}

export default UseEffectDemo;