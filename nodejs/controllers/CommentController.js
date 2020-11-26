const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');
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

const getAllComments = async (req, res) => {
    try {
        let comments = await Comment.find({}).sort({date: -1});
        let returnComments = [];
        let post = await Post.findById(req.params.postID).lean();

        for (let i = 0; i < Math.min(comments.length, 5); i++) {
            if (post) {
                let user = await User.findById(comments[i].userID);
                let returnComment = {
                    //need postID or not?
                    postID: comments[i].postID,
                    username: user.name,
                    content: comments[i].content,
                    date: new Date(comments[i].date).toISOString().substring(0, 10)
                };
                returnComments.push(returnComment);
            }
        }
        console.log(returnComments);
        res.status(200).json({comments: returnComments});

    } catch (err) {
        res.status(404).json({message: err});
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentID);
        console.log(comment.postID);
        await PostController.removeCommentFromPost(commentID, post._id);
        const removedComment = await Comment.remove({_id: req.params.commentID});
        res.status(200).json(removedComment);
    } catch (err) {
        res.status(404).json({message: err});
    }
};


module.exports = {
    uploadComment, getAllComments, deleteComment
};