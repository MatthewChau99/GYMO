const Food = require('../models/Food');

const calorieCalculator = async (req, res, next) => {
    let total = 0;
    let foods = req.body;
    for (x in foods) {
        const food = await Food.findOne({name: x}, {
            name: 1,
            caloriesPer100g: 1
        });
        total += foods[x] * food['caloriesPer100g'];
    }
    res.json({
        'message': 'Total calories is ' + total
    });
};

const uploadFood = (req, res, next) => {
    let food = new Food({
        name: req.body.name,
        caloriesPer100g: req.body.caloriesPer100g
    });
    food.save();
    res.send(food);
};

module.exports.calorieCalculator = calorieCalculator;
module.exports.uploadFood = uploadFood;
