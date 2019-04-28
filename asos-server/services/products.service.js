const {Product} = require("../db/products");

class ProductsService {

    static getAll() {
        return Product.find({}).exec();
    }

    static findById(id) {
        return Product.findById(id).exec();
    }

    static create(product){
        try{
            return Product.create(product);//.exec();

        }
        catch(Exception ){
            console.error(e);
        }
    }
}

module.exports = {ProductsService};