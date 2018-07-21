
const { Router } = require("express");
const {authenticatedUser } = require("../middleware/authenticated");
const { UsersController } = require("../controllers/users.controller");

const router = Router();

router.get("/me", authenticatedUser(), UsersController.getCurrentUser);

router.post("/logout", UsersController.logout);

module.exports = router;
