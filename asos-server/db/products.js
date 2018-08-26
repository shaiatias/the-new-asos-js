const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        // ref: 'Department', //create Department table and interface
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product, ProductSchema};