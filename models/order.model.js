import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productImage: String,
  price: Number,
  quantity: Number,
});

const OrderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    country: String,
    city: String,
    phoneNumber: String,
    companyName: String,
    vatNumber: String,
    cart: [CartItemSchema],
    totalPrice: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
