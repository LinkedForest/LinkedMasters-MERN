// Create New End User
export const CreateNewEndUser = async (Request, Response) => {
    // const { title, description, category, image, start_date, end_date } = Request.body;
    // const NewConference = new Conferences({ title, description, category, image, start_date, end_date });
    // const SaveNewConference = await NewConference.save();

    Response.status(201).json({
        // data: SaveNewConference,
        message: "New EndUser Has Been Created"
    });
}