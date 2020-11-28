const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
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

        for (let i = 0; i < posts.length; i++) {
            let user = await User.findById(posts[i].userID).lean();
            if (user) {
                let returnPost = {
                    title: posts[i].title,
                    content: posts[i].content,
                    userID: posts[i].userID,
                    postID: posts[i]._id,
                    userName: user.name,
                    pictureID: posts[i].pictureID,
                    date: new Date(posts[i].date).toISOString().substring(0, 10),
                    likes: posts[i].likes
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
        res.status(200).json({posts: returnPosts});
    } catch (err) {
        res.status(404).json({message: "Interesting!"});
    }
};

const getPostDate = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.status(200).json({postDate: post.date});
    } catch (err) {
        res.status(404).json({message: "Interesting!"});
    }
};

const getPostsByUser = async (req, res) => {
    try {
        let posts = await Post.find({}).sort({date: -1});
        let returnPosts = [];
        let user = await User.findById(req.params.userID);
        if (user) {
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].userID == req.params.userID) {
                    let returnPost = {
                        title: posts[i].title,
                        content: posts[i].content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                        userID: posts[i].userID,
                        postID: posts[i]._id,
                        userName: user.name,
                        pictureID: posts[i].pictureID,
                        date: new Date(posts[i].date).toISOString().substring(0, 10),
                        likes: posts[i].likes
                    };
                    returnPosts.push(returnPost);
                }
            }
        }
        res.status(200).json({posts: returnPosts});
    } catch (err) {
        res.status(404).json({message: err});
    }
};

const getUserByPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.postID);
        let user = await User.findById(post.userID);
        res.status(200).json({user: user});
    } catch (err) {
        res.status(404).json({message: err});
    }
};

const getPostCount = async (req, res) => {
    try {
        let post_num = 0;
        let posts = await Post.find({}).sort({date: -1});
        let post = await Post.findById(req.params.postID);
        let user = await User.findById(post.userID);
        if (user) {
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].userID.equals(post.userID)) {
                    post_num += 1;
                }
            }
        }
        res.status(200).json({postCount: post_num});
    } catch (err) {
        res.status(404).json({message: err});
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
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

const getPostLikeNum = async (postID) => {
    let post = await Post.findById(postID);
    return post.likesNum;
};

const checkFollowState = async (req, res) => {
    const post = await Post.findById(req.params.postID);
    const postuser = await User.findById(post.userID);
    const user = await User.findById(req.params.userID);
    const follows = user.follows;
    console.log(follows);
    console.log(postuser._id);
    if (follows.includes(postuser._id)) {
        res.json({follow: 1});
    } else {
        res.json({follow: 0});
    }
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
    getPostLikeNum,
    getPostsByUser,
    getUserByPost,
    getPostCount,
    checkFollowState,
    getPostDate
};