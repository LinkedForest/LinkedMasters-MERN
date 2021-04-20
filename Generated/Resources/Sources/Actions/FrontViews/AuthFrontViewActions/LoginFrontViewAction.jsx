// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {LOGIN_ERRORS, LOGIN_LOADING, LOGIN_SUCCESS} from "../FrontViewsActionsTypes/AuthFrontViewActionsTypes/LoginFrontViewActionsTypes";

const LoginFrontViewAction = ({email, password}) => (AuthDashboardDispatch) => {

    AuthDashboardDispatch({
        type: LOGIN_LOADING,
    })

    AxiosInstance()
        .post(`/auth/login`, {email, password})
        .then(Response => {
            localStorage.Authenticated = Response.data;
            AuthDashboardDispatch({
                type: LOGIN_SUCCESS,
                payload: Response.data,
            })
        })
        .catch(Error => (
            AuthDashboardDispatch({
                type: LOGIN_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API',
            })
        ));

}

export default LoginFrontViewAction;