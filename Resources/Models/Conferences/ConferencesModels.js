import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const ConferencesSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "New Conference"
    },
    description: {
        type: String,
        required: true,
        default: "It's New Conference"
    },
    logo_image: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true,
        default: new Date().toISOString()
    },
    start_time: {
        type: String,
        required: true
    },
    theme_color: {
        type: String,
        required: true
    },
    auth_pages: [{
        ref: "ConferencesAuthPages",
        type: Schema.Types.ObjectId
    }]
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