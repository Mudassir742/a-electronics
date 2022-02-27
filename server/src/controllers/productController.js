const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const { json } = require("express");

exports.addNewProduct = async (req, res) => {
  try {
    const { categoryId, name, price, description, quantity, model } = req.body;
    if (!categoryId || !name || !price || !description || !quantity || !model) {
      return res.status(422).json({
        error: "input fields are empty",
        data: null,
      });
    }

    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      return res
        .status(422)
        .json({ error: "no category found aganist ID", data: null });
    }

    const newProduct = await Product.create({
      categoryId,
      name,
      price,
      description,
      quantity,
      model,
    });
    if (!newProduct) {
      return res
        .status(422)
        .json({ error: "unable to add product", data: null });
    }

    return res.status(201).json({ error: null, data: newProduct });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected error occur", data: null });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { categoryId, name, price, description, quantity, model } = req.body;
    if (!categoryId || !name || !price || !description || !quantity || !model) {
      return res.status(422).json({
        error: "input fields are empty",
        data: null,
      });
    }

    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      return res
        .status(422)
        .json({ error: "no category found aganist ID", data: null });
    }

    const product = await Product.updateOne(
      { _id: productId },
      {
        $set: {
          name: name,
          categoryId: categoryId,
          price: price,
          description: description,
          quantity: quantity,
          model: model,
        },
      }
    );

    if (product.modifiedCount === 0) {
      return res.status(422).json({
        error: "Unable to update product",
        data: null,
      });
    }

    return res.status(201).json({ error: null, data: product });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected error occur", data: null });
  }
};

exports.showProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(422).json({ error: "Fields are empty", data: null });
    }

    const product = await Product.findById({ _id: productId });
    if (!product) {
      return res
        .status(422)
        .json({ error: "No product found aganist ID", data: null });
    }

    res.status(201).json({ error: null, data: product });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected error occur", data: null });
  }
};

exports.showAllProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    if (!product) {
      return res.status(422).json({ error: "No product found", data: null });
    }

    res.status(201).json({ error: null, data: product });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected error occur", data: null });
  }
};
