import {RECEIVED_GROUPS, RECEIVED_TODOS} from "../actions/todoActions";

const initialState = {
    appError: undefined,
    visibleProgress: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
        case 'SHOW_ERROR':
            return Object.assign({}, state, {
              visibleProgress: false,
                appError: action.appError
            })
        case 'HIDE_ERROR':
            return Object.assign({}, state, {
                appError: undefined
            })
        case 'SHOW_PROGRESS':
            return Object.assign({}, state, {
              visibleProgress: true
            })
        case 'LOGIN':
        case 'LOGOUT':
        case RECEIVED_TODOS:
        case RECEIVED_GROUPS:
            return Object.assign({}, state, {
              visibleProgress: false,
                appError: undefined
            })
        case 'HIDE_PROGRESS':
            return Object.assign({}, state, {
              visibleProgress: false,
            })
        default:
            return state
    }
}


