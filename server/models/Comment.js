const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    
    commentText: {
        type: String,
        minlength: 1,
        maxlength: 200,
        trim: true,
    },
    commentAuthor: {
        type: String,
        ref: 'User',
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;