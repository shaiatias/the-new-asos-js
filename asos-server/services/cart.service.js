const { Cart } = require("../db/cart");

class CartService {

    static async getCartByUserId(user) {
        const userCart = await Cart.findOne({ _id: user._id }).exec();

        if (userCart) {
            return userCart;
        }
        else {
            return await Cart.create({ _id: user._id, products: [] }).exec();
        }
    }

    static async addProductToCart(user, product) {

        const userCart = await this.getCartByUserId(user);
        const updatedUserCart = await userCart.findOneAndUpdate(userCart.products, userCart.products.push(product))


        return updatedUserCart;
    }
}

module.exports = { CartService };