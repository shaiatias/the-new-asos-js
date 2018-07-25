
const { Router } = require("express");
const { check } = require('express-validator/check');

const { authenticatedUser } = require("../middleware/authenticated");
const { rejectInvalidRequest } = require("../middleware/rejectInvalidRequests");

const { UsersController } = require("../controllers/users.controller");

const router = Router();

router.get("/me", authenticatedUser(), UsersController.getCurrentUser);

router.post("/logout", UsersController.logout);

const validateLogin = [
    check('username').isLength({ min: 5, max: 30 }).isAlphanumeric().exists(),
    check('password').isLength({ min: 5, max: 30 }).isAscii().exists()
];

router.post("/login", validateLogin, rejectInvalidRequest, UsersController.login);

module.exports = router;
