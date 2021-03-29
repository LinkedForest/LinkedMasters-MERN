import EndUsers from "../../Models/Authentication/EndUsers/EndUsersModels";
import EndUsersPermissions from "../../Models/Permissions/EndUsers/EndUsersPermissions";

// Admin Token
export const EndUserAdminToken = async (Request, Response, NextFunction) => {
    const UserData = await EndUsers.findById(Request.UserID);
    const EndUserPermissions = await EndUsersPermissions.find({_id: {$in: UserData.permissions}});
    for (let i = 0; i < EndUserPermissions.length; i++) {
        if (EndUserPermissions[i].permission === 'Admin') {
            NextFunction();
            return;
        }
    }
    return Response.status(401).json({
        message: "This Route Protected For Admin"
    })
}

// Moderator Token
export const EndUserModeratorToken = async (Request, Response, NextFunction) => {
    const UserData = await EndUsers.findById(Request.UserID);
    const EndUserPermissions = await EndUsersPermissions.find({_id: {$in: UserData.permissions}});
    for (let i = 0; i < EndUserPermissions.length; i++) {
        if (EndUserPermissions[i].permission === 'Moderator') {
            NextFunction();
            return;
        }
    }
    return Response.status(403).json({
        message: "This Route Protected For Moderator"
    })
}