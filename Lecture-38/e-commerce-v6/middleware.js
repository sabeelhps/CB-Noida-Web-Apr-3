const Product = require("./models/product");
const { productSchema,reviewSchema } = require('./schemas');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to login first to do that');
        return res.redirect('/login');
    }
    next();
}

module.exports.isSeller = (req, res, next) => {
    if (req.user.userType === 'seller') {
        return next();
    }
    req.flash('error', 'You dont have permission to do that');
    res.redirect('/products');
}

module.exports.isProductAuthor = async(req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product.author && product.author.equals(req.user._id)) {
        return next();
    }
    req.flash('error', 'You dont have permission to do that');
    res.redirect('/products');
}

module.exports.validateProduct = (req, res, next) => {
    const {name,price,desc,img} = req.body;
    const { error } = productSchema.validate({ name, price, desc, img });
    if (error) {
        const msg = error.details.map((e) => e.message).join(',');
        req.flash('error', msg);
        return res.redirect('/error');
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    const { rating, comment } = req.body;
    const { error } = reviewSchema.validate({ rating, comment });

    if (error) {
        const msg = error.details.map((e) => e.message).join(',');
        req.flash('error', msg);
        return res.redirect('/error');
    }
    next();
}