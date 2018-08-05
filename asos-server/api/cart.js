const { Router } = require("express");
const { check } = require("express-validator/check");

const { rejectInvalidRequest } = require("../middleware/rejectInvalidRequests");
const { CartController } = require("../controllers/cart.controller");
const { authenticatedUser } = require("../middleware/authenticated");

const router = Router();

const validateAddItem = [
    check('product').exists(),
    check('amount').isNumeric().exists(),
];

router.post("/add-item", authenticatedUser(), validateAddItem, rejectInvalidRequest, CartController.addItem);

router.get("/", authenticatedUser(), CartController.getCart);

module.exports = router;