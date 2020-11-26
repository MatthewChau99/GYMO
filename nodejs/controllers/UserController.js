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

const addFollowToUser = async (userID, followID) => {
    await User.findByIdAndUpdate(userID, {
        '$addToSet': {
            'follows': followID
        }
    });
};

const follow = async (req, res) => {
    try {
        await addFollowToUser(req.body.userID, req.body.followID);
        await addFollowerToUser(req.body.followID, req.body.userID);
        res.status(200).json({
            message: "follow successful"
        })
    } catch (e) {
        console.error(e);
    }
};


const deleteFollowerFromUser = async (userID, followerID) => {
    await User.findByIdAndUpdate(userID, {
        '$pull': {
            'followers': followerID
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

const unfollow = async (req, res) => {
    try {
        await deleteFollowFromUser(req.body.userID, req.body.followID);
        await deleteFollowerFromUser(req.body.followID, req.body.userID);
        res.status(200).json({
            message: "unfollow successful"
        })
    } catch (e) {
        console.error(e);
    }
};

const checkFollowState = async (req, res) => {
    const user = await User.findById(req.params.userID);
    const follows = user.follows;
    if (follows.includes(req.params.followID)) {
        res.json({follow: 1});
    } else {
        res.json({follow: 0});
    }
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

<<<<<<< HEAD
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
=======
const addBodyInfoToUser = async (userID, BodyInfoID) => {
    await User.findByIdAndUpdate(userID, {
        $addToSet: {
            bodyInfo: BodyInfoID
        }
    });
};

const deleteBodyInfoFromUser = async (userID, BodyInfoID) => {
    const user = await User.findByIdAndUpdate(userID, {
        $pull: {
            bodyInfo: BodyInfoID
        }
    });
    console.log(BodyInfoID);
    console.log(user);
>>>>>>> 7ef8ca92d68c4e06e7880cc33c290ac7b57b3268
};

module.exports = {
    addPostToUser,
    deletePostFromUser,
    updateUserInfo,
    getUserInfo,
<<<<<<< HEAD
    getFollowers,
    getFollows,
=======
    addBodyInfoToUser,
    deleteBodyInfoFromUser,
    follow,
    unfollow,
    checkFollowState
>>>>>>> 7ef8ca92d68c4e06e7880cc33c290ac7b57b3268
};
