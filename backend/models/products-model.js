const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    user: {
      // Optional: the seller who created this product (if applicable)
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    brand: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    
    rating: {
      type: Number,
      default: 0
    },

    numReviews: {
      type: Number,
      default: 0
    },

    price: {
      type: Number,
      required: true
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0
    }
    
  }, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;