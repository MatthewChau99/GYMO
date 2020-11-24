const Body = require('../models/Body');
const User = require('../models/User');
const UserController = require('./UserController');

const uploadBodyinfo = async (req, res) => {
    const bodyinfo = new Body({
        userID: req.body.userID,
        date: req.body.date,
        height: req.body.height,
        weight: req.body.weight,
        bmi: req.body.bmi,
        bodyFatPerc: req.body.bodyFatPerc
    });
    try {
        const savedBodyinfo = await bodyinfo.save();
        await UserController.addBodyinfoToUser(req.body.userID, savedBodyinfo._id);
        res.status(200).json(savedBodyinfo);
    } catch (err) {
        res.status(404).json({message: "Some error occurred"});
    }
};

const getAllBodyinfo = async (req, res) => {
    try {
        let bodyinfos = await Body.find({}).sort({date: -1});
        let returnBodyinfos = [];

        for (let i = 0; i < Math.min(bodyinfos.length, 5); i++) {
            let user = await User.findById(bodyinfo[i].userID).lean();
            if (user) {
                let returnBodyinfos = {
                    userID: bodyinfo[i].userID,
                    date: new Date(comments[i].date).toISOString().substring(0, 10),
                    height: bodyinfo[i].height,
                    weight: bodyinfo[i].weight,
                    bmi: bodyinfo[i].bmi,
                    bodyFatPerc: bodyinfo[i].bodyFatPerc,
                };
                returnBodyinfos.push(returnBodyinfos);
            }
        }
        console.log(returnBodyinfos);
        res.status(200).json({user: returnBodyinfos});

    } catch (err) {
        res.status(404).json({message: err});
    }
};

const deleteBodyinfo = async (req, res) => {
    try {
        const bodyinfo = await Body.findById(req.params.bodyinfoID);
        console.log(bodyinfo.userID);
        await UserController.deleteBodyinfoFromUser(bodyinfo.userID, bodyinfo._id);
        const removedComment = await Comment.remove({_id: req.params.commentID});
        res.status(200).json(removedBodyinfo);
    } catch (err) {
        res.status(404).json({message: err});
    }
};

module.exports = {
    uploadBodyinfo, getAllBodyinfo, deleteBodyinfo
};