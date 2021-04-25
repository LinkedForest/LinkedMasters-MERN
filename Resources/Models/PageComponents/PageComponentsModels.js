import {Schema, model} from 'mongoose';
import SoftDelete from 'mongoose-delete';

const PageComponentsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    background: {
        type: String
    },
    image: {
        type: String
    },
    theme: {
        type: String
    },
    component_forms: [{
        ref: "ComponentForms",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

PageComponentsSchema.plugin(SoftDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});

export default model('PageComponents', PageComponentsSchema);