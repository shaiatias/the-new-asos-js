const { UsersService } = require("../services/users.service")

class UsersController {

    static async getCurrentUser(req, res) {

        const user = req.session.user;

        if (!user) {
            return res.status(401).json({ message: "unauthorized" });
        }

        else {
            return res.json(user);
        }

    }

    static logout(req, res) {

        // remove session in server
        req.session.destroy((err) => {
            if (err) {
                console.error("req.session.destroy failed", err);
            }
        });

        // remove cookie in client
        res.clearCookie("connect.sid");

        // return empty json
        return res.json({});
    }

    static async login(req, res) {

        try {

            // user already logged in
            const existingUser = req.session.user;

            if (existingUser) {
                return res.json(existingUser);
            }

            // get username and password
            const { username, password } = req.body;

            // find user in db
            const user = await UsersService.authenticate(username, password);

            if (!user) {
                return res.status(404).json({ message: "user is not found" })
            }

            else {

                // set session and return
                req.session.user = user;

                return res.json(user);
            }
        }

        catch (e) { // unexpected error
            console.error("unexpected error in login", e);
            return res.status(500).json({ message: "unexpected error" });
        }
    }

}

module.exports = { UsersController };
