const express = require('express');
const router = express.Router();
const CalorieCalculator = require('../controlllers/CalorieCalculator');

router.post('/calculate', CalorieCalculator.calorieCalculator);

router.post('/upload', CalorieCalculator.uploadFood);

module.exports = router;
