const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phone: {
        type: String,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    followers: [],
    follows: [],
    posts: [],
    intro: "",
    pictureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pic'
    },
    bodyData: {
        type: Object,
        required: false,
        default: {
            "weight": 50,
            "height": 100
        }
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;

