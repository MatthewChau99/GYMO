const express = require('express');
const router = express.Router();
const CalorieCalculator = require('../controllers/CalorieCalculator');

router.post('/calculate', CalorieCalculator.calorieCalculator);

router.post('/upload', CalorieCalculator.uploadFood);

module.exports = router;
