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
    // console.log(req.params.picID);
    // const pic = Pic.findById(req.params.picID);
    // if (pic) {
    //     // console.log(pic);
    //     res.contentType('json');
    //     res.status(200).send(pic);
    // } else {
    //     res.status(403).json({message: "Error occurred when getting pic."});
    // }

    Pic.find({}, (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Default', {items: items});
            // res.send(items);

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
<<<<<<< HEAD
                avatarID: item._id.valueOf()
=======
>>>>>>> frontend-ran
            });
        }
    });
};

module.exports = {
    storage, upload, getPicById, postPic
};