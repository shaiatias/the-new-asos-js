
const bcrypt = require("bcrypt");
const { User } = require("../db/users");

class UsersService {

    static async authenticate(username, password) {

        const user = await User.findOne({ username }).exec();

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

    static async createUser(user, roles = ["customer"]) {
        
        const u = new User({
            ...user,
            roles: roles
        });

        return u.save();
    }

    static async usernameIsAvailable(username) {
        
        const found = await User.findOne({ username });
        return !found;
    }

    static async emailIsAvailable(email) {

        const found = await User.findOne({ email });
        return !found;
    }

}

module.exports = { UsersService };
