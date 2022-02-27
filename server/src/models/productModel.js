const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
      required: [true],
    },
    name: {
      type: String,
      required: [true, "enter product name"],
    },
    price: {
      type: String,
      required: [true, "enter product price"],
    },
    description: {
      type: String,
      required: [true, "enter product description"],
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

module.exports = mongoose.model("products", productSchema);
