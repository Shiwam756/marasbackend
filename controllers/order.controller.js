import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      email,
      country,
      city,
      phoneNumber,
      companyName,
      vatNumber,
      totalPrice,
    } = req.body;

    const cart = [];
    for (let key in req.body) {
      if (key.startsWith("cart[") && key.endsWith("]")) {
        cart.push(JSON.parse(req.body[key]));
      }
    }

    const newOrder = new Order({
      name,
      email,
      country,
      city,
      phoneNumber,
      companyName,
      vatNumber,
      cart,
      totalPrice,
    });

    await newOrder.save();
    console.log("Order placed successfully: ", newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
