import { createStore } from "@reduxjs/toolkit";

const initialState = {
    counter: {
        value: 0
    }
};

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case "increment": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            };
        }
        case "incrementAmount": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);