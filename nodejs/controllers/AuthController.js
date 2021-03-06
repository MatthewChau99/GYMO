const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const ImageController = require('./ImageController');

const register = async (req, res) => {
    bcrypt.hash(req.body.password, 10, async function (err, hashedPass) {
        if (err) {
            res.json({
                error: err.toString()
            })
        }
        const {error} = validateUser(req.body);
        if (error) {
            console.log("yes");
            res.status(400).send(error.details[0].message);
        }

        // Check if this user already exists
        let user = await User.findOne({email: req.body.email});
        if (user) {
            console.log("yes2");

            res.status(400).send('That user already exists!');
        } else {
            console.log("here:" + req.body.avatarID);
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPass,
                intro: "None",
                pictureID: req.body.avatarID
            });
            await user.save();
            res.status(200).send(user);
            //req.flash('success','User Registration Succeed!');
        }
    })
};

const login = (req, res) => {
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
                            error: err,
                            login: 0
                        });
                    }
                    if (result) {
                        // let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'});
                        res.status(200).json({
                            message: 'login success',
                            login: 1,
                            user: user
                        });
                    } else {
                        res.status(401).json({message: 'Password incorrect!', login: 0});
                    }
                })
            } else {
                res.status(401).json({
                    message: 'No user found!',
                    login: -1
                });
            }
        })
};

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().min(5).max(255),
        password: Joi.string().min(5).max(1024).required(),
        avatarID: Joi.string()
    });
    console.log(schema.validate(user));
    return schema.validate(user);
}

module.exports = {
    register, login
};