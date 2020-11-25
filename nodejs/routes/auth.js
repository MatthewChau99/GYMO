const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const BodyController = require('../controllers/BodyController');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.patch('/updateInfo', UserController.updateUserInfo);

router.get('/:userID', UserController.getUserInfo);

router.post('/addFollower', UserController.follow);

router.delete('/deleteFollower', UserController.unfollow);

router.get('/checkFollowState/:userID/:followID', UserController.checkFollowState);

router.post('/addBodyInfo', BodyController.uploadBodyInfo);

router.get('/getBodyInfo/:userID', BodyController.getUserBodyInfo);

module.exports = router;