import Bcrypt from 'bcryptjs';
import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const DashUsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    roles: [{
        ref: "DashRoles",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

// Encrypt Password
DashUsersSchema.statics.EncryptPassword = async (Password) => {
    const GenSalt = await Bcrypt.genSalt(10);
    return await Bcrypt.hash(Password, GenSalt);
}

// Compare Password
DashUsersSchema.statics.ComparePassword = async (Password, ReceivedPassword) => {
    return await Bcrypt.compare(Password, ReceivedPassword);
}

// Soft Delete
DashUsersSchema.plugin(SoftDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});

export default model('DashUsers', DashUsersSchema);