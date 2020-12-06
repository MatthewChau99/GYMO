//const User = require('../models/User')
const { User, validate } = require('../models/User');
const express = require('express');
const router = express.Router();
const AuthController = require('../controlllers/AuthController');


router.post('/login', async(req, res) => {
    const login = validate(req.body);
    if (!login.error) {
        return res.status(200).send("Login Successful!");
    } else {
        return res.status(400).send("Login Unsuccessful!")
    }
});


//router.post('/register', AuthController.register);
router.post('/register', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exists!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }
});

module.exports = router;