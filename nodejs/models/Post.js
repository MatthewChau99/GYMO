const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String
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
    },
    pictureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pic'
    },
    comments: [],
    likes: []
});

module.exports = mongoose.model('Post', PostSchema);
