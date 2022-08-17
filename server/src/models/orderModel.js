const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    orderStatus: {
      type: String,
      enum: ["0 pending", "1 placed", "2 packing", "3 dispatched", "4 delivered"],
      default: "0 pending",
    },
    deliveryDate: {
      type: Date,
    },
    paymentType: {
      type: String,
      enum: ["cash", "card"],
      default: "cash",
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
