// Models
import Conferences from '../../Models/Conferences/ConferencesModels';

// Get All Conferences
export const GetAllConferences = async (Request, Response) => {
    const AllConferences = await Conferences.find().populate('conference_pages');

    // Response
    Response.status(200).json({
        data: AllConferences,
        message: "These Are All Conferences"
    });
}

// Get Conference By ID
export const GetConferenceByID = async (Request, Response) => {
    const ConferenceByID = await Conferences.findById(Request.params.ConferenceID).populate('conference_pages');

    // Response
    Response.status(200).json({
        data: ConferenceByID,
        message: "Conference Is Found"
    });
}

// Create New Conference
export const CreateNewConference = async (Request, Response) => {
    // Request Data
    const { name, description, logo, start_date, color, conference_pages } = Request.body;
    const NewConference = new Conferences({ name, description, logo, start_date, color, conference_pages });

    // Find Name
    const FindConferenceByName = await Conferences.findOne({ name: Request.body.name });
    if (FindConferenceByName) {
        return Response.status(400).json({ message: "Conference Name Already Existing" });
    }

    // Save Data
    const SaveNewConference = await NewConference.save();

    // Response
    Response.status(200).json({
        data: SaveNewConference,
        message: "New Conference Has Been Created"
    });
}

// Update Conference By ID
export const UpdateConferenceByID = async (Request, Response) => {
    const ConferenceUpdate = await Conferences.findByIdAndUpdate(Request.params.ConferenceID,
        Request.body,
        { safe: true, upsert: true, new : true }
    );

    // Response
    Response.status(200).json({
        data: ConferenceUpdate,
        message: "Conference Has Been Updated"
    });
}

// Force Delete For Conference By ID
export const ForceDeleteConferenceByID = async (Request, Response) => {
    const ConferenceForceDelete = await Conferences.findByIdAndDelete(Request.params.ConferenceID);

    // Response
    Response.status(200).json({
        data: ConferenceForceDelete,
        message: "Conference Has Been Force Deleted"
    });
}

// Soft Delete For Conference By ID
export const SoftDeleteConferenceByID = async (Request, Response) => {
    const ConferenceSoftDelete = await Conferences.deleteById(Request.params.ConferenceID);

    // Response
    Response.status(200).json({
        data: ConferenceSoftDelete,
        message: "Conference Has Been Soft Deleted"
    });
}