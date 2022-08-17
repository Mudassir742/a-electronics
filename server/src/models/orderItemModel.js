const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
      required: [true],
    },
    name: {
      type: String,
      required: [true, "enter product name"],
    },
    description: {
      type: String,
      required: [true, "enter product description"],
    },
    unitPrice: {
      type: Number,
      required: [true, "enter product price"],
    },
    totalPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: [true, "enter product quantity"],
    },
    model: {
      type: String,
      required: [true, "enter model name"],
    },
    image: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orderItems", orderItemSchema);
