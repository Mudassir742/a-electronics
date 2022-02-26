const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
      required: [ture],
    },
    name: {
      type: String,
      required: [ture, "enter product name"],
    },
    price: {
      type: String,
      required: [ture, "enter product price"],
    },
    description: {
      type: String,
      required: [ture, "enter product description"],
    },

    quantity: {
      type: Number,
      required: [true, "enter product quantity"],
    },
    model: {
      type: String,
      required: [ture, "enter model name"],
    },
    image: {
      type: String,
    }
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
