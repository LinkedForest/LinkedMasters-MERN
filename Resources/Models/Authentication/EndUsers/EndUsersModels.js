import Bcrypt from 'bcryptjs';
import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const EndUsersSchema = new Schema({
    full_name: {
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
    country: {
        type: String,
        required: false
    },
    birthdate: {
        type: Date,
        required: false
    },
    permissions: [{
        ref: "EndUsersPermissions",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

// Encrypt Password
EndUsersSchema.statics.EncryptPassword = async (Password) => {
    const GenSalt = await Bcrypt.genSalt(10);
    return await Bcrypt.hash(Password, GenSalt);
}

// Compare Password
EndUsersSchema.statics.ComparePassword = async (Password, ReceivedPassword) => {
    return await Bcrypt.compare(Password, ReceivedPassword);
}

EndUsersSchema.plugin(SoftDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});

export default model('EndUsers', EndUsersSchema);