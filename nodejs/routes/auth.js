const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const BodyController = require('../controllers/BodyController');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.patch('/updateInfo', UserController.updateUserInfo);

router.get('/:userID', UserController.getUserInfo);

router.post('/addBodyInfo', BodyController.uploadBodyInfo);


module.exports = router;