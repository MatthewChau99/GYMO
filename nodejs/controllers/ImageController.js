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

const getPicById = (req, res, next) => {
    Pic.findById(req.params.picID, function(err, doc) {
        if (err) return next(err);
        res.contentType(doc.img.contentType);
        res.send(doc.img.data.toString('base64'));
    });
};

const postPic = (req, res) => {
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
                imgId: item['_id']
            });
        }
    });
};

function saveToCache(picID) {
    let pic = Pic.findById(picID);
    console.log(pic);
    if (pic) {
        fs.writeFile('cache/' + picID + '.jpg', pic.data.buffer, function(err) {
            if (err) throw err;
            console.log('saved image to cache!');
        })
    } else {
        console.log('no picture');
        return null;
    }
}

module.exports = {
    storage, upload, getPicById, postPic, saveToCache
};