import {
    ON_USERS_LOADED
} from '../action-types';

const initialState = {
    users: []
}

// const reducer = (state = {counter: 0}, action) => {
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_USERS_LOADED: {
            return {
                ...state,
                users: action.payload
            }
        }

        default:
            // console.log('action', action.type, 'does not exist');
            return state;
    }
}

export default reducer