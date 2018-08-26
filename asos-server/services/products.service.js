const {Product} = require("../db/products");

class ProductsService {

    static getAll() {
        return Product.find({}).exec();
    }

    static findById(id) {
        return Product.findById(id).exec();
    }
}

module.exports = {ProductsService};