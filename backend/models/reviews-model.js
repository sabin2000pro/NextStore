const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Please specify the Product ID for this review.']
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please specify the User that this review belongs to']
    },

    name: {
        type: String,
        required: true
      },

    rating: { // The rating
        type: Number,
        required: true
      },

    comment: { // The comment for the review
       type: String,
       required: true
    }


})