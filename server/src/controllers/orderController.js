const Order = require("../models/orderModel");
const OrderItem = require("../models/orderItemModel");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate({
        path: "customerId",
        select: ["firstName", "lastName", "email"],
      })
      .populate({ path: "items" });

    return res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while getting orders" });
  }
};

exports.addOrder = async (req, res) => {
  try {
    const { amount, customerId, items } = req.body;

    if (!amount || !customerId || !items.length) {
      return res.status(400).json({ error: "bad request" });
    }

    const order = new Order({
      customerId,
      amount,
    });

    const placedOrder = await order.save();

    const orderedItems = items.map((value) => {
      return {
        ...value,
        orderId: placedOrder._id,
        totalPrice: parseInt(value.unitPrice) * parseInt(value.quantity),
      };
    });

    await OrderItem.insertMany(orderedItems);

    return res.status(200).json({ data: "order is placed!" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while getting orders" });
  }
};

exports.getCustomerOrder = async (req, res) => {
  try {
    const { customerId } = req.params;

    if (!customerId) {
      return res.status(400).json({ error: "bad request" });
    }

    const orders = await Order.find({ customerId: customerId })
      .populate({
        path: "customerId",
        select: ["firstName", "lastName", "email"],
      })
      .populate({ path: "items" });

    return res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while placing orders" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({ error: "bad request" });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { _id: orderId },
      { $set: { orderStatus: status } }
    );

    if (!updatedOrder) {
      return res.status(422).json({ error: "unable to update status" });
    }

    const orders = await Order.find({})
      .populate({
        path: "customerId",
        select: ["firstName", "lastName", "email"],
      })
      .populate({ path: "items" });

    return res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while update order status" });
  }
};
