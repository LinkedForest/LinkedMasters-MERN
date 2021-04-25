import React, {createContext, useState} from 'react';

export const AppearanceStore = createContext({});

const AppearanceProvider = ({children}) => {
    const [DashSideMenu, setDashSideMenu] = useState(true);

    return (
        <AppearanceStore.Provider value={{
            DashSideMenu, setDashSideMenu
        }}>
            {children}
        </AppearanceStore.Provider>
    )
}

export default AppearanceProvider;