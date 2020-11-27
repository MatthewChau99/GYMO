const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const CommentController = require('../controllers/CommentController');

//submit a post
router.post('/submitPost', PostController.uploadPost);

//get a specific post
router.get('/getAllPosts', PostController.getAllPosts);
router.get('/:postID', PostController.getPostById);
router.get('/user/:userID', PostController.getPostsByUser);

router.get('/getUserByPost/:postID', PostController.getUserByPost);
router.get('/getPostCount/:postID', PostController.getPostCount);
router.get('/getPostDate/:postID', PostController.getPostDate);
router.get('/checkFollowState/:userID/:postID', PostController.checkFollowState);



//delete a specific post
router.delete('/:postID', PostController.deletePost);

//update a specific post
router.patch('/:postID', PostController.updatePost);

//submit a comment
router.post('/comment/:postID', CommentController.uploadComment);

//load all comment for a post
router.get('/comment/:postID', CommentController.getCommentsForPost);

//delete a comment
router.delete('/:postID/:commentID', CommentController.deleteComment);

//add a like to post
router.post('/addLike', PostController.addLikeToPost);

module.exports = router;