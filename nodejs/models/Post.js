const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
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

module.exports = mongoose.model('Post', PostSchema);
