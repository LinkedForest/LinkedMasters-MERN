// Models
import ConferencePages from '../../Models/ConferencePages/ConferencePagesModels';
import Conferences from '../../Models/Conferences/ConferencesModels';

// Get All Conference Pages
export const GetAllConferencePages = async (Request, Response) => {
    const AllConferencePages = await ConferencePages.find();

    // Response
    Response.status(200).json({
        data: AllConferencePages,
        message: "These Are All Conferences Pages"
    });
}

// Get All Conference Pages By Conference ID
export const GetAllConferencePagesByConferenceID = async (Request, Response) => {
    const AllConferencePagesByConferenceID = await ConferencePages.find({conference_id: Request.body.conference_id});

    // Response
    Response.status(200).json({
        data: AllConferencePagesByConferenceID,
        message: "These Are All Conference Pages"
    });
}

// Get Conference Page By ID
export const GetConferencePageByID = async (Request, Response) => {
    const ConferencePageByID = await ConferencePages.findById(Request.params.ConferencePageID);

    // Response
    Response.status(200).json({
        data: ConferencePageByID,
        message: "Conference Page Is Found"
    });
}

// Create New Conference
export const CreateNewConferencePage = async (Request, Response) => {
    // Request Data
    const { name, description, background } = Request.body;
    const NewConferencePage = new ConferencePages({ name, description, background });
    NewConferencePage.conference_id = Request.body.conference_id;

    // Save Data
    const SaveNewConferencePage = await NewConferencePage.save().then(async (ConferencePage) => {

        // Add Page To Conference
        await Conferences.findByIdAndUpdate(ConferencePage.conference_id,
            { $addToSet: { conference_pages: ConferencePage._id } },
            { safe: true, upsert: true, new : true }
        );

        return ConferencePage;
    });

    // Response
    Response.status(200).json({
        data: SaveNewConferencePage,
        message: "New Conference Page Has Been Created"
    });
}

// Update Conference Page By ID
export const UpdateConferencePageByID = async (Request, Response) => {
    const ConferencePageUpdate = await ConferencePages.findByIdAndUpdate(Request.params.ConferencePageID,
        Request.body,
        { safe: true, upsert: true, new : true }
    );

    // Response
    Response.status(200).json({
        data: ConferencePageUpdate,
        message: "Conference Page Has Been Updated"
    });
}

// Force Delete For Conference By ID
export const ForceDeleteConferencePageByID = async (Request, Response) => {
    const ConferencePageForceDelete = await ConferencePages.findByIdAndDelete(Request.params.ConferencePageID).then(async (ConferencePage) => {

        // Remove Page From Conference
        await Conferences.findByIdAndUpdate(ConferencePage.conference_id,
            { $pull: { conference_pages: ConferencePage._id } },
            { safe: true, upsert: true, new : true }
        );

        return ConferencePage
    });

    // Response
    Response.status(200).json({
        data: ConferencePageForceDelete,
        message: "Conference Page Has Been Force Deleted"
    });
}

// Soft Delete For Conference By ID
export const SoftDeleteConferencePageByID = async (Request, Response) => {
    const ConferencePageSoftDelete = await ConferencePages.deleteById(Request.params.ConferencePageID);

    // Response
    Response.status(200).json({
        data: ConferencePageSoftDelete,
        message: "Conference Page Has Been Soft Deleted"
    });
}