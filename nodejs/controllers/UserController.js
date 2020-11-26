const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcryptjs');


const addPostToUser = async (userID, postID) => {
    await User.findByIdAndUpdate(userID, {
        $addToSet: {
            posts: postID
        }
    });
};

const deletePostFromUser = async (userID, postID) => {
    const user = await User.findByIdAndUpdate(userID, {
        $pull: {
            posts: postID
        }
    });
    console.log(postID);
    console.log(user);
};

const addFollowerToUser = async (userID, followerID) => {
    await User.findByIdAndUpdate(userID, {
        '$addToSet': {
            'followers': followerID
        }
    });
};

const deleteFollowerFromUser = async (userID, followerID) => {
    await User.findByIdAndUpdate(userID, {
        '$pull': {
            'followers': followerID
        }
    });
};

const addFollowToUser = async (userID, followID) => {
    await User.findByIdAndUpdate(userID, {
        '$addToSet': {
            'follows': followID
        }
    });
};

const deleteFollowFromUser = async (userID, followID) => {
    await User.findByIdAndUpdate(userID, {
        '$pull': {
            'follows': followID
        }
    });
};

const updateUserInfo = async (req, res) => {
    bcrypt.hash(req.body.password, 10, async function (err, hashedPass) {
        if (err) {
            res.json({
                error: err.toString()
            })
        }
        let user = await User.findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                "name": req.body.name,
                "phone": req.body.phone,
            }
        );
        if (user) {
            res.status(200).send({"message": "Update successful!"});
        } else {
            res.status(400).send({"message": "Update unsuccessful!"});
        }
    })
};


const getUserInfo = async (req, res) => {
    try {
        let my_user = await User.findById(req.params.userID);
        res.status(200).json({user: my_user});
    } catch (err) {
        res.status(404).json({message: err});
    }
};

const getFollowers = async(userID, res) => {
    try {
        const user = await User.findById(userID);
        res.status(200).json({followers: user.followers});
    } catch (err) {
        res.status(404).json({message: err});
    }
};


const getFollows = async(userID, res) => {
    try {
        const user = await User.findById(userID);
        res.status(200).json({follows: user.follows});
    } catch (err) {
        res.status(404).json({message: err});
    }
};

module.exports = {
    addPostToUser,
    deletePostFromUser,
    addFollowerToUser,
    deleteFollowerFromUser,
    addFollowToUser,
    deleteFollowFromUser,
    updateUserInfo,
    getUserInfo,
    getFollowers,
    getFollows,
};
