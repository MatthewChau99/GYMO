const Body = require('../models/Body');
const User = require('../models/User');
const UserController = require('./UserController');

const uploadBodyInfo = async (req, res) => {
    Body.find({date: req.body.date, userID: req.body.userID}, async function (err, exist) {
        if (err) {
            res.error(err);
        }

        console.log(req.body);

        if (exist.length) {
            try {
                const updatedBodyInfo = await Body.updateOne({date: req.body.date, userID: req.body.userID}, {
                    $set: {
                        height: req.body.height,
                        weight: req.body.weight,
                        bmi: req.body.bmi,
                        bodyFatPerc: req.body.bodyFatPerc
                    }
                });
                res.status(200).json(updatedBodyInfo);
            } catch (err) {
                res.status(404).json({message: "Some error occurred when updating body info"})
            }
        }
        else {
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
                res.status(404).json({message: "Some error occurred when uploading new body info"});
            }
        }
    });
};

const getAllBodyInfo = async (req, res) => {
    try {
        let BodyInfo = await Body.find({}).sort({date: -1});
        let returnBodyInfos = [];

        for (let i = 0; i < Math.min(BodyInfo.length, 5); i++) {
            let user = await User.findById(BodyInfo[i].userID).lean();
            if (user) {
                let returnBodyInfos = {
                    userID: BodyInfo[i].userID,
                    date: BodyInfo[i].date,
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