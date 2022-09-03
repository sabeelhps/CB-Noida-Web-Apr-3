const Joi = require('joi');


module.exports.productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().required(),
    img: Joi.string().uri()
});

module.exports.reviewSchema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required()
});

