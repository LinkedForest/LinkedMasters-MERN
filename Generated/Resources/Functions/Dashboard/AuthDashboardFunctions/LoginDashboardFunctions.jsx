import {useContext, useState} from 'react';

// React Route
import {useHistory} from "react-router-dom";

// Stores
import { AuthenticationStore } from "../../../Sources/Stores/Authentication/AuthenticationStore";

// Actions
import LoginDashboardAction from "../../../Sources/Actions/Dashboard/AuthDashboardActions/LoginDashboardAction";

const LoginDashboardFunctions = () => {
    const History = useHistory();
    const [loginDashboard, setLoginDashboard] = useState({});

    const {AuthDashboardState: {DashboardAuth: {Loading, Error, Data}}, AuthDashboardDispatch} = useContext(AuthenticationStore);

    // Get Form Data
    const FormData = (event) => {
        const { target: { value, name } } = event;
        setLoginDashboard({...loginDashboard, [name]: value});
    };

    // Form Validation
    const FormValid =
        !loginDashboard.email?.length ||
        !loginDashboard.password?.length

    // Form Submit
    const FormSubmit = () => {
        LoginDashboardAction(History)(loginDashboard)(AuthDashboardDispatch);
    }

    return {loginDashboard, FormData, FormValid, FormSubmit, Loading, Error, Data};
}

export default LoginDashboardFunctions;