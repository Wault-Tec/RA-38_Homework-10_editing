import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, SEARCH_SERVICE } from "./actionTypes";


export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}}
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}}
}

export function editService() {
    return {type: EDIT_SERVICE}
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function searchService(text) {
    return {type: SEARCH_SERVICE, payload: text}
}