// Models
import ConferencePages from '../../Models/ConferencePages/ConferencePagesModels';

// Check Conference
export const CheckConferencePage = async (Request, Response, NextFunction) => {
    const ConferencePageID = Request.body.conference_pages
    if ( ConferencePageID ) {
        for (let i = 0; i < ConferencePageID.length; i++) {
            const ConferencePage = await ConferencePages.findById(Request.body.conference_pages)
            if ( !ConferencePage ) {
                return Response.json({
                    message: `Conference Page Does Not Exists`
                });
            }
        }
    }
    NextFunction();
}