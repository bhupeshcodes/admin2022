import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './reducers/customizationReducer';
import accountReducer from './reducers/accountReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    account: accountReducer,
});

export default reducer;
