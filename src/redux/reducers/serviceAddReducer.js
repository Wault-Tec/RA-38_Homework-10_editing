import { CHANGE_SERVICE_FIELD } from "../actions/actionTypes";

const initialState = {
    name: '',
    price: '',
};

const serviceAddReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value}
        default: 
            return state;
    }
}

export default serviceAddReducer