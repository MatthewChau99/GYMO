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

router.post('/addLike', PostController.addLikeToPost);

module.exports = router;