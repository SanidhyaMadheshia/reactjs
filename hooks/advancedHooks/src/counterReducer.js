const initialState = {
    count : 0
};

import { useReducer } from 'react';
function counterReducer(state , action ) {
    switch(action.type) {
        case 'increment' : 
            return {
                ...state, 
                count : state.count +1
            };
        case 'decrement' :
            return {                ...state, 
                count : state.count -1
            };
        case 'reset' :
            return {
                ...state, 
                count : 0
            };
        case 'incrementByAmount' :
            return {
                ...state, 
                count : state.count + action.payload
            };
        case 'decrementByAmount' :
            return {
                ...state, 
                count : state.count - action.payload
            };
        default: 
            return state;
    }
}

// const [state , dispatch ]= useReducer(counterReducer, initialState);

export {initialState, counterReducer}   