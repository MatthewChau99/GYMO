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
        img: {
            data: fs.readFileSync(req.body.filename),
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
            res.status(200).json({
                message: 'Image upload successful',
            });
        }
    });
};

module.exports = {
    storage, upload, getPicById, postPic
};