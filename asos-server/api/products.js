const { Router } = require("express");
const { ProductsController } = require("../controllers/products.controller");
const { rejectInvalidRequest } = require("../middleware/rejectInvalidRequests");
const { authenticatedUser } = require("../middleware/authenticated");

const router = Router();

router.get("/", ProductsController.getAll);

router.get("/recommended", ProductsController.getRecommended);

router.get("/department/:department", ProductsController.getByDepartment);

router.post("/create", ProductsController.create);

router.get("/:id", ProductsController.getById);

module.exports = router;
