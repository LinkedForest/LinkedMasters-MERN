import JWT from 'jsonwebtoken';
import JWTConfigurations from '../../../Functions/JWT/JWTConfigurations';
import EndUsers from '../../../Models/Authentication/EndUsers/EndUsersModels';
import EndUsersPermissions from '../../../Models/Permissions/EndUsers/EndUsersPermissions';

// Login
export const Login = async (Request, Response) => {
    // Find Email
    const FindEndUserByEmail = await EndUsers.findOne({ email: Request.body.email }).populate("permissions");
    if (!FindEndUserByEmail) {
        return Response.status(400).json({ message: "EndUser Not Found" });
    }

    // Compare Password
    const ComparePassword = await EndUsers.ComparePassword(Request.body.password, FindEndUserByEmail.password);
    if (!ComparePassword) {
        return Response.status(400).json({ message: "Password is Not Matching" });
    }

    // Response JWT
    const TokenJWT = await JWT.sign({id: FindEndUserByEmail._id}, JWTConfigurations.SECRET, {
        expiresIn: 86400
    });

    // Response
    Response.status(200).json({
        data: TokenJWT,
        message: "EndUser Is Found"
    });
}

// Registration
export const Register = async (Request, Response) => {
    // Request Data
    const { full_name, email, password, mobile, image, country, birthdate, permissions } = Request.body;
    const NewEndUser = new EndUsers({ full_name, email, password: await EndUsers.EncryptPassword(password), mobile, image, country, birthdate });

    // Find Email
    const FindEndUserByEmail = await EndUsers.findOne({ email: Request.body.email }).populate("permissions");
    if (FindEndUserByEmail) {
        return Response.status(400).json({ message: "EndUser Already Existing" });
    }

    // Check Permissions
    if ( permissions ) {
        const FindPermissions = await EndUsersPermissions.find({permission: {$in: permissions}});
        NewEndUser.permissions = FindPermissions.map((Permission) => {
            return Permission._id
        })
    } else {
        const DefaultPermission = await EndUsersPermissions.findOne({permission: 'User'});
        NewEndUser.permissions = [DefaultPermission._id];
    }

    // Save Data
    const SaveNewEndUser = await NewEndUser.save();

    // Create JWT Token
    const TokenJWT = JWT.sign({
        id: SaveNewEndUser._id
    }, JWTConfigurations.SECRET, {
        expiresIn: 86400
    });

    // Response
    Response.status(200).json({
        data: TokenJWT,
        message: "New EndUser Has Been Created"
    });
}