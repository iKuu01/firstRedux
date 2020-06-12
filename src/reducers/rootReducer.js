import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import IndexReducer from './indexReducer';

export default combineReducers({
    AuthReducer,
    IndexReducer
})