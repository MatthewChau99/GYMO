const express = require('express');
const router = express.Router();
const PicController = require('../controllers/ImageController');

//get a picpost
router.get('/:PicID', PicController.getPicById);

//submit a picpost
router.post('/postPic', PicController.upload.single('image'), PicController.postPic);

//delete a specific post
//router.delete('/:picID', PicController.deletePic);


module.exports = router;