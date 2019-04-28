const { Product } = require("../db/products");

class ProductsService {
  static getAll() {
    return Product.find({}).exec();
  }

  static findById(id) {
    return Product.findById(id).exec();
  }

  static findByDepartment(department) {
    return Product.find({ department }).exec();
  }

  static create(product) {
    try {
      return Product.create(product);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = { ProductsService };
