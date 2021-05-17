// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {NEW_CONFERENCES_LOADING, NEW_CONFERENCES_SUCCESS, NEW_CONFERENCES_ERRORS} from "../DashboardActionsTypes/ConferencesActionsTypes/NewConferencesActionsTypes";

const NewConferencesAction = (NewConferencesDispatch) => {

    NewConferencesDispatch({
        type: NEW_CONFERENCES_LOADING
    });

    AxiosInstance()
        .get(`/conferences`)
        .then(Response => {
            NewConferencesDispatch({
                type: NEW_CONFERENCES_SUCCESS,
                payload: Response.data
            });
        })
        .catch(Error => (
            NewConferencesDispatch({
                type: NEW_CONFERENCES_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API'
            })
        ));
}

export default NewConferencesAction;