import JWT from 'jsonwebtoken';
import JWTConfigurations from '../../Functions/JWT/JWTConfigurations';
import EndUsers from '../../Models/Authentication/EndUsers/EndUsersModels';

// Verify Token
export const VerifyToken = async (Request, Response, NextFunction) => {
    try {
        const Token = Request.headers["authorization"] && Request.headers["authorization"].split("Bearer ")[1];
        if(!Token) {
            return Response.status(403).json({
                message: 'This Route Need Token Provider'
            })
        }
        const JWTData = JWT.verify(Token, JWTConfigurations.SECRET);
        Request.UserID = JWTData.id;
        const EndUserData = await EndUsers.findById(Request.UserID, {
            password: 0
        })
        if(!EndUserData) {
            return Response.status(404).json({
                message: 'EndUser Not Found'
            })
        }
        NextFunction();
    } catch (Error) {
        return Response.status(401).json({
            message: 'This EndUser Not Unauthorized'
        });
    }
}