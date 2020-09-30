const Food = require('../models/Food');

const calorieCalculator = async (req, res, next) => {
    let total = 1850;
    let foods = req.body;
    for (x in foods) {
        Food.findOne({name: x}).then(
            food => {
                if (food) {
                    let calorie = food['caloriesPer100g'];
                    total += foods[x] * calorie;
                }
            }
        )
    }
    // console.log(totalCalories);
    res.status(200).send("Total calories is " + total);
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
