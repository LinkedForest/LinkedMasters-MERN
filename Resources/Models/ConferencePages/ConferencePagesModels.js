import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const ConferencePagesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    background: {
        type: String
    },
    conference_id: {
        type: String,
        required: true
    },
    page_components: [{
        ref: "PageComponents",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

ConferencePagesSchema.plugin(SoftDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});

export default model('ConferencePages', ConferencePagesSchema);