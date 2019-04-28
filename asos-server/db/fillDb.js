const { User } = require("./users");
const { Product } = require("./products");
const { Cart } = require("./cart");
const { Order } = require("./orders");

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
		}
	];

	const products = [
		{
			imageUrl: "assets/item_111.jpg",
			name: "ASOS t shirt",
			price: 25,
			department: "shirts",
			description: "simple t shirt"
		},
		{
			imageUrl: "assets/11794135.jpg",
			name: "ASOS DESIGN midi cami slip dress",
			price: 100,
			department: "dress",
			description:
				"ASOS DESIGN midi cami slip dress in high shine with strappy back in tie dye print"
		},
		{
			imageUrl: "assets/11442596.jpg",
			name: "ASOS tye and dye",
			price: 50,
			department: "shirt",
			description: "ASOS tye and dy with strappy back in tie dye print"
		},
		{
			imageUrl: "assets/11342890.jpg",
			name: "ASOS jeans",
			price: 50,
			department: "jeans",
			description: "ASOS slim jeans for women"
		},
		{
			imageUrl: "assets/11102043.jpg",
			name: "ASOS suit for men",
			price: 180,
			department: "suits",
			description: "ASOS blue suit for men"
		},
		{
			imageUrl: "assets/17355.jpg",
			name: "ASOS toxido jimmy",
			price: 200,
			department: "suits",
			description: "ASOS black toxido for men"
		},
		{
			imageUrl: "assets/23152.jpg",
			name: "ASOS suit eddy",
			price: 150,
			department: "suits",
			description: "ASOS blue suit with shirt for men"
		},
		{
			imageUrl: "assets/11474524.jpg",
			name: "PUMA black jacket",
			price: 50,
			department: "footwear",
			description: "PUMA black jacket sportwear for men"
		}
	];

	for (const user of users) {
		const count = await User.count({ username: user.username });
		if (count == 0) {
			await User.create(user).catch(err => console.error(err));
		}
	}

	for (const product of products) {
		const count = await Product.count({ name: product.name });
		if (count == 0) {
			await Product.create(product).catch(err => console.error(err));
		}
	}

	const carts = [
		{
			user: (await User.findOne({ email: "customer1@asos.com" }).exec())
				._id,
			products: [
				(await Product.findOne({ name: "ASOS suit eddy" }).exec())._id,
				(await Product.findOne({ name: "PUMA black jacket" }).exec())
					._id
			],
			totalPrice: 0
		}
	];

	for (const cart of carts) {
		const count = await Cart.count({ user: cart.user });
		if (count == 0) {
			await Cart.create(cart).catch(err => console.error(err));
		}
	}

	const orders = [
		{
			user: (await User.findOne({ email: "customer1@asos.com" }).exec())
				._id,
			products: [
				(await Product.findOne({ name: "ASOS t shirt" }).exec())._id,
				(await Product.findOne({ name: "ASOS toxido jimmy" }).exec())
					._id
			],
			chargeResult: {
				amount: 225,
				chargeDate: new Date(),
				transactionId: Math.floor(Math.random() * 100000)
			},
			createdDate: new Date(),
			totalPrice: 225
		}
	];

	for (const order of orders) {
		await Order.create(order).catch(err => console.error(err));
	}
}

module.exports = { fillDb };
