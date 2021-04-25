import React from 'react';

// Stores
import AuthenticationProvider from "./Authentication/AuthenticationStore";
import AppearanceProvider from "./Appearance/AppearanceStore";

const MasterProvider = ({children}) => {
    return (
        <React.Fragment>
            <AuthenticationProvider>
                <AppearanceProvider>
                    {children}
                </AppearanceProvider>
            </AuthenticationProvider>
        </React.Fragment>
    );
};

export default MasterProvider;