import {Schema, model} from 'mongoose';

const ConferencesSchema = new Schema({
    title: String,
    description: String,
    category: String,
    image: String,
    start_date: Date,
    end_date: Date
}, {
    timestamps: true,
    versionKey: false
});

export default model('Conferences', ConferencesSchema);