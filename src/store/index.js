import { createStore } from "redux";

const counterReducer = (state = {counter:66}, action) => {
    switch (action.type) {
        case "increment":
            return {counter: state.counter + action.payload};
        case "decrement":
            return {counter: state.counter - action.payload};
        case "reset":
            return {counter: 0}
        default:
            return state;
    }
}

export const store = createStore(counterReducer);