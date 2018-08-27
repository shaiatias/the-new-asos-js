const {ProductsService} = require("../services/products.service")

class ProductsController {

    static async getAll(req, res) {
        const products = await ProductsService.getAll();
        res.json(products);
    }

    static async getById(req, res) {

        const found = await ProductsService.findById(req.params.id);

        if (found) {
            res.json(found);
        }

        else {
            res.status(404).json({});
        }
    }

    static async getRecommended(req, res) {
        const products = await ProductsService.getAll();
        res.json(products);
    }

    static async create(req, res){
        const product = req.body.product;
        const productAdded = await ProductsService.create(product);

        if (productAdded) {
            res.json(productAdded);
        }

        else {
            res.status(404).json({});
        }
    }

}


module.exports = {ProductsController};

// const products = [
//     {
//       id: 1,
//       imageUrl: "assets/item_111.jpg",
//       name: "t shirt1",
//       price: "25$",
//       department: "shirts",
//       description: "simple t shirt"
//     },
//     {
//       id: 2,
//       imageUrl: "assets/item_111.jpg",
//       name: "t shirt2",
//       price: "25$",
//       department: "shirts",
//       description: "simple t shirt"
//     },
//     {
//       id: 3,
//       imageUrl: "assets/item_111.jpg",
//       name: "t shirt3",
//       price: "25$",
//       department: "shirts",
//       description: "simple t shirt"
//     },
//     {
//       id: 4,
//       imageUrl: "assets/item_111.jpg",
//       name: "t shirt4",
//       price: "25$",
//       department: "shirts",
//       description: "simple t shirt"
//     },
//     {
//       id: 5,
//       imageUrl: "assets/item_111.jpg",
//       name: "t shirt5",
//       price: "25$",
//       department: "shirts",
//       description: "simple t shirt"
//     }
//   ];