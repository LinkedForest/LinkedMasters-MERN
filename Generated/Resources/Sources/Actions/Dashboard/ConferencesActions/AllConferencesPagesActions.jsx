// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {ALL_CONFERENCES_PAGES_LOADING, ALL_CONFERENCES_PAGES_SUCCESS, ALL_CONFERENCES_PAGES_ERRORS} from "../DashboardActionsTypes/ConferencesActionsTypes/AllConferencesPagesActionsTypes";

const AllConferencesPagesAction = (AllConferencesPagesDispatch) => {

    AllConferencesPagesDispatch({
        type: ALL_CONFERENCES_PAGES_LOADING
    });

    AxiosInstance()
        .get(`/conference-pages`)
        .then(Response => {
            AllConferencesPagesDispatch({
                type: ALL_CONFERENCES_PAGES_SUCCESS,
                payload: Response.data
            });
        })
        .catch(Error => (
            AllConferencesPagesDispatch({
                type: ALL_CONFERENCES_PAGES_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API'
            })
        ));
}

export default AllConferencesPagesAction;