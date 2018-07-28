
const { Router } = require("express");
const { check } = require('express-validator/check');

const { authenticatedUser } = require("../middleware/authenticated");
const { rejectInvalidRequest } = require("../middleware/rejectInvalidRequests");

const { UsersController } = require("../controllers/users.controller");

const router = Router();

router.get("/me", authenticatedUser(), UsersController.getCurrentUser);

router.post("/logout", UsersController.logout);

const validateLogin = [
    check('username').isLength({ min: 4, max: 30 }).isAlphanumeric().exists(),
    check('password').isLength({ min: 5, max: 30 }).isAscii().exists()
];

router.post("/login", validateLogin, rejectInvalidRequest, UsersController.login);

const validateRegister = [
    check('username').isLength({ min: 4, max: 30 }).isAlphanumeric().exists(),
    check('name').isLength({ min: 2, max: 30 }).isAscii().exists(),
    check('email').isLength({ min: 2, max: 30 }).isAscii().exists(),
    check('password').isLength({ min: 5, max: 30 }).isAscii().exists(),
    check('passwordConfirm').isLength({ min: 5, max: 30 }).isAscii().exists(),
];

router.post("/register", validateRegister, rejectInvalidRequest, UsersController.register);

module.exports = router;
