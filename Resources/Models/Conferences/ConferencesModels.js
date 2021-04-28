import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const ConferencesSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        default: "New Conference"
    },
    description: {
        type: String,
        required: true,
        default: "It's New Conference"
    },
    logo: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true,
        default: new Date().toISOString()
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

ConferencesSchema.plugin(SoftDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});

export default model('Conferences', ConferencesSchema);