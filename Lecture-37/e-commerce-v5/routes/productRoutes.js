const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn,isSeller, isProductAuthor,validateProduct, validateReview} = require('../middleware');



// Show all the products
router.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('products/index',{products});
});

// Display a form to add product
router.get('/product/new',isLoggedIn,isSeller, (req, res) => {
    res.render('products/new');
});

// Create a new product
router.post('/products',isLoggedIn,isSeller,validateProduct, async (req, res) => {
    const author = req.user._id;
    const { name, price, desc, img} = req.body;
    await Product.create({ name, price, desc, img ,author});
    req.flash('success', 'Product created successfully!');
    res.redirect('/products');
});

// Show a single product
router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product }); 
    }
    catch (e) {
        req.flash('error','cannot show the product at the moment')
        res.redirect('/products');
    }
});

// edit a product
router.get('/products/:id/edit',isLoggedIn,isSeller,isProductAuthor, async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

// Update a single product
router.patch('/products/:id',isLoggedIn,isSeller,isProductAuthor, async (req, res) => {
    const { id } = req.params;
    const { name, price, desc, img } = req.body;
    await Product.findByIdAndUpdate(id, { name, price, desc, img });
    res.redirect(`/products/${id}`);
});


// Delete a product
router.delete('/products/:id',isLoggedIn,isSeller,isProductAuthor, async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});


// Create a new review on a product
router.post('/products/:id/review',isLoggedIn,validateReview, async(req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const review = new Review({ rating, comment });

    const product = await Product.findById(id);

    // adding a id to the product on which review is added
    product.reviews.push(review);

    await review.save(); //actually saving a review inside our database(reviews collection)
    await product.save() //Saving back the product inside our db(products collection)

    req.flash('success', 'Created your review successfully');
    res.redirect(`/products/${id}`);
});

// Delete review is homework


module.exports = router;