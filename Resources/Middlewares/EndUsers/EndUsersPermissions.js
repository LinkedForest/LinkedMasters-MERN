import { EndUsersPermissions } from '../../Models/Permissions/EndUsers/EndUsersPermissions';

// Check End User Email
export const CheckEndUsersEmail = async (Request, Response, NextFunction) => {
    const EndUser = await EndUsers.findOne({email: Request.body.email});
    if (EndUser) {
        return Response.json({
            message: "EndUser Already Existing"
        })
    }
    NextFunction();
}

// Check End User Permissions
export const CheckEndUsersPermissions = async (Request, Response, NextFunction) => {
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