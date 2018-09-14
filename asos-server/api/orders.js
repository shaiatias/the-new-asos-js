const { Router } = require("express");

const { rejectInvalidRequest } = require("../middleware/rejectInvalidRequests");
const { OrdersController } = require("../controllers/orders.controller");
const { authenticatedUser } = require("../middleware/authenticated");
const { allowRoleOnly } = require("../middleware/allowRole");

const router = Router();

router.get("/my-orders", authenticatedUser(), rejectInvalidRequest, OrdersController.getMyOrders);

router.get("/all-orders", allowRoleOnly("admin"), rejectInvalidRequest, OrdersController.getAllOrders);

router.get("/details/:id", authenticatedUser(), rejectInvalidRequest, OrdersController.getOrderDetails);

module.exports = router;