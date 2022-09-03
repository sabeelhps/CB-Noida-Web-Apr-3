const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');
const User = require('../models/user');



router.get('/user/:userid/cart', isLoggedIn, async(req, res) => {
    try {
        const { userid } = req.params;
        const user = await User.findById(userid);
        const totalAmount = user.cart.reduce((sum, item) => item.price * item.qty + sum, 0);
        res.render('cart/userCart', { cart: user.cart ,totalAmount});
    }
    catch (e) {
        req.flash('error', 'Cannot fetch the item from the cart');
        res.redirect('/products');
    }
})


router.post('/user/:productid/cart',isLoggedIn, async(req, res) => {
    try {
        const { productid } = req.params;
        const user = req.user;

        const isPresent = user.cart.some((item) => item.cartProductId.equals(productid));
        
        if (isPresent) {
            // we just need to increment the quantity of the given product in the cart
            const updatedCart = user.cart.map((item) => item.cartProductId.equals(productid) ? { ...item, qty: item.qty + 1 } : item);
            user.cart = updatedCart;
        } else {
            const product = await Product.findById(productid);

            user.cart.push({
                name: product.name,
                price: product.price,
                img: product.img,
                cartProductId:product._id
            });

        }

        await user.save();

        res.redirect(`/user/${req.user._id}/cart`);
    }
    catch (e) {
        req.flash('error', 'Cannot add the item to the cart');
        res.redirect('/products');
    }
});



module.exports = router;