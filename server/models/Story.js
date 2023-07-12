const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const storySchema = new Schema({
    storyTitle: {
        type: String,
        minlength: 1,
        maxlength: 200,
        trim: true,
    },
    storyContent: {
        type: String,
        minlength: 1,
        maxlength: 2000 ,
        trim: true,
    },
    storyAuthor: {
        type: String,
        required: true,
        trime: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

const Story = model('Story', storySchema);

module.exports = Story;