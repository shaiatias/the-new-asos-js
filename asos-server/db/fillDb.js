const {User} = require("./users");
const {Product} = require("./products");
const {Cart} = require("./cart");
const {Order} = require("./orders");

async function fillDb() {

    const users = [
        {
            username: "customer1",
            email: "customer1@asos.com",
            name: "customer 1",
            password: "123456",
            roles: ["customer"]
        },
        {
            username: "seller1",
            email: "seller1@asos.com",
            name: "seller 1",
            password: "123456",
            roles: ["customer", "seller"]
        },
        {
            username: "admin1",
            email: "admin1@asos.com",
            name: "admin 1",
            password: "123456",
            roles: ["customer", "seller", "admin"]
        },
    ];

    const products = [
        {
            imageUrl: "assets/item_111.jpg",
            name: "t shirt1",
            price: 25,
            department: "shirts",
            description: "simple t shirt"
        },
        {
            imageUrl: "assets/item_111.jpg",
            name: "t shirt2",
            price: 25,
            department: "shirts",
            description: "simple t shirt"
        },
        {
            imageUrl: "assets/item_111.jpg",
            name: "t shirt3",
            price: 25,
            department: "shirts",
            description: "simple t shirt"
        },
        {
            imageUrl: "assets/item_111.jpg",
            name: "t shirt4",
            price: 25,
            department: "shirts",
            description: "simple t shirt"
        },
        {
            imageUrl: "assets/item_111.jpg",
            name: "t shirt5",
            price: 25,
            department: "shirts",
            description: "simple t shirt"
        }
    ];

    for (const user of users) {
        await User.create(user).catch(err => console.error(err));
    }

    for (const product of products) {
        await Product.create(product).catch(err => console.error(err));
    }

    const carts = [
        {
            user: (await User.findOne({email: "customer1@asos.com"}).exec())._id,
            products: [
                (await Product.findOne({name: "t shirt1"}).exec())._id,
                (await Product.findOne({name: "t shirt2"}).exec())._id
            ],
            totalPrice: 0
        }
    ];

    for (const cart of carts) {
        await Cart.create(cart).catch(err => console.error(err));
    }

    const orders = [
        {
            user: (await User.findOne({email: "customer1@asos.com"}).exec())._id,
            products: [
                (await Product.findOne({name: "t shirt1"}).exec())._id,
                (await Product.findOne({name: "t shirt2"}).exec())._id
            ],
            chargeResult: {
                amount: 50,
                chargeDate: new Date(),
                transactionId: Math.floor(Math.random() * 100000)
            },
            createdDate: new Date(),
            totalPrice: 50
        }
    ];

    for (const order of orders) {
        await Order.create(order).catch(err => console.error(err));
    }

}

module.exports = {fillDb};