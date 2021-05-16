// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {ALL_CONFERENCES_LOADING, ALL_CONFERENCES_SUCCESS, ALL_CONFERENCES_ERRORS} from "../DashboardActionsTypes/ConferencesActionsTypes/AllConferencesActionsTypes";

const AllConferencesAction = (AllConferencesDispatch) => {

    AllConferencesDispatch({
        type: ALL_CONFERENCES_LOADING
    });

    AxiosInstance()
        .get(`/conferences`)
        .then(Response => {
            AllConferencesDispatch({
                type: ALL_CONFERENCES_SUCCESS,
                payload: Response.data
            });
        })
        .catch(Error => (
            AllConferencesDispatch({
                type: ALL_CONFERENCES_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API'
            })
        ));
}

export default AllConferencesAction;