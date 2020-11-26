const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const BodyController = require('../controllers/BodyController');

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.patch('/updateInfo', UserController.updateUserInfo);

router.get('/:userID', UserController.getUserInfo);

<<<<<<< HEAD
router.get('/followers/:userID', UserController.getFollowers);
router.get('/follows/:userID', UserController.getFollows);
router.get('/addFollower/:userID', UserController.addFollowerToUser);
router.get('/deleteFollower/:userID', UserController.deleteFollowerFromUser);
router.get('/addFollow/:userID', UserController.addFollowToUser);
router.get('/deleteFollow/:userID', UserController.deleteFollowFromUser);
=======
router.post('/addFollower', UserController.follow);

router.delete('/deleteFollower', UserController.unfollow);

router.get('/checkFollowState/:userID/:followID', UserController.checkFollowState);

router.post('/addBodyInfo', BodyController.uploadBodyInfo);

router.get('/getBodyInfo/:userID', BodyController.getUserBodyInfo);
>>>>>>> 7ef8ca92d68c4e06e7880cc33c290ac7b57b3268

module.exports = router;