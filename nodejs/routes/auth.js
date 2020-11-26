const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.patch('/updateInfo', UserController.updateUserInfo);

router.get('/:userID', UserController.getUserInfo);

router.get('/followers/:userID', UserController.getFollowers);
router.get('/follows/:userID', UserController.getFollows);
router.get('/addFollower/:userID', UserController.addFollowerToUser);
router.get('/deleteFollower/:userID', UserController.deleteFollowerFromUser);
router.get('/addFollow/:userID', UserController.addFollowToUser);
router.get('/deleteFollow/:userID', UserController.deleteFollowFromUser);

module.exports = router;