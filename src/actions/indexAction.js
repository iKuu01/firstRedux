export const BUTTON_CLICK = "button_click";
export const BUTTON_SUCCESS= "button_success";
export const BUTTON_FAILED = "button_failed";

export const buttonPress = () => {
    return dispatch => {
        dispatch({
            type: BUTTON_CLICK
        })
    }
}