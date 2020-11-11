const fs = require('fs');
const path = require('path');
const multer = require('multer');
const Pic = require('../models/Pic');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({storage: storage});

const getPicById = (req, res) => {
    Pic.find({}, (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('app', {items: items});
        }
    });
};

const postPic = (req, res, next) => {
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        filename: req.body.filename,
        img: {
            data: fs.readFileSync(path.join(req.body.filename)),
            contentType: 'image/png'
        }
    };
    Pic.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.status(401).json({
                message: 'Cannot upload image!',
            });
        } else {
            item.save();
            console.log(item._id.valueOf());
            res.status(200).json({
                message: 'Image upload successful',
                avatarID: item._id.valueOf()
            });
        }
    });
};

module.exports = {
    storage, upload, getPicById, postPic
};