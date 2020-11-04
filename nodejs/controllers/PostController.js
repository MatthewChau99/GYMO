const Post = require('../models/Post');
const User = require('../models/User');
const UserController = require('./UserController');

const uploadPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        userID: req.body.userID,
        pictureID: req.body.pictureID,
        likes: req.body.likes,
        likesNum: req.body.likesNum,
        comments: req.body.comments
    });
    try {
        console.log(post);
        console.log(req.body.likesNum);
        const savedPost = await post.save();
        await UserController.addPostToUser(req.body.userID, savedPost._id);
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(404).json({message: "Some error occurred"});
    }
};

const getAllPosts = async (req, res) => {
    try {
        let posts = await Post.find({}).sort({date: -1});
        let returnPosts = [];

        for (let i = 0; i < Math.min(posts.length, 12); i++) {
            let user = await User.findById(posts[i].userID).lean();
            if (user) {
                let returnPost = {
                    title: posts[i].title,
                    content: posts[i].content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                    userID: posts[i].userID,
                    postID: posts[i]._id,
                    userName: user.name,
                    pictureID: posts[i].pictureID,
                    date: new Date(posts[i].date).toISOString().substring(0, 10)
                };
                returnPosts.push(returnPost);
            }
        }
        // console.log(returnPosts);
        res.status(200).json({posts: returnPosts});

    } catch (err) {
        res.status(404).json({message: err});
    }
};

const getPostById = async (req, res) => {
    try {
        let returnPosts = [];
        const post = await Post.findById(req.params.postID);
        returnPosts.push(post);
        console.log(returnPosts);
        res.status(200).json({posts: returnPosts});
    } catch (err) {
        res.status(404).json({message: "Interesting!"});
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

const addCommentToPost = async (commentID, postID) => {
    await Post.findByIdAndUpdate(postID, {
        '$addToSet': {
            'comments': commentID
        }
    });
};
const removeCommentFromPost = async (commentID, postID) => {
    await Post.findByIdAndUpdate(postID, {
        '$pull': {
            'comments': commentID
        }
    });
};

const addLikeToPost = async (req, res) => {
    await Post.findByIdAndUpdate(req.body.postID, {
        '$addToSet': {
            'likes': req.body.userID
        },
        '$inc': {
            likesNum: 1
        }
    });
    res.status(200).send("like added to post");
};

const removeLikeFromPost = async (userID, postID) => {
    await Post.findByIdAndUpdate(postID, {
        '$pull': {
            'likes': userID
        },
        '$inc': {
            likesNum: -1
        }
    });
};

const getPostLikeNum = async(postID) => {
    let post = await Post.findById(postID);
    return post.likesNum;
};


module.exports = {
    uploadPost,
    getPostById,
    getAllPosts,
    deletePost,
    updatePost,
    addCommentToPost,
    removeCommentFromPost,
    addLikeToPost,
    removeLikeFromPost,
    getPostLikeNum
};