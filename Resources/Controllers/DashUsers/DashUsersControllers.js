import JWT from 'jsonwebtoken';
import JWTConfigurations from '../../Functions/JWT/JWTConfigurations';
import DashboardUsers from '../../Models/Authentication/DashboardAuth/DashboardUsers/DashboardUsersModels';
import DashboardUsersPermissions from '../../Models/Permissions/DashboardPermissions/DashboardUsers/DashboardUsersPermissions';

// Login
export const Login = async (Request, Response) => {
    // Find Email
    const FindDashUserByEmail = await DashUsers.findOne({ email: Request.body.email }).populate("Roles");
    if (!FindDashUserByEmail) {
        return Response.status(400).json({ message: "Dashboard User Not Found" });
    }

    // Compare Password
    const ComparePassword = await DashUsers.ComparePassword(Request.body.password, FindDashUserByEmail.password);
    if (!ComparePassword) {
        return Response.status(400).json({ message: "Password Is Not Matching" });
    }

    // Response JWT
    const TokenJWT = await JWT.sign({id: FindDashUserByEmail._id}, JWTConfigurations.SECRET, {
        expiresIn: 86400
    });

    // Response Data
    const ResponseData = {
        name   : FindDashUserByEmail.name,
        email  : FindDashUserByEmail.email,
        mobile : FindDashUserByEmail.mobile,
        image  : FindDashUserByEmail.image,
    }

    // Response
    Response.status(200).json({
        data: ResponseData,
        token: TokenJWT,
        message: "Dashboard User Is Found"
    });
};

// Registration
export const Register = async (Request, Response) => {
    // Request Data
    const { full_name, email, password, mobile, image, country, birthdate, permissions } = Request.body;
    const NewDashboardUser = new DashboardUsers({ full_name, email, password: await DashboardUsers.EncryptPassword(password), mobile, image, country, birthdate });

    // Find Email
    const FindDashboardUserByEmail = await DashboardUsers.findOne({ email: Request.body.email }).populate("permissions");
    if (FindDashboardUserByEmail) {
        return Response.status(400).json({ message: "Dashboard User Already Existing" });
    }

    // Check Permissions
    if ( permissions ) {
        const FindPermissions = await DashboardUsersPermissions.find({permission: {$in: permissions}});
        NewDashboardUser.permissions = FindPermissions.map((Permission) => {
            return Permission._id
        })
    } else {
        const DefaultPermission = await DashboardUsersPermissions.findOne({permission: 'User'});
        NewDashboardUser.permissions = [DefaultPermission._id];
    }

    // Save Data
    const SaveNewDashboardUser = await NewDashboardUser.save();

    // Create JWT Token
    const TokenJWT = JWT.sign({
        id: SaveNewDashboardUser._id
    }, JWTConfigurations.SECRET, {
        expiresIn: 86400
    });

    // Response Data
    const ResponseData = {
        full_name : NewDashboardUser.full_name,
        email     : NewDashboardUser.email,
        mobile    : NewDashboardUser.mobile,
        image     : NewDashboardUser.image,
        country   : NewDashboardUser.country,
        birthdate : NewDashboardUser.birthdate,
    }

    // Response
    Response.status(200).json({
        data: ResponseData,
        token: TokenJWT,
        message: "New Dashboard User Has Been Created"
    });
};