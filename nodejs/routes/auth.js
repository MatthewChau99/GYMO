const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.patch('/updateInfo', UserController.updateUserInfo);

router.get('/:userID', UserController.getUserInfo);

module.exports = router;