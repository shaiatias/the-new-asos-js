const { Cart } = require("../db/cart");

class CartService {

    static async getCartByUserId(id) {
        const userCart = await Cart.findOne({ user: id }).exec();

        if (userCart) {
            return userCart;
        }
        else {
            return await Cart.create({ user: id, products: [] });
        }
    }

    static async addProductToCart(user, product) {

        const userCart = await this.getCartByUserId(user._id);
        userCart.products.push(product._id);

        return await userCart.save();
    }
}

module.exports = { CartService };