const {Router} = require("express");
const router = Router();

const usersRouter = require("./users");
const productsRouter = require("./products");
const cartRouter = require("./cart");

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);

router.use("*", (req, res, next) => {
    console.log("inside api router");
    next();
});

module.exports = router;
