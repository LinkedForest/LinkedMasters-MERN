// Actions Types
import {ALL_CONFERENCES_LOADING, ALL_CONFERENCES_SUCCESS, ALL_CONFERENCES_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/ConferencesActionsTypes/AllConferencesActionsTypes";

const AllConferencesReducers = (state, {payload, type}) => {
    switch (type) {
        case ALL_CONFERENCES_LOADING :
            return {
                ...state,
                AllConferences: {
                    ...state.AllConferences,
                    Loading: true,
                    Error: false
                }
            }
        case ALL_CONFERENCES_SUCCESS :
            return {
                ...state,
                AllConferences: {
                    ...state.AllConferences,
                    Loading: false,
                    Data: payload,
                }
            }
        case ALL_CONFERENCES_ERRORS :
            return {
                ...state,
                AllConferences: {
                    ...state.AllConferences,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default AllConferencesReducers;