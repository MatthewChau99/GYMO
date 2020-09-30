const {User, validate} = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err.toString()
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        });
        user.save()
            .then(user => {
                res.json({
                    message: 'User Added Successfully!'
                })
            })
            .catch(error => {
                res.json({message: 'An error occurred!'})
            })
    });
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
                        //let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'});
                        let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'});
                        res.json({
                            message: 'Login Successful!',
                            token
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

module.exports = {
    register, login
};