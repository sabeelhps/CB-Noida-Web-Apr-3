const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');



// Show all the products
router.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('products/index',{products});
});

// Display a form to add product
router.get('/product/new', (req, res) => {
    res.render('products/new');
});

// Create a new product
router.post('/products', async (req, res) => {
    const { name, price, desc, img } = req.body;
    await Product.create({ name, price, desc, img });
    res.redirect('/products');
});

// Show a single product
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
    console.log(product);
    res.render('products/show', { product });
});

// edit a product
router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

// Update a single product
router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, desc, img } = req.body;
    await Product.findByIdAndUpdate(id, { name, price, desc, img });
    res.redirect(`/products/${id}`);
});


// Delete a product
router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});


// Create a new review on a product
router.post('/products/:id/review', async(req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const review = new Review({ rating, comment });

    const product = await Product.findById(id);

    // adding a id to the product on which review is added
    product.reviews.push(review);

    await review.save(); //actually saving a review inside our database(reviews collection)
    await product.save() //Saving back the product inside our db(products collection)

    res.redirect(`/products/${id}`);
});

// Delete review is homework


module.exports = router;