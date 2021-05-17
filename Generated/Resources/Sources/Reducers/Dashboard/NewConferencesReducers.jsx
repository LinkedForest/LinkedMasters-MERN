// Actions Types
import {NEW_CONFERENCES_LOADING, NEW_CONFERENCES_SUCCESS, NEW_CONFERENCES_ERRORS} from "../../Actions/Dashboard/DashboardActionsTypes/ConferencesActionsTypes/NewConferencesActionsTypes";

const NewConferencesReducers = (state, {payload, type}) => {
    switch (type) {
        case NEW_CONFERENCES_LOADING :
            return {
                ...state,
                NewConferences: {
                    ...state.NewConferences,
                    Loading: true,
                    Error: false
                }
            }
        case NEW_CONFERENCES_SUCCESS :
            return {
                ...state,
                NewConferences: {
                    ...state.NewConferences,
                    Loading: false,
                    Data: payload,
                }
            }
        case NEW_CONFERENCES_ERRORS :
            return {
                ...state,
                NewConferences: {
                    ...state.NewConferences,
                    Loading: false,
                    Error: payload,
                }
            }
        default :
            return state;
    }
}

export default NewConferencesReducers;