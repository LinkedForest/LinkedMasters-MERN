import {Schema, model} from 'mongoose';

const EndUsersPermissionsSchema = new Schema({
    permission: {
        type: String
    }
}, {
    versionKey: false
});

export default model('EndUsersPermission', EndUsersPermissionsSchema);