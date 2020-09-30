const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    caloriesPer100g: {
        type: Number,
        required: true
    }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;