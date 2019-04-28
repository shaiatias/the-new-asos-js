
const {OrdersService} = require("../services/orders.service");

function isAdmin(user) {
    return user && user.roles && user.roles.includes && user.roles.includes("admin");
}

class OrdersController {

    static async getMyOrders(req, res) {
        const user = req.session.user;
        const orders = await OrdersService.getOrderByUser(user);

        return res.json(orders);
    }

    static async getAllOrders(req, res) {
        const orders = await OrdersService.getOrderByUser();
        return res.json(orders);
    }

    static async getOrderDetails(req, res) {

        const {id} = req.params;
        const {user} = req.session;

        const order = await OrdersService.getFullOrderById(id);

        const iAmTheOwner = order.user.id === user._id;

        if (iAmTheOwner || isAdmin(user)) {
            return res.json(order);
        } 
        
        else {
            return res.status(403).json({ message: "not allowed to access this resource" });
        }
    }
}

module.exports = { OrdersController }
