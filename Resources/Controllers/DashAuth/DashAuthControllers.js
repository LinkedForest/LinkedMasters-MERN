// JWT
import JWT from 'jsonwebtoken';
import JWTConfigurations from '../../Functions/JWT/JWTConfigurations';

// Models
import DashUsers from '../../Models/DashUsers/DashUsersModels';
import DashRoles from '../../Models/DashRoles/DashRolesModels';

// Login
export const Login = async (Request, Response) => {
    // Find Email
    const FindDashUserByEmail = await DashUsers.findOne({ email: Request.body.email }).populate("roles");
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
        roles  : FindDashUserByEmail.roles,
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
    const { name, email, password, mobile, image, roles } = Request.body;
    const NewDashUser = new DashUsers({ name, email, password: await DashUsers.EncryptPassword(password), mobile, image });

    // Find Email
    const FindDashUserByEmail = await DashUsers.findOne({ email: Request.body.email }).populate("roles");
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

    // Create JWT Token
    const TokenJWT = JWT.sign({
        id: SaveNewDashUser._id
    }, JWTConfigurations.SECRET, {
        expiresIn: 86400
    });

    // Response Data
    const ResponseData = {
        full_name : NewDashUser.name,
        email     : NewDashUser.email,
        mobile    : NewDashUser.mobile,
        image     : NewDashUser.image,
        roles     : NewDashUser.roles,
    }

    // Response
    Response.status(200).json({
        data: ResponseData,
        token: TokenJWT,
        message: "New Dashboard User Has Been Created"
    });
};