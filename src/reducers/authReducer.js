import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_BUTTON_CLICK,
    LOGIN_BUTTON_SUCCESS,
    LOGIN_BUTTON_FAILED
} from '../actions/authAction';

const INITIAL_STATE = {
    emailValue: "",
    passwordValue: "",
    buttonSpinner: false,
    errorValue: "",
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                emailValue: action.payload
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                passwordValue: action.payload
            }
        case LOGIN_BUTTON_CLICK:
            return {

            }
        case LOGIN_BUTTON_SUCCESS:
            return {
                ...state,
                errorValue: action.payload
            }
        case LOGIN_BUTTON_FAILED:
            return {
                ...state,
                errorValue: action.payload

            }
        default:
            return state;
    }
}