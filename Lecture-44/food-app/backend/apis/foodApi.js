const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const Order = require('../models/Order');
const foodController = require('../controllers/foodController');


router.get('/allfoods', foodController.getAllFood);

router.post('/placeOrder', foodController.placeOrderFromCart);


module.exports = router;