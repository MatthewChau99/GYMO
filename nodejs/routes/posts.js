const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

//submit a post
router.post('/submitPost', PostController.uploadPost);

//get a specific post
router.get('/getAllPosts', PostController.getAllPosts);
router.get('/:postID', PostController.getPostById);


//delete a specific post
router.delete('/:postID', PostController.deletePost);

//update a specific post
router.patch('/:postID', PostController.updatePost);

//submit a comment
router.post('/:postID/comment',CommentController.uploadComment);
//load all comment for a post
router.get('/:postID/comment',CommentController.getAllComments);
//delete a comment
router.delete('/:postID/:commentID',CommentController.deleteComment);
module.exports = router;