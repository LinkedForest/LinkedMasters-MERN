// API Instance
import AxiosInstance from "../../../../Database/AxiosInstance";

// Actions Types
import {NEW_CONFERENCES_PAGES_LOADING, NEW_CONFERENCES_PAGES_SUCCESS, NEW_CONFERENCES_PAGES_ERRORS} from "../DashboardActionsTypes/ConferencesActionsTypes/NewConferencesPagesActionsTypes";

const NewConferencesPagesAction = (History) => ({conference_id, name, background, description}) => (NewConferencesPagesDispatch) => {

    NewConferencesPagesDispatch({
        type: NEW_CONFERENCES_PAGES_LOADING
    });

    AxiosInstance()
        .post(`/conference-pages`, {conference_id, name, background, description})
        .then(Response => {
            NewConferencesPagesDispatch({
                type: NEW_CONFERENCES_PAGES_SUCCESS,
                payload: Response.data
            });
            History.push("/dashboard/pages");
        })
        .catch(Error => (
            NewConferencesPagesDispatch({
                type: NEW_CONFERENCES_PAGES_ERRORS,
                payload: Error.response ? Error.response.data : 'Could Not Connect With API'
            })
        ));
}

export default NewConferencesPagesAction;