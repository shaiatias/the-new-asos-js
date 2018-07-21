
const { Router } = require("express");
const { ProductsController } = require("../controllers/products.controller");

const router = Router();

router.get("/", ProductsController.getAll);

router.get("/recommended", ProductsController.getRecommended);

router.get("/:id", ProductsController.getById);


module.exports = router;
