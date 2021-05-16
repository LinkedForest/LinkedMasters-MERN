import React, {createContext, useReducer} from 'react';

// Reducers
import AuthDashboardReducers from '../../Reducers/Dashboard/AuthDashboardReducers';
import AuthFrontViewReducers from '../../Reducers/FrontViews/AuthFrontViewReducers';

// Initial
import AuthDashboardInit from "../../Init/Dashboard/AuthDashboardInit";
import AuthFrontViewInit from "../../Init/FrontViews/AuthFrontViewInit";

export const AuthenticationStore = createContext({});

const AuthenticationProvider = ({children}) => {
    const [AuthDashboardState, AuthDashboardDispatch] = useReducer(AuthDashboardReducers, AuthDashboardInit);
    const [AuthFrontViewState, AuthFrontViewDispatch] = useReducer(AuthFrontViewReducers, AuthFrontViewInit);

    return (
        <AuthenticationStore.Provider value={{
            AuthDashboardState, AuthDashboardDispatch,
            AuthFrontViewState, AuthFrontViewDispatch
        }}>
            {children}
        </AuthenticationStore.Provider>
    )
}

export default AuthenticationProvider;