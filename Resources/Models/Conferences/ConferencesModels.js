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
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true,
        default: new Date().toISOString()
    },
    end_date: {
        type: Date,
        required: true,
        default: new Date().toISOString()
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