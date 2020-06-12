import { BUTTON_CLICK, } from '../actions/indexAction';

const INITIAL_STATE = {
    indexValues: [
        {id: "1", title: "a"},
        {id: "2", title: "b"},
        {id: "3", title: "c"},
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUTTON_CLICK:
            return {}
        default:
            return state;
    }
}