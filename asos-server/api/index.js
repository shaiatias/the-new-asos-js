
const {Router} = require("express");
const router = Router();

const usersRouter = require("./users");

router.use("*", (req, res, next) => {
    console.log("inside api router");
    next();
});

router.use("/users", usersRouter);

module.exports = router;
