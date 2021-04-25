// Models
import Conferences from '../../Models/Conferences/ConferencesModels';

// Check Conference
export const CheckConference = async (Request, Response, NextFunction) => {
    if ( Request.body.conference_id ) {
        const Conference = await Conferences.findById(Request.body.conference_id)
        if ( !Conference ) {
            return Response.json({
                message: `Conference Does Not Exists`
            });
        }
    }
    NextFunction();
}