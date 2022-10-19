import { EDIT_SERVICE } from "../actions/actionTypes";

const isEdit = false

const serviceEditReducer = (state = isEdit, action) => {
    switch(action.type) {
        case EDIT_SERVICE:
            return !state
        default:
            return state
    }
}

export default serviceEditReducer