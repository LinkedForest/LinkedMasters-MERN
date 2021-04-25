// Models
import DashUsers from "../../Models/DashUsers/DashUsersModels";
import DashRoles from "../../Models/DashRoles/DashRolesModels";

// Get All Dashboard Users
export const GetAllDashUsers = async (Request, Response) => {
    const AllDashUsers = await DashUsers.find().populate('roles');

    // Response
    Response.status(200).json({
        data: AllDashUsers,
        message: "These Are All Dashboard Users"
    });
}

// Get Dashboard User By ID
export const GetDashUserByID = async (Request, Response) => {
    const DashUserByID = await DashUsers.findById(Request.params.DashUserID).populate('roles');

    // Response
    Response.status(200).json({
        data: DashUserByID,
        message: "Dashboard User Is Found"
    });
}

// Create Dashboard End User
export const CreateNewDashUser = async (Request, Response) => {
    // Request Data
    const { name, email, password, mobile, image, roles } = Request.body;
    const NewDashUser = new DashUsers({ name, email, password: await DashUsers.EncryptPassword(password), mobile, image });

    // Find Email
    const FindDashUserByEmail = await DashUsers.findOne({ email: Request.body.email });
    if (FindDashUserByEmail) {
        return Response.status(400).json({ message: "Dashboard User Already Existing" });
    }

    // Check Roles
    if ( roles.length > 0 ) {
        const FindDashRoles = await DashRoles.find({role: {$in: roles}});
        NewDashUser.roles = FindDashRoles.map((Roles) => {
            return Roles._id
        })
    } else {
        const DefaultDashRole = await DashRoles.findOne({role: 'User'});
        NewDashUser.roles = [DefaultDashRole._id];
    }

    // Save Data
    const SaveNewDashUser = await NewDashUser.save();

    // Response
    Response.status(200).json({
        data: SaveNewDashUser,
        message: "New Dashboard User Has Been Created"
    });
}

// Update Dashboard User By ID
export const UpdateDashUserByID = async (Request, Response) => {
    const DashUserUpdate = await DashUsers.findByIdAndUpdate(Request.params.DashUserID,
        Request.body,
        { safe: true, upsert: true, new : true }
    );

    // Response
    Response.status(200).json({
        data: DashUserUpdate,
        message: "Dashboard User Has Been Updated"
    });
}

// Force Delete For Dashboard User By ID
export const ForceDeleteDashUserByID = async (Request, Response) => {
    const DashUserForceDelete = await DashUsers.findByIdAndDelete(Request.params.DashUserID);

    // Response
    Response.status(200).json({
        data: DashUserForceDelete,
        message: "Dashboard User Has Been Force Deleted"
    });
}

// Soft Delete For Dashboard User By ID
export const SoftDeleteDashUserByID = async (Request, Response) => {
    const DashUserSoftDelete = await DashUsers.deleteById(Request.params.DashUserID);

    // Response
    Response.status(200).json({
        data: DashUserSoftDelete,
        message: "Dashboard User Has Been Soft Deleted"
    });
}