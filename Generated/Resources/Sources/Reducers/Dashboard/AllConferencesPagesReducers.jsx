// Actions Types
import {ALL_CONFERENCES_PAGES_LOADING, ALL_CONFERENCES_PAGES_SUCCESS, ALL_CONFERENCES_PAGES_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/ConferencesActionsTypes/AllConferencesPagesActionsTypes";

const AllConferencesPagesReducers = (state, {payload, type}) => {
    switch (type) {
        case ALL_CONFERENCES_PAGES_LOADING :
            return {
                ...state,
                AllConferencesPages: {
                    ...state.AllConferencesPages,
                    Loading: true,
                    Error: false
                }
            }
        case ALL_CONFERENCES_PAGES_SUCCESS :
            return {
                ...state,
                AllConferencesPages: {
                    ...state.AllConferencesPages,
                    Loading: false,
                    Data: payload,
                }
            }
        case ALL_CONFERENCES_PAGES_ERRORS :
            return {
                ...state,
                AllConferencesPages: {
                    ...state.AllConferencesPages,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default AllConferencesPagesReducers;