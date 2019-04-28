const {Cart} = require("../db/cart");

class CartService {

    static async getCartByUserId(id) {
        const userCart = await Cart.findOne({user: id}).exec();

        if (userCart) {
            return userCart;
        }
        else {
            return await Cart.create({user: id, products: []});
        }
    }

    static async addProductToCart(user, product) {

        const userCart = await this.getCartByUserId(user._id);
        userCart.products.push(product._id);

        return await userCart.save();
    }

    static async removePdtFromCart(user, product) {

        const userCart = await this.getCartByUserId(user._id);

        const found = userCart.products.filter(p => p._id.toString() === product._id.toString()) || [];

        if (found[0]) {
            const index = userCart.products.indexOf(found[0]);
            userCart.products.splice(index, 1);

            return await userCart.save();
        }

        return userCart;
    }


    static async removeAllItems(user, product) {

        const userCart = await this.getCartByUserId(user._id);

        const found = userCart.products.filter(p => p._id.toString() === product._id.toString()) || [];

        if (found) {
            found.forEach(item => {
                let index = userCart.products.indexOf(item);
                userCart.products.splice(index, 1);
            });

            return await userCart.save();
        }

        return userCart;
    }

    static async cleanCart(user) {

        const userCart = await this.getCartByUserId(user._id);

        userCart.products = [];

        return await userCart.save();

    }
}

module.exports = {CartService};