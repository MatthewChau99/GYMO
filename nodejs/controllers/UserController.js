const User = require('../models/User');
const Post = require('../models/Post');

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
    const user = await User.findByIdAndUpdate(userID, {
        '$pull': {
            'follows': followID
        }
    });

};

const updateUserInfo = async (email, name, phone, password) => {
    const user = await User.findAndModify({
        query: {
            email: email
        },
        update: {
            name: name,
            phone: phone,
            password: password
        }
    })
};


module.exports = {
    addPostToUser, deletePostFromUser, addFollowerToUser, deleteFollowerFromUser, addFollowToUser, deleteFollowFromUser
};
