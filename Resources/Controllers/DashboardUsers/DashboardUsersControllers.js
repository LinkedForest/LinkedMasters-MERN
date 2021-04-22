// import DashboardUsers from "../../Models/Authentication/DashboardAuth/DashboardUsers/EndUsersModels";

// Create New End User
export const CreateNewDashboardUser = async (Request, Response) => {
    // const { full_name, email, password, mobile, image, country, birthdate, permissions } = Request.body;
    // const NewDashboardUser = new DashboardUsers({ full_name, email, password: await DashboardUsers.EncryptPassword(password), mobile, image, country, birthdate });
    // const SaveNewDashboardUser = await NewDashboardUser.save();

    Response.status(201).json({
        // data: SaveNewDashboardUser,
        message: "New Dashboard User Has Been Created"
    });
}