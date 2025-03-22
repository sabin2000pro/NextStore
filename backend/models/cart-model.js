const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to your User model
        required: true,
        unique: true // Assuming one cart per user
    },

    items: [cartItemSchema],

    total: {
        type: Number,
        default: 0
    }

}, {
      timestamps: true
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;