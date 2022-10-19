import { SEARCH_SERVICE } from "../actions/actionTypes"

const seatchText = '';

const serviceSearchReducer = (state = seatchText, action) => {
    switch(action.type) {
        case SEARCH_SERVICE:
            state = action.payload
            return state
        default: 
            return state
    }
}

export default serviceSearchReducer