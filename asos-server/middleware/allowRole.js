const {authenticatedUser} = require("./authenticated");

const allowRoleOnly = (role) => (req, res, next) => {

    authenticatedUser()(req, res, () => {

        const user = req.session.user;

        if (
            user.roles &&
            user.roles.includes &&
            user.roles.includes(role)
        ) {
            next();
        }

        else {
            res.status(403).json({message: "forbidden"});
        }

    })
};

module.exports = {allowRoleOnly};
