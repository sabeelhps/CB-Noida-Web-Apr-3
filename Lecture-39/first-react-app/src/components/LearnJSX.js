import React from 'react';
import Home from './Home';

const LearnJSX = () => {

    const noOnDie = Math.floor(Math.random() * 6 + 1);

    const luckyNum = 3;

    let element = null;

    if (noOnDie % 2 === 0) {
        element = <p>No on the die is EVEN!</p>
        
    } else {
        element=<p>No on the die is Odd!</p>
    }

    const isLogin = Boolean(Math.floor(Math.random() * 2));

    console.log(isLogin);

    return (
        <div>
            {isLogin && <Home/> }
            <h1>This is a heading { Math.floor(Math.random()*10)}</h1>
            <h2>The number on the dice is { noOnDie }</h2>
            {noOnDie === luckyNum ?
                <img src="https://media1.giphy.com/media/2sXf9PbHcEdE1x059I/200.gif?cid=ecf05e47452z468fx7fs22xnkuogk57nz9n036u4d2upmfwo&rid=200.gif&ct=g" /> 
                : <p>Not a lucky number 🥲🥲🥲🥲</p>
            }
            {element}
        </div>
    )
}

export default LearnJSX;
