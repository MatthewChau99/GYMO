const Joi = require('joi');
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
    }
}, {timestamps: true});

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().min(5).max(255),
        password: Joi.string().min(5).max(1024).required()
    });
    console.log(schema.validate(user));
    return schema.validate(user);
}

const User = mongoose.model('User', userSchema);
module.exports.User = User;
module.exports.validate = validateUser;