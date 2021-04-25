import {useContext, useState} from 'react';

// Store Provider
import { AuthenticationStore } from "../../../Sources/Stores/Authentication/AuthenticationStore";

// Actions
import LoginFrontViewAction from "../../../Sources/Actions/FrontViews/AuthFrontViewActions/LoginFrontViewAction";

const LoginFrontViewFunctions = () => {
    const [loginFrontView, setLoginFrontView] = useState({});

    const {AuthFrontViewState: {FrontViewAuth: {Loading, Error, Data}}, AuthFrontViewDispatch} = useContext(AuthenticationStore);

    // Get Form Data
    const FormData = (event) => {
        const { target: { value, name } } = event;
        setLoginFrontView({...loginFrontView, [name]: value});
    };

    // Form Validation
    const FormValid =
        !loginFrontView.email?.length ||
        !loginFrontView.password?.length

    // Form Submit
    const FormSubmit = () => {
        LoginFrontViewAction(loginFrontView)(AuthFrontViewDispatch);
    }

    return {loginFrontView, FormData, FormValid, FormSubmit, Loading, Error, Data};
}

export default LoginFrontViewFunctions;