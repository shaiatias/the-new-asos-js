
class UsersController {

    static async getCurrentUser(req, res) {
        
        const result = await Promise.resolve({
            name: "shai"
        });

        if (result === null) {
            res.sendStatus(401);
        }

        else {
            res.json(result);
        }

    }

    static logout(req, res) {
        
        req.session.destroy((err) => {
            console.error("logout failed", err);
        });

        res.json({});
    }

}

module.exports = { UsersController };
