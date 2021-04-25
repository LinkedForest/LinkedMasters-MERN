// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {LOGIN_ERRORS, LOGIN_LOADING, LOGIN_SUCCESS} from "../DashboardActionsTypes/AuthDashboardActionsTypes/LoginDashboardActionsTypes";

const LoginDashboardAction = (History) => ({email, password}) => (AuthDashboardDispatch) => {

    AuthDashboardDispatch({
        type: LOGIN_LOADING
    })

    AxiosInstance()
        .post(`/dash-auth/login`, {email, password})
        .then(Response => {
            localStorage.AuthDashboard = Response.data.token;
            History.push("/dashboard");
            AuthDashboardDispatch({
                type: LOGIN_SUCCESS,
                payload: Response.data
            });
        })
        .catch(Error => (
            AuthDashboardDispatch({
                type: LOGIN_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API'
            })
        ));

}

export default LoginDashboardAction;