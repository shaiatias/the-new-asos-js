const { CartService } = require("../services/cart.service")
const { UsersService } = require("../services/users.service")

class CartController {

    static async addItem(req, res) {
        // get request parameters
        const { product, amount } = req.body;
        // const { user } = req.session.user;

        try {

            //find user cart in db and pushing new item to products[]
            const updatedCart = await CartService.addProductToCart(req.session.user, product);

            return res.json(updatedCart);
        }

        catch (e) {
            console.error("unexpected error in addItem", e);
            return res.status(500).json({ message: "unexpected error" });
        }
    }

    static async removeItem(req, res) {
        
        // get request parameters
        const { product, amount } = req.body;

        try {

            //find user cart in db and removing first item to products[]
            const updatedCart = await CartService.removePdtFromCart(req.session.user, product);

            return res.json(updatedCart);
        }

        catch (e) {
            console.error("unexpected error in removeItem", e);
            return res.status(500).json({ message: "unexpected error" });
        }
    }

    static async removeAllItems(req, res){

         // get request parameters
         const { product} = req.body;

         try {
 
             //find user cart in db and removing first item to products[]
             const updatedCart = await CartService.removeAllItems(req.session.user, product);
 
             return res.json(updatedCart);
         }
 
         catch (e) {
             console.error("unexpected error in removeAllItems", e);
             return res.status(500).json({ message: "unexpected error" });
         }
    }

    static async getCart(req, res) {

        const { user } = req.session;

        try {
            const userCart = await CartService.getCartByUserId(user._id);

            await userCart
                .populate("products")
                .execPopulate();

            res.json(userCart);
        }

        catch (e) {
            console.error("unexpected error in addItem", e);
            return res.status(500).json({ message: "unexpected error" });
        }
    }
}


module.exports = { CartController };