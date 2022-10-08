import { useReducer,useCallback } from 'react';

function httpReducer(state, action) {
    
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
                error:action.errorMessage || 'something went wrong'
            }
        default: {
            throw new Error('Inavlid Action')
        }
    }
}

const useHttp = (requestFunction,startsWithPending=true) => {

    const [httpState, dispatch]=useReducer(httpReducer, {
        data: null,
        status: startsWithPending ? 'pending' : null,
        error: null
    });

    const sendRequest = useCallback(
        async function (requestData) {
            try {
                dispatch({ type: 'SEND' });
                const data = await requestFunction(requestData);
                dispatch({ type: 'SUCCESS', responseData: data });
            }
            catch (e) {
                dispatch({ type: 'ERROR', errorMessage: e.message || 'something went wrong' });
            }
        },
        [requestFunction]
    )

    return { ...httpState, sendRequest };
}

export default useHttp;