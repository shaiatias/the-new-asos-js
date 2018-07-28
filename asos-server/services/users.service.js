
const bcrypt = require("bcrypt");
const { User } = require("../db/users");

class UsersService {

    static async authenticate(email, password) {

        const user = await User.findOne({ email }).exec();

        // user found
        if (user) {

            // validate password
            const compare = await bcrypt.compare(password, user.password);

            if (compare) {
                return user;
            }

            else {
                return null;
            }
        }

        // user not found
        else {
            return null;
        }

    }

}

module.exports = { UsersService };
