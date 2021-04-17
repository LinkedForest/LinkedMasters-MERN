import {Schema, model} from 'mongoose';

const ConferencesAuthPagesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    components: [{
        ref: "ConferencesComponents",
        type: Schema.Types.ObjectId
    }],
    forms: [{
        ref: "ConferencesForms",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

export default model('ConferencesAuthPages', ConferencesAuthPagesSchema);