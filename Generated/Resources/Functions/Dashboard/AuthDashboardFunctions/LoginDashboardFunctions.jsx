import {useContext, useState} from 'react';

// Store Provider
import { AuthStore } from "../../../Sources/Stores/AuthStoreProvider/AuthStoreProvider";

// Actions
import LoginDashboardAction from "../../../Sources/Actions/Dashboard/AuthDashboardActions/LoginDashboardAction";

const LoginDashboardFunctions = () => {
    const [loginDashboard, setLoginDashboard] = useState({});

    const {AuthDashboardState: {DashboardAuth: {Loading, Error, Data}}, AuthDashboardDispatch} = useContext(AuthStore);

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
        LoginDashboardAction(loginDashboard)(AuthDashboardDispatch);
    }

    return {loginDashboard, FormData, FormValid, FormSubmit, Loading, Error, Data};
}

export default LoginDashboardFunctions;