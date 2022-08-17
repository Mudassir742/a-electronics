const Order = require("../models/orderModel");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate({ path: "customerId", select: "name" })
      .populate("items");

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
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while getting orders" });
  }
};
