import {useContext, useState} from 'react';

// React Route
import {useHistory} from "react-router-dom";

// Stores
import { ConferencesStore } from "../../../Sources/Stores/Conferences/ConferencesStore";

// Actions
import NewConferenceAction from "../../../Sources/Actions/Dashboard/ConferencesActions/NewConferencesActions";

const NewConferenceFunctions = () => {
    const History = useHistory();
    const [NewConference, setNewConference] = useState({});
    const {NewConferencesState: {NewConferences: {Loading, Error, Data}}, NewConferencesDispatch} = useContext(ConferencesStore);

    // Get Form Data
    const FormData = (event) => {
        const { target: { value, name } } = event;
        setNewConference({...NewConference, [name]: value});
    };

    // Form Validation
    const FormValid =
        !NewConference.email?.length ||
        !NewConference.password?.length

    // Form Submit
    const FormSubmit = () => {
        NewConferenceAction(History)(NewConference)(NewConferencesDispatch);
    }

    return {NewConference, FormData, FormValid, FormSubmit, Loading, Error, Data};
}

export default NewConferenceFunctions;