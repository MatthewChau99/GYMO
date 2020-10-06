const Post = require('../models/Post');

const uploadPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
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
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
};

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