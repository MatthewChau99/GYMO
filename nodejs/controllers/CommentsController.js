const Post = require('../models/Post');
const Comment = require('../models/Comment');
const PostController = require('./PostController');

const uploadComment = async (req, res) => {
    const comment = new Comment({
        postID: req.body.postID,
        content: req.body.content,
        date: req.body.date,
        userID: req.body.userID
    });
    try {
        const savedComment = await comment.save();
        await PostController.addCommentToPost(savedComment._id, req.body.postID);
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(404).json({message: "Some error occurred"});
    }
};