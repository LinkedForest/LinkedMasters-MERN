import React, {createContext, useReducer} from 'react';

// Reducers
import AuthDashboardReducers from '../../Reducers/Dashboard/AuthDashboardReducers';
import AuthFrontViewReducers from '../../Reducers/FrontViews/AuthFrontViewReducers';

// Initial
import AuthDashboardInit from "../../Init/DashboardInit/AuthDashboardInit";
import AuthFrontViewInit from "../../Init/FrontViewsInit/AuthFrontViewInit";

export const AuthStore = createContext({});

const AuthStoreProvider = ({children}) => {
    const [AuthDashboardState, AuthDashboardDispatch] = useReducer(AuthDashboardReducers, AuthDashboardInit);
    const [AuthFrontViewState, AuthFrontViewDispatch] = useReducer(AuthFrontViewReducers, AuthFrontViewInit);

    return (
        <AuthStore.Provider value={{
            AuthDashboardState, AuthDashboardDispatch,
            AuthFrontViewState, AuthFrontViewDispatch
        }}>
            {children}
        </AuthStore.Provider>
    )
}

export default AuthStoreProvider;