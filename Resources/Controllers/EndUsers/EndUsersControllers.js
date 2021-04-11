// import EndUsers from "../../Models/Authentication/EndUsers/EndUsersModels";

// Create New End User
export const CreateNewEndUser = async (Request, Response) => {
    // const { full_name, email, password, mobile, image, country, birthdate, permissions } = Request.body;
    // const NewEndUser = new EndUsers({ full_name, email, password: await EndUsers.EncryptPassword(password), mobile, image, country, birthdate });
    // const SaveNewEndUser = await NewEndUser.save();

    Response.status(201).json({
        // data: SaveNewEndUser,
        message: "New EndUser Has Been Created"
    });
}