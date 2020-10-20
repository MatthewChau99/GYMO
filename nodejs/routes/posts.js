const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

//submit a post
router.post('/submitPost', PostController.uploadPost);

//get a specific post
router.get('/:postID', PostController.getPost);

//delete a specific post
router.delete('/:postID', PostController.deletePost);

//update a specific post
router.patch('/:postID', PostController.updatePost);

module.exports = router;