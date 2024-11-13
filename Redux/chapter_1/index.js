import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger'
import axios from "axios";
import { thunk } from "redux-thunk";


//store 

const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk)
);

const history = [];


//reducer
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case 'getAccUserFulFilled':
            return { amount: action.payload, pending: false };
        case 'getAccUserRejected':
            return { ...state, error: action.error, pending: false };
        case 'getAccUserPending':
            return { ...state, pending: true };
        case 'increment':
            return { amount: state.amount + 1 };
        case 'decrement':
            return { amount: state.amount - 1 };
        case 'incrementByAmount':
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case 'incrementBonus':
            return { points: state.points + 1 }
        case 'incrementByAmount':
            if (action.payload >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}


// Action creators 

function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccUserPending());
            const { data } = await axios.get(`https://localhost:3000/account/${id}`)
            dispatch(getAccUserFulFilled(data.amount));
        } catch (error) {
            dispatch(getAccUserRejected(error.message));
        }

    }
}

function getAccUserFulFilled(value) {
    return { type: 'getAccUserFulFilled', payload: value };
}
function getAccUserRejected(error) {
    return { type: 'getAccUserRejected', error: error };
}
function getAccUserPending(value) {
    return { type: 'getAccUserPending' };
}

function initUser(value) {
    return { type: 'init', payload: value }
}


function increment() {
    return { type: 'increment' }
}
function decreament() {
    return { type: 'decrement' }
}
function incrementByAmount(value) {
    return { type: 'incrementByAmount', payload: value }
}
function incrementBonus(value) {
    return { type: 'incrementBonus' }
}



setInterval(() => {
    store.dispatch(getUserAccount(2));
}, 4000);