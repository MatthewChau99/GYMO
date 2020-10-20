const Post = require('../models/Post');
const UserController = require('./UserController');

const uploadPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        userID: req.body.userID
    });
    try {
        const savedPost = await post.save();
        await UserController.addPostToUser(req.body.userID, savedPost._id);
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(404).json({message: "FUCK"});
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: "No post found!"});
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        console.log(post.userID);
        await UserController.deletePostFromUser(post.userID, post._id);
        const removedPost = await Post.remove({_id: req.params.postID});
        res.status(200).json(removedPost);
    } catch (err) {
        res.status(404).json({message: err});
    }
};

// Do we really need update post function?
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postID}, {
            $set: {
                title: req.body.title,
                content: req.body.content
            }
        });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({message: err});
    }
};

module.exports = {
    uploadPost, getPost, deletePost, updatePost
};