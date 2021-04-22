// JWT
import JWT from 'jsonwebtoken';
import JWTConfigurations from '../../Functions/JWT/JWTConfigurations';

// Models
import DashUsers from '../../Models/DashUsers/DashUsersModels';

// Verify Dashboard User Token
export const VerifyDashToken = async (Request, Response, NextFunction) => {
    try {
        const Token = Request.headers["authorization"] && Request.headers["authorization"].split("Bearer ")[1];

        // Check If Token Not Exist
        if(!Token) {
            return Response.status(403).json({
                message: 'This Route Need Token Provider'
            })
        }
        const JWTData = JWT.verify(Token, JWTConfigurations.SECRET);
        Request.UserID = JWTData.id;
        const DashUserData = await DashUsers.findById(Request.UserID, {
            password: 0
        })
        if(!DashUserData) {
            return Response.status(404).json({
                message: 'Dashboard User Not Found'
            })
        }
        NextFunction();
    } catch (Error) {
        return Response.status(401).json({
            message: 'This Dashboard User Not Unauthorized To Use This Route'
        });
    }
}