import { EndUsersPermissions } from '../../Models/Permissions/EndUsers/EndUsersPermissions';

// Check End User Permissions
const CheckEndUsersPermissions = async (Request, Response, NextFunction) => {
    const Permissions = Request.body.permissions
    if (Permissions) {
        for (let i = 0; i < Permissions.length; i++) {
            if (!EndUsersPermissions.includes(Permissions[i])) {
                return Response.json({
                    message: `Permission ${Permissions[i]} Does Not Exists`
                });
            }
        }
    }
    NextFunction();
}

export default CheckEndUsersPermissions;