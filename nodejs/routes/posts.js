const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const Post = require('../models/Posts');

//get all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({message: err});
    }
});
=======
const PostController = require('../controllers/PostController');
>>>>>>> 03aa0f98538517a223bc31bfc74722ee62cd2efb

//submit a post
router.post('/submitPost', PostController.uploadPost);

//get a specific post
router.get('/getAllPosts', PostController.getAllPosts);
router.get('/:postID', PostController.getPostById);


//delete a specific post
<<<<<<< HEAD
router.delete('/:postID', async (req, res) => {
    try{
         const removedPost = await Post.remove({_id: req.params.postID});
         res.json(removedPost);
    } catch(err) {
        res.json({message:err});
    }
});
=======
router.delete('/:postID', PostController.deletePost);
>>>>>>> 03aa0f98538517a223bc31bfc74722ee62cd2efb

//update a specific post
router.patch('/:postID', PostController.updatePost);

module.exports = router;