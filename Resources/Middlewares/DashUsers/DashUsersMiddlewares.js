// Models
import DashUsers from "../../Models/DashUsers/DashUsersModels";
import { DashRoles } from '../../Models/DashRoles/DashRolesModels';

// Check Dashboard Roles
export const CheckDashRoles = async (Request, Response, NextFunction) => {
    const Roles = Request.body.roles
    if (Roles) {
        for (let i = 0; i < Roles.length; i++) {
            if (!DashRoles.includes(Roles[i])) {
                return Response.json({
                    message: `${Roles[i]} Role Does Not Exists`
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