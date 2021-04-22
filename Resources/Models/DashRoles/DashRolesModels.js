import {Schema, model} from 'mongoose';

const DashRolesSchema = new Schema({
    role: {
        type: String
    }
},{
    versionKey: false
});

export const DashRoles = ["User", "Admin", "Editor", "Moderator", "Advertiser", "Analyst"];

export default model('DashRoles', DashRolesSchema);