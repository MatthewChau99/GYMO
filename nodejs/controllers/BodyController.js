const Body = require('../models/Body');
const User = require('../models/User');
const UserController = require('./UserController');

const uploadBodyInfo = async (req, res) => {
    const BodyInfo = new Body({
        userID: req.body.userID,
        date: req.body.date,
        height: req.body.height,
        weight: req.body.weight,
        bmi: req.body.bmi,
        bodyFatPerc: req.body.bodyFatPerc
    });
    try {
        const savedBodyInfo = await BodyInfo.save();
        await UserController.addBodyInfoToUser(req.body.userID, savedBodyInfo._id);
        res.status(200).json(savedBodyInfo);
    } catch (err) {
        res.status(404).json({message: "Some error occurred"});
    }
};

const getAllBodyInfo = async (req, res) => {
    try {
        let BodyInfos = await Body.find({}).sort({date: -1});
        let returnBodyInfos = [];

        for (let i = 0; i < Math.min(BodyInfos.length, 5); i++) {
            let user = await User.findById(BodyInfo[i].userID).lean();
            if (user) {
                let returnBodyInfos = {
                    userID: BodyInfo[i].userID,
                    date: new Date(comments[i].date).toISOString().substring(0, 10),
                    height: BodyInfo[i].height,
                    weight: BodyInfo[i].weight,
                    bmi: BodyInfo[i].bmi,
                    bodyFatPerc: BodyInfo[i].bodyFatPerc,
                };
                returnBodyInfos.push(returnBodyInfos);
            }
        }
        console.log(returnBodyInfos);
        res.status(200).json({user: returnBodyInfos});

    } catch (err) {
        res.status(404).json({message: err});
    }
};

const deleteBodyInfo = async (req, res) => {
    try {
        const BodyInfo = await Body.findById(req.params.BodyInfoID);
        console.log(BodyInfo.userID);
        await UserController.deleteBodyInfoFromUser(BodyInfo.userID, BodyInfo._id);
        const removedBodyInfo = await Body.remove({_id: req.params.BodyInfoID});
        res.status(200).json(removedBodyInfo);
    } catch (err) {
        res.status(404).json({message: err});
    }
};

module.exports = {
    uploadBodyInfo, getAllBodyInfo, deleteBodyInfo
};