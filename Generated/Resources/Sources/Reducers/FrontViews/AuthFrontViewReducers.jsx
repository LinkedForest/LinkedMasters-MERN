// Actions Types
import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERRORS} from "../../Actions/FrontViews/FrontViewsActionsTypes/AuthFrontViewActionsTypes/LoginFrontViewActionsTypes";
import {REGISTER_ERRORS, REGISTER_LOADING, REGISTER_SUCCESS} from "../../Actions/FrontViews/FrontViewsActionsTypes/AuthFrontViewActionsTypes/RegisterFrontViewActionsTypes";

const AuthFrontViewReducers = (state, {payload, type}) => {
    switch (type) {
        case REGISTER_LOADING :
        case LOGIN_LOADING :
            return {
                ...state,
                Authentication: {
                    ...state.Authentication,
                    Loading: true,
                    Error: false
                }
            }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
            return {
                ...state,
                Authentication: {
                    ...state.Authentication,
                    Loading: false,
                    Data: payload,
                }
            }
        case REGISTER_ERRORS :
        case LOGIN_ERRORS :
            return {
                ...state,
                Authentication: {
                    ...state.Authentication,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default AuthFrontViewReducers;