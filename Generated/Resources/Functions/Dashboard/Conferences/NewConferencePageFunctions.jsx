import {useContext, useState} from 'react';

// React Route
import {useHistory} from "react-router-dom";

// Stores
import { ConferencesStore } from "../../../Sources/Stores/Conferences/ConferencesStore";

// Actions
import NewConferencePageAction from "../../../Sources/Actions/Dashboard/ConferencesActions/NewConferencesPagesActions";

const NewConferencePageFunctions = () => {
    const History = useHistory();
    const [NewConferencePage, setNewConferencePage] = useState({});
    const {NewConferencesPagesState: {NewConferencesPages: {Loading, Error, Data}}, NewConferencesPagesDispatch} = useContext(ConferencesStore);

    // Get Form Data
    const FormData = (event) => {
        const { target: { value, name } } = event;
        setNewConferencePage({...NewConferencePage, [name]: value});
    };

    // Form Validation
    const FormValid =
        !(!!NewConferencePage.conference_id) ||
        !NewConferencePage.name?.length ||
        // !NewConferencePage.background?.length ||
        !NewConferencePage.description?.length

    // Form Submit
    const FormSubmit = () => {
        NewConferencePageAction(History)(NewConferencePage)(NewConferencesPagesDispatch);
    }

    console.log(NewConferencePage)

    return {NewConferencePage, FormData, FormValid, FormSubmit, Loading, Error, Data};
}

export default NewConferencePageFunctions;