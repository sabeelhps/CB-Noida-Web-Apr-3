const Food = require('../models/Food');
const Order = require('../models/Order');

const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find({});
        res.status(200).json(foods);
    }
    catch (e) {
        res.status(500).json({ message: 'something went wrong while fetching foods' });
    }
}

const placeOrderFromCart = async (req, res) => {
    try {
        const { cart } = req.body;
        const order = await Order.create({ cart });
        res.status(201).json({
            message: "created your order successfully",
            orderId: order._id
        });
    }
    catch (e) {
        res.status(500).json({ message: 'something went wrong while fetching foods' });
    }
}

const foodController = {
    getAllFood,
    placeOrderFromCart
}

module.exports = foodController;