import {Schema, model} from 'mongoose';

const ConferencesAuthPagesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    forms: [{
        ref: "ConferencesForms",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

export default model('ConferencesAuthPages', ConferencesAuthPagesSchema);