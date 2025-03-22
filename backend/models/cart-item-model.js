const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
 product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

  quantity: {
    type: Number,
    default: 1,
    required: true
  },

  price: {
    type: Number,
    required: true
  }
})

const CartItem = mongoose.model("CartItem", CartItemSchema);
module.exports = CartItem