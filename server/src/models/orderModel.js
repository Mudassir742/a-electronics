const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    items: {
      type: Array,
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      quantity:{
        type:'String'
      }
    },
    orderStatus: {
      type: String,
      enum: ["pending", "placed", "packing", "shipped", "delivered"],
      default: "pending",
    },
    deliveryDate: {
      type: Date,
    },
    amount: {
      type: "String",
      required: [true, "order amount is missing"],
    },
    ip: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
