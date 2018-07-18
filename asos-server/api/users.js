
const { Router } = require("express");
const router = Router();

const { UsersController } = require("../controllers/users.controller");

const authenticatedUser = (opt) => (req, res, next) => {

    if (req && req.session && req.session.user) {
        next();
    }

    else if (opt.redirect) {
        res.redirect(opt.redirectUrl);
    }

    else {
        res.status(401).json({ message: "Unauthorezed" });
    }
};

router.get("/me", authenticatedUser({ redirect: false, redirectUrl: "" }), UsersController.getCurrentUser);

router.post("/logout", UsersController.logout);

module.exports = router;
