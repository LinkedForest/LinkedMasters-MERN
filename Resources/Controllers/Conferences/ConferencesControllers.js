import Conferences from '../../Models/Conferences/ConferencesModels';

// Get All Conferences
export const GetAllConferences = (Request, Response) => {
    Response.json({
        message: "These Are All Conferences"
    });
}

// Create New Conference
export const CreateNewConference = async (Request, Response) => {
    const { title, description, category, image, start_date, end_date } = Request.body;
    const NewConferences = new Conferences({ title, description, category, image, start_date, end_date });
    const SaveNewConferences = await NewConferences.save();

    Response.status(201).json(SaveNewConferences);
}

// Get Conference By ID
export const GetConferenceById = (Request, Response) => {
    Response.json({
        message: "Conference Is Found"
    });
}

// Update Conference By ID
export const UpdateConferenceById = (Request, Response) => {
    Response.json({
        message: "Conference Has Been Updated"
    });
}

// Delete Conference By ID
export const DeleteConferenceById = (Request, Response) => {
    Response.json({
        message: "Conference Has Been Deleted"
    });
}