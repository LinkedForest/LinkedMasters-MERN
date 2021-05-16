import React from 'react';

// Stores
import AuthenticationProvider from "./Authentication/AuthenticationStore";
import AppearanceProvider from "./Appearance/AppearanceStore";
import ConferencesProvider from "./Conferences/ConferencesStore";

const MasterProvider = ({children}) => {
    return (
        <React.Fragment>
            <AuthenticationProvider>
                <AppearanceProvider>
                    <ConferencesProvider>
                        {children}
                    </ConferencesProvider>
                </AppearanceProvider>
            </AuthenticationProvider>
        </React.Fragment>
    );
};

export default MasterProvider;