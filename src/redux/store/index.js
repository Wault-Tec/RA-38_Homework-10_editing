import {legacy_createStore, combineReducers} from "redux";
import serviceAddReducer from "../reducers/serviceAddReducer";
import serviceEditReducer from "../reducers/serviceEditReducer";
import serviceListReducer from "../reducers/serviceListReducer";
import serviceSearchReducer from "../reducers/serviceSearchReducer";


function configureStore() {
    return legacy_createStore(
        combineReducers(
            {
                serviceList: serviceListReducer,
                serviceAdd: serviceAddReducer,
                serviceEdit: serviceEditReducer,
                serviceSearch: serviceSearchReducer
            }
        ),
        undefined,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default configureStore;