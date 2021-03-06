// Actions Types
import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/AuthDashboardActionsTypes/LoginDashboardActionsTypes";
import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/AuthDashboardActionsTypes/RegisterDashboardActionsTypes";

const AuthDashboardReducers = (state, {payload, type}) => {
    switch (type) {
        case REGISTER_LOADING :
        case LOGIN_LOADING :
            return {
                ...state,
                DashboardAuth: {
                    ...state.DashboardAuth,
                    Loading: true,
                    Error: false
                }
            }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
            return {
                ...state,
                DashboardAuth: {
                    ...state.DashboardAuth,
                    Loading: false,
                    Data: payload,
                }
            }
        case REGISTER_ERRORS :
        case LOGIN_ERRORS :
            return {
                ...state,
                DashboardAuth: {
                    ...state.DashboardAuth,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default AuthDashboardReducers;