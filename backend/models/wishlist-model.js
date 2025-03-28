const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // ensures one wishlist per user
  },


  products: [ // Products inside the Wishlist

    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }

  ]
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
