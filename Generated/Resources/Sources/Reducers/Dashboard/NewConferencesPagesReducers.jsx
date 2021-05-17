// Actions Types
import {NEW_CONFERENCES_PAGES_LOADING, NEW_CONFERENCES_PAGES_SUCCESS, NEW_CONFERENCES_PAGES_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/ConferencesActionsTypes/NewConferencesPagesActionsTypes";

const NewConferencesPagesReducers = (state, {payload, type}) => {
    switch (type) {
        case NEW_CONFERENCES_PAGES_LOADING :
            return {
                ...state,
                NewConferencesPages: {
                    ...state.NewConferencesPages,
                    Loading: true,
                    Error: false
                }
            }
        case NEW_CONFERENCES_PAGES_SUCCESS :
            return {
                ...state,
                NewConferencesPages: {
                    ...state.NewConferencesPages,
                    Loading: false,
                    Data: payload,
                }
            }
        case NEW_CONFERENCES_PAGES_ERRORS :
            return {
                ...state,
                NewConferencesPages: {
                    ...state.NewConferencesPages,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default NewConferencesPagesReducers;