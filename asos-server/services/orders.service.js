
const {Order} = require("../db/orders");

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

        const {name, cardNumber, expireMonth, expireYear, cvv} = payment;
        const {totalPrice: amount} = cart;

        const chargeResult = await this.chargeClient(name, cardNumber, expireMonth, expireYear, cvv, amount);

        return await Order.create({
            user: user._id,
            products: cart.products,
            createdDate: new Date(),
            chargeResult
        });

    }

}

module.exports = {OrdersService};
