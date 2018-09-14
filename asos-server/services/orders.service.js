
const { Order } = require("../db/orders");

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

class OrdersService {

    static async chargeClient(name, cardNum, mm, yyyy, cvv, amount) {

        await sleep(1000);

        return {
            amount,
            chargeDate: new Date(),
            transactionId: Math.floor(Math.random() * 100000)
        }
    }

    static async createOrder(user, cart, payment) {

        const { name, cardNumber, expireMonth, expireYear, cvv } = payment;
        const { totalPrice: amount } = cart;

        const chargeResult = await this.chargeClient(name, cardNumber, expireMonth, expireYear, cvv, amount);

        return await Order.create({
            user: user._id,
            products: cart.products,
            createdDate: new Date(),
            chargeResult
        });
    }

    static async getOrderByUser(user) {

        let conditions = {};

        if (user) {
            conditions = { user: user._id };
        }

        return await Order.find(conditions);
    }

    static async getFullOrderById(id) {

        const order = await Order.findOne({
            _id: id
        });
        await order
            .populate("user")
            .populate("products")
            .execPopulate();

        return order;
    }
}

module.exports = { OrdersService };
