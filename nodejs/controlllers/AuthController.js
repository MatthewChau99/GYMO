const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async function (err, hashedPass) {
        if (err) {
            res.json({
                error: err.toString()
            })
        }
        const {error} = validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        // Check if this user already exists
        let user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).send('That user already exisits!');
        } else {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPass
            });
            await user.save();
            res.send(user);
        }
    })
};

const login = (req, res, next) => {
    //let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    //User.findOne({$or: [{email: username}, {phone: username}]})
    User.findOne({email: email})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        });
                    }
                    if (result) {
                        let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'});
                        res.json({
                            message: 'Login Successful!',
                        });
                    } else {
                        res.json({
                            message: 'Password incorrect!'
                        });
                    }
                })
            } else {
                res.json({
                    message: 'No user found!'
                });
            }
        })
};

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

module.exports.register = register;
module.exports.login = login;
module.exports.validate = validateUser;