// Models
import DashUsers from "../../Models/DashUsers/DashUsersModels";
import DashRoles from "../../Models/DashRoles/DashRolesModels";

// User Role
export const DashRolesUser = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'User') {
            NextFunction();
            return;
        }
    }
    return Response.status(401).json({
        message: "This Route Protected For User"
    })
}

// Admin Role
export const DashRolesAdmin = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'Admin') {
            NextFunction();
            return;
        }
    }
    return Response.status(401).json({
        message: "This Route Protected For Admin"
    })
}

// Editor Role
export const DashRolesEditor = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'Editor') {
            NextFunction();
            return;
        }
    }
    return Response.status(401).json({
        message: "This Route Protected For Editor"
    })
}

// Moderator Role
export const DashRolesModerator = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'Moderator') {
            NextFunction();
            return;
        }
    }
    return Response.status(403).json({
        message: "This Route Protected For Moderator"
    })
}

// Advertiser Role
export const DashRolesAdvertiser = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'Advertiser') {
            NextFunction();
            return;
        }
    }
    return Response.status(403).json({
        message: "This Route Protected For Advertiser"
    })
}

// Analyst Role
export const DashRolesAnalyst = async (Request, Response, NextFunction) => {
    const UserData = await DashUsers.findById(Request.UserID);
    const FindDashRoles = await DashRoles.find({_id: {$in: UserData.roles}});
    for (let i = 0; i < FindDashRoles.length; i++) {
        if (FindDashRoles[i].role === 'Analyst') {
            NextFunction();
            return;
        }
    }
    return Response.status(403).json({
        message: "This Route Protected For Analyst"
    })
}