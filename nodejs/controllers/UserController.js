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

const addBodyData = async (req, res) => {
    const weight = req.body.weight;
    const height = req.body.height;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const data = {
        'date': today,
        'data': {
            'weight': weight,
            'height': height
        }
    };

    const user = User.findById(req.body.userID);
    if (user) {
        let bodyData = user.bodyData;
        await User.findByIdAndUpdate(req.body.userID, {
            '$set': {
                'bodyData[today]': data
            }
        });
        res.status(200).send({"message": "Update successful!"});
        // if (today in bodyData) {
        //
        // } else {
        //
        // }
    } else {
        res.status(404).send({"message": "User not found!"});
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
    addBodyData
};
