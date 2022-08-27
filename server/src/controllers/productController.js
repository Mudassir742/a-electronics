const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const {
  uploadImage,
  isURL,
  deleteCloudImage,
} = require("../lib/cloudinaryImageUpload");

exports.addNewProduct = async (req, res) => {
  try {
    const { categoryId, name, price, description, quantity, model, image } =
      req.body;

    if (
      !categoryId ||
      !name ||
      !price ||
      !description ||
      !quantity ||
      !model ||
      !image.length
    ) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      return res.status(404).json({ error: "no category found" });
    }
    let images = [];
    for (let i = 0; i < image.length; i++) {
      images.push(await uploadImage(image[i]));
    }

    const newProduct = await Product.create({
      categoryId,
      name,
      price,
      description,
      quantity,
      model,
      image: images,
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

    const { categoryId, name, price, description, quantity, model, image } =
      req.body;
    if (
      !categoryId ||
      !name ||
      !price ||
      !description ||
      !quantity ||
      !model ||
      !image
    ) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const { imageURL } = await uploadImage(image);

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
          image: imageURL,
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

exports.deleteProductImage = async (req, res) => {
  try {
    const { imagePublicId } = req.body;

    if (!imagePublicId) {
      return res.status(400).json({ error: "bad input" });
    }

    const deleteResponse = await deleteCloudImage(imagePublicId);

    if (deleteResponse.result === "not found") {
      return res.status(404).json({ data: "Image not found!" });
    }
    return res.status(201).json({ data: "Image deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Unexpected server error while deleting product image" });
  }
};
