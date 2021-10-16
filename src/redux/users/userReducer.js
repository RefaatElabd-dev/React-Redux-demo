import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST
} from './UserTypes';

const initialState = {
    loading: false,
    users: [],
    error: '' 
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }

        default: return state;
    }
}

export default usersReducer