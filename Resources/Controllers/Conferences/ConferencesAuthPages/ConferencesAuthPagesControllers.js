import ConferencesAuthPages from '../../../Models/Conferences/ConferencesAuthPages/ConferencesAuthPagesModels';

// Get All Conferences Auth. Pages
export const GetAllConferencesAuthPages = async (Request, Response) => {
    const AllConferencesAuthPages = await ConferencesAuthPages.find();

    Response.status(200).json({
        data: AllConferencesAuthPages,
        message: "These Are All Conferences Auth. Pages"
    });
}

// Create New Conference Auth. Page
export const CreateNewConferenceAuthPage = async (Request, Response) => {
    const { name, description, background, components, forms } = Request.body;
    const NewConferenceAuthPage = new ConferencesAuthPages({ name, description, background, components, forms });
    const SaveNewConferenceAuthPage = await NewConferenceAuthPage.save();

    Response.status(201).json({
        data: SaveNewConferenceAuthPage,
        message: "New Conference Auth. Page Has Been Created"
    });
}