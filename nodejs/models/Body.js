const mongoose = require('mongoose');

const BodySchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: String,
        default: new Date(Date.now()).toISOString().substring(0, 10)
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    bodyFatPerc: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Body', BodySchema);