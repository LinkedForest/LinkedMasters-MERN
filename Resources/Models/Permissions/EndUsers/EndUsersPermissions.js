import {Schema, model} from 'mongoose';

const EndUsersPermissionsSchema = new Schema({
    permission: {
        type: String
    }
},{
    versionKey: false
});

export const EndUsersPermissions = ["User", "Moderator", "Admin"];
export default model('EndUsersPermissions', EndUsersPermissionsSchema);