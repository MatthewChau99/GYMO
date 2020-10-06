const Post = require('../models/Post');
const UserController = require('./UserController');

const uploadPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        userID: req.body.userID
    });
    try {
        const savedPost = await post.save();
        console.log(req.body.userID + "  " + savedPost._id);
        await UserController.addPostToUser(req.body.userID, savedPost._id);
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (err) {
        res.json({message: "No post found!"});
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        console.log(post.userID);
        await UserController.deletePostFromUser(post.userID, post._id);
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
};

// Do we really need update post function?
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postID}, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
};

module.exports = {
    uploadPost, getPost, deletePost, updatePost
};