
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],

    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },

});

CartSchema.pre('save', async function (next) {
    const cart = this;

    await cart.populate('products').execPopulate();

    cart.totalPrice = (cart.products || []).reduce((temp, item) => {
        return temp + item.price;
    }, 0);

    next();
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = { Cart, CartSchema };
