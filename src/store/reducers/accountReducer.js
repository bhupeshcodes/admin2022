import { ACCOUNT_INITALIZE, LOGIN, LOGOUT } from '../actions/actions';

export const initialState = {
    token: '',
    isLoggedIN: false,
    isInitialized: false,
    user: null
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_INITALIZE: {
            const { isLoggedIN, user, token } = action.payload;
            return {
                ...state,
                isLoggedIN,
                isInitialized: true,
                user,
                token
            };
        }
        case LOGIN: {
            const { user } = action.payload;
            return {
                ...state,
                isLoggedIN: true,
                user
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIN: false,
                token: '',
                user: null
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default accountReducer;
