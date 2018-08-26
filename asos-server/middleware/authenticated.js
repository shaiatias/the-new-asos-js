
const authenticatedUser = (opt = {}) => (req, res, next) => {

    if (req && req.session && req.session.user) {
        next();
    }

    else if (opt.redirect) {
        res.redirect(opt.redirectUrl);
    }

    else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { authenticatedUser };
