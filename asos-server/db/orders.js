const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],

    createdDate: {
        type: mongoose.Schema.Types.Date
    },

    shippingDate: {
        type: mongoose.Schema.Types.Date
    },

    chargeResult: {
        amount: {type: mongoose.Schema.Types.Number},
        chargeDate: {type: mongoose.Schema.Types.Date},
        transactionId: {type: mongoose.Schema.Types.Number}
    },

    totalPrice: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0
    },

});

OrderSchema.pre('save', async function (next) {
    const self = this;

    await self.populate('products').execPopulate();

    self.totalPrice = (self.products || []).reduce((temp, item) => {
        return temp + item.price;
    }, 0);

    next();
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = {Order, OrderSchema};
