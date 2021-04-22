// Models
import Conferences from '../../Models/Conferences/ConferencesModels';

// Get All Conferences
export const GetAllConferences = async (Request, Response) => {
    const AllConferences = await Conferences.find();

    Response.status(200).json({
        data: AllConferences,
        message: "These Are All Conferences"
    });
}

// Get Conference By ID
export const GetConferenceByID = async (Request, Response) => {
    const ConferenceByID = await Conferences.findById(Request.params.ConferenceID);

    Response.status(200).json({
        data: ConferenceByID,
        message: "Conference Is Found"
    });
}

// Create New Conference
export const CreateNewConference = async (Request, Response) => {
    const { title, description, logo_image, start_date, start_time, theme_color, auth_pages } = Request.body;
    const NewConference = new Conferences({ title, description, logo_image, start_date, start_time, theme_color, auth_pages });
    const SaveNewConference = await NewConference.save();

    Response.status(201).json({
        data: SaveNewConference,
        message: "New Conference Has Been Created"
    });
}

// Update Conference By ID
export const UpdateConferenceByID = async (Request, Response) => {
    const ConferenceUpdate = await Conferences.findByIdAndUpdate(Request.params.ConferenceID, Request.body, {
        new: true
    });

    Response.status(200).json({
        data: ConferenceUpdate,
        message: "Conference Has Been Updated"
    });
}

// Soft Delete For Ever Conference By ID
export const SoftDeleteConferenceById = async (Request, Response) => {
    const ConferenceSoftDelete = await Conferences.deleteById(Request.params.ConferenceID);

    Response.status(204).json({
        data: ConferenceSoftDelete,
        message: "Conference Has Been Deleted"
    });
}

// Force Delete For Ever Conference By ID
export const ForceDeleteConferenceByID = async (Request, Response) => {
    const ConferenceForceDelete = await Conferences.findByIdAndDelete(Request.params.ConferenceID);

    Response.status(204).json({
        data: ConferenceForceDelete,
        message: "Conference Has Been Deleted"
    });
}