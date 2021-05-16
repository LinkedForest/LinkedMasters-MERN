import React, {createContext, useReducer} from 'react';

// Reducers
import AllConferencesReducers from '../../Reducers/Dashboard/AllConferencesReducers';
import AllConferencesPagesReducers from '../../Reducers/Dashboard/AllConferencesPagesReducers';

// Initial
import AllConferencesInit from "../../Init/Dashboard/AllConferencesInit";
import AllConferencesPagesInit from "../../Init/Dashboard/AllConferencesPagesInit";

export const ConferencesStore = createContext({});

const AuthenticationProvider = ({children}) => {
    const [AllConferencesState, AllConferencesDispatch] = useReducer(AllConferencesReducers, AllConferencesInit);
    const [AllConferencesPagesState, AllConferencesPagesDispatch] = useReducer(AllConferencesPagesReducers, AllConferencesPagesInit);

    return (
        <ConferencesStore.Provider value={{
            AllConferencesState, AllConferencesDispatch,
            AllConferencesPagesState, AllConferencesPagesDispatch
        }}>
            {children}
        </ConferencesStore.Provider>
    )
}

export default AuthenticationProvider;