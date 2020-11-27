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

const getUserBodyInfo = async (req, res) => {
    const user = await User.findById(req.params.userID).lean();

    const BodyInfoIDs = user.bodyInfo;
    let BodyInfos = [];

    for (let i = 0; i < BodyInfoIDs.length; i++) {
        const bodyInfoID = BodyInfoIDs[i];
        const bodyInfo = await Body.findById(bodyInfoID).lean();
        if (bodyInfo) {
            let returnBodyInfos = {
                userID: bodyInfo.userID,
                date: bodyInfo.date,
                height: bodyInfo.height,
                weight: bodyInfo.weight,
                bmi: bodyInfo.bmi,
                bodyFatPerc: bodyInfo.bodyFatPerc,
            };
            BodyInfos.push(returnBodyInfos);
        }
    }

    console.log(BodyInfos);

    res.status(200).json({data: BodyInfos});
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
    uploadBodyInfo, getUserBodyInfo, deleteBodyInfo
};