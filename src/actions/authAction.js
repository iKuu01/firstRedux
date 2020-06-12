export const EMAIL_CHANGE = "email_change";
export const PASSWORD_CHANGE = "password_change";

export const LOGIN_BUTTON_CLICK = "login_button_click";
export const LOGIN_BUTTON_SUCCESS = "login_button_success";
export const LOGIN_BUTTON_FAILED = "login_button_failed";


export const emailChange = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    }
}

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const loginButton = (emailValue, passwordValue) => {
    console.log("action",{emailValue, passwordValue})
    return dispatch => {
        dispatch({
            type: LOGIN_BUTTON_CLICK,
        })
        if(emailValue == "ahmet" && passwordValue == "1234") {
            dispatch({
                type: LOGIN_BUTTON_SUCCESS,
                payload: "İşlem başarılı"
            })
        } else {
            dispatch({
                type: LOGIN_BUTTON_FAILED,
                payload: "kırmızı şortli"
            })
        }
    }
}