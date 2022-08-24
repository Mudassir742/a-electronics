const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

exports.addNewProduct = async (req, res) => {
  try {
    const { categoryId, name, price, description, quantity, model } = req.body;
    const {image} = req.files
    console.log(image)
    if (!categoryId || !name || !price || !description || !quantity || !model || !image) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      return res.status(404).json({ error: "no category found" });
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
      return res.status(422).json({ error: "unable to add product" });
    }

    return res.status(200).json({ data: newProduct });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while adding product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "bad input" });
    }
    const isProductDeleted = await Product.findByIdAndDelete({
      _id: productId,
    });
    if (!isProductDeleted) {
      return res.status(422).json({ error: "Unable to delete product" });
    }

    const product = await Product.find({}).populate({
      path: "categoryId",
      select: "name _id",
    });

    return res.status(200).json({ data: product, message: "product deleted" });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while deleting product" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const { categoryId, name, price, description, quantity, model } = req.body;
    if (!categoryId || !name || !price || !description || !quantity || !model) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const isProductUpdated = await Product.findByIdAndUpdate(
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

    if (!isProductUpdated) {
      return res.status(422).json({
        error: "Unable to update product",
      });
    }

    return res.status(200).json({ data: "product updated successfully" });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while updating product" });
  }
};

exports.showProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "bad input" });
    }

    const product = await Product.findById({ _id: productId });

    if (!product) {
      return res.status(404).json({ error: "No product found" });
    }

    res.status(200).json({ data: product });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while getting product" });
  }
};

exports.showAllProduct = async (req, res) => {
  try {
    const product = await Product.find({}).populate({
      path: "categoryId",
      select: "name _id",
    });
    res.status(200).json({ data: product });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while updating product" });
  }
};
