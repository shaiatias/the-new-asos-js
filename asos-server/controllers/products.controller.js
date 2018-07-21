
const products = [
    {
      id: 1,
      imageUrl: "assets/item_111.jpg",
      name: "t shirt1",
      price: "25$",
      department: "shirts",
      description: "simple t shirt"
    },
    {
      id: 2,
      imageUrl: "assets/item_111.jpg",
      name: "t shirt2",
      price: "25$",
      department: "shirts",
      description: "simple t shirt"
    },
    {
      id: 3,
      imageUrl: "assets/item_111.jpg",
      name: "t shirt3",
      price: "25$",
      department: "shirts",
      description: "simple t shirt"
    },
    {
      id: 4,
      imageUrl: "assets/item_111.jpg",
      name: "t shirt4",
      price: "25$",
      department: "shirts",
      description: "simple t shirt"
    },
    {
      id: 5,
      imageUrl: "assets/item_111.jpg",
      name: "t shirt5",
      price: "25$",
      department: "shirts",
      description: "simple t shirt"
    }
  ];

class ProductsController {

    static getAll(req, res) {
        res.json(products);
    }

    static getById(req, res) {

        const found = products.filter(item => item.id == req.params.id);

        if (found[0]) {
            res.json(found[0]);
        }

        else {
            res.status(404).json({});
        }
    }

    static getRecommended(req, res) {
        res.json(products);
    }

}


module.exports = { ProductsController };
