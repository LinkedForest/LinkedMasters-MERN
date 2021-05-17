import React, {createContext, useReducer} from 'react';

// Reducers
import AllConferencesReducers from '../../Reducers/Dashboard/AllConferencesReducers';
import NewConferencesReducers from '../../Reducers/Dashboard/NewConferencesReducers';
import AllConferencesPagesReducers from '../../Reducers/Dashboard/AllConferencesPagesReducers';
import NewConferencesPagesReducers from '../../Reducers/Dashboard/NewConferencesPagesReducers';

// Initial
import AllConferencesInit from "../../Init/Dashboard/AllConferencesInit";
import NewConferencesInit from "../../Init/Dashboard/NewConferencesInit";
import AllConferencesPagesInit from "../../Init/Dashboard/AllConferencesPagesInit";
import NewConferencesPagesInit from "../../Init/Dashboard/NewConferencesPagesInit";

export const ConferencesStore = createContext({});

const AuthenticationProvider = ({children}) => {
    const [AllConferencesState, AllConferencesDispatch] = useReducer(AllConferencesReducers, AllConferencesInit);
    const [NewConferencesState, NewConferencesDispatch] = useReducer(NewConferencesReducers, NewConferencesInit);
    const [AllConferencesPagesState, AllConferencesPagesDispatch] = useReducer(AllConferencesPagesReducers, AllConferencesPagesInit);
    const [NewConferencesPagesState, NewConferencesPagesDispatch] = useReducer(NewConferencesPagesReducers, NewConferencesPagesInit);

    return (
        <ConferencesStore.Provider value={{
            AllConferencesState, AllConferencesDispatch,
            NewConferencesState, NewConferencesDispatch,
            AllConferencesPagesState, AllConferencesPagesDispatch,
            NewConferencesPagesState, NewConferencesPagesDispatch
        }}>
            {children}
        </ConferencesStore.Provider>
    )
}

export default AuthenticationProvider;