const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "enter category name"],
    },
    quantity: {
      type: Number,
      default:0
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categories", categorySchema);
