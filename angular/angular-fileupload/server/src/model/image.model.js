const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({

    info: {
        imagename: {
            type: String,
            required: [true, 'imagename is required.']
        },
        description: {
            type: String,
            required: [true, 'description is required.']
        },
        category: {
            type: String,
            required: [true, 'category is required.']
        }
    },
    data: {
        type: String,
        required: [true, 'image is required.']
    }
}, {
    timestamps: true
});

const Image = mongoose.model('image', ImageSchema);
module.exports = Image;