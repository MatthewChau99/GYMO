const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
        {
            data: Buffer,
            contentType: String
        },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = new mongoose.model('Image', imageSchema);
