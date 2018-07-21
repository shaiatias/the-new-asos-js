
const {Router} = require("express");
const router = Router();

const usersRouter = require("./users");
const productsRouter = require("./products");

router.use("*", (req, res, next) => {
    console.log("inside api router");
    next();
});

router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
