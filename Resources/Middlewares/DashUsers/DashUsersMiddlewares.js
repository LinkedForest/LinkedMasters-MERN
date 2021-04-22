import DashUsers from "../../Models/DashUsers/DashUsersModels";
import { EndUsersPermissions } from '../../Models/Permissions/EndUsers/EndUsersPermissions';

// Check Dashboard Roles
export const CheckDashRoles = async (Request, Response, NextFunction) => {
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

// Check Dashboard User Email
export const CheckDashUsersEmail = async (Request, Response, NextFunction) => {
    const FindDashUser = await DashUsers.findOne({email: Request.body.email});
    if (FindDashUser) {
        return Response.json({
            message: "Dashboard User Already Existing"
        })
    }
    NextFunction();
}