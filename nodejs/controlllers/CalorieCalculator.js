const Food = require('../models/Food');

const calorieCalculator = (req, res, next) => {
    let total = 0;
    let foods = req.body;
    var myDocument = Food.findOne({name: "banana"});
    total = myDocument.name;
    /*
    for (x in foods) {
        var myDocument = Food.findOne({name: x});
        if (myDocument){
            let calories = parseInt(myDocument.caloriesPer100g, 10);
            total += foods[x] * calories;
        }
        /*
        Food.findOne({name: x}).then(
            food => {
                if (food) {
                    let calorie = food['caloriesPer100g'];
                    total[0] += foods[x] * calorie;
                }
            }
        )
    }*/
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
// function calculateCalories() {
//     let totalCalories = 0;
//
// }

module.exports.calorieCalculator = calorieCalculator;
module.exports.uploadFood = uploadFood;
