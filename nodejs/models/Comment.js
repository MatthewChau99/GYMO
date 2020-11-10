const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);