const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
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
      type: String,
      required: [true, "order amount is missing"],
    },
    ip: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

orderSchema.virtual("items", {
  ref: "orderitems",
  foreignField: "orderId",
  localField: "_id",
});

module.exports = mongoose.model("orders", orderSchema);
