import Conferences from '../../Models/Conferences/ConferencesModels';

// Get All Conferences
export const GetAllConferences = async (Request, Response) => {
    const AllConferences = await Conferences.find();

    Response.status(200).json({
        data: AllConferences,
        message: "These Are All Conferences"
    });
}

// Create New Conference
export const CreateNewConference = async (Request, Response) => {
    const { title, description, category, image, start_date, end_date } = Request.body;
    const NewConference = new Conferences({ title, description, category, image, start_date, end_date });
    const SaveNewConference = await NewConference.save();

    Response.status(201).json({
        data: SaveNewConference,
        message: "New Conference Has Been Created"
    });
}

// Get Conference By ID
export const GetConferenceById = async (Request, Response) => {
    const ConferenceById = await Conferences.findById(Request.params.ConferenceId);

    Response.status(200).json({
        data: ConferenceById,
        message: "Conference Is Found"
    });
}

// Update Conference By ID
export const UpdateConferenceById = async (Request, Response) => {
    const ConferenceUpdate = await Conferences.findByIdAndUpdate(Request.params.ConferenceId, Request.body, {
        new: true
    });

    Response.status(200).json({
        data: ConferenceUpdate,
        message: "Conference Has Been Updated"
    });
}

// Soft Delete For Ever Conference By ID
export const SoftDeleteConferenceById = async (Request, Response) => {
    const ConferenceSoftDelete = await Conferences.deleteById(Request.params.ConferenceId);

    Response.status(204).json({
        data: ConferenceSoftDelete,
        message: "Conference Has Been Deleted"
    });
}

// Force Delete For Ever Conference By ID
export const ForceDeleteConferenceById = async (Request, Response) => {
    const ConferenceForceDelete = await Conferences.findByIdAndDelete(Request.params.ConferenceId);

    Response.status(204).json({
        data: ConferenceForceDelete,
        message: "Conference Has Been Deleted"
    });
}