import React, { useEffect, useReducer } from 'react';

const httpReducer = (state, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                data: null,
                status: 'pending',
                error:null
            }
        case 'SUCCESS':
            return {
                data: action.responseData,
                status: 'completed',
                error:null
            }
        case 'ERROR':
            return {
                data: null,
                status: 'completed',
                error:action.errorMessage || 'Something went wrong'
            }
    }

    return state;
}



const HttpRequestDemo = () => {

    const [httpState,dispatch]=useReducer(httpReducer, {
        data: null,
        status: 'pending',
        error: null
    });

    useEffect(() => {
        async function getData() {
            try {
                dispatch({ type: 'SEND' });
                const res = await fetch('https://api.github.com/users/sabeelhps')
                if (res.status !== 200) {
                    throw new Error('Something went wrong');
                }
                const data = await res.json();
                dispatch({ type: 'SUCCESS', responseData: data });
            }
            catch (e) {
                dispatch({ type: 'ERROR', errorMessage: e.message || 'Something went wrong' });
            }
        }
        getData();
    },[]);

    if (httpState.status === 'pending') {
        return <h1>Loading ........</h1>
    }

    if (httpState.error) {
        return <h1>{ httpState.error }</h1>
    }


    return (
        <div>
            {
                httpState.data
                && 
                <figure>
                    <img src={httpState.data.avatar_url} alt={httpState.data.name} />
                    <figcaption>
                        <p>Followers : { httpState.data.followers ? httpState.data.followers : '0'}</p>
                        <p>Following : { httpState.data.following ? httpState.data.following : '0'}</p>
                        {httpState.data.name && <p>Name : { httpState.data.name }</p>}
                    </figcaption>
                </figure>
            }
      </div>
    )
}

export default HttpRequestDemo;