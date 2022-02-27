const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

exports.addNewProduct = async (req, res) => {
  try {
    const { categoryId, name, price, description, quantity, model } = req.body;
    if (!categoryId || !name || !price || !description || !quantity || !model) {
      return res.status(422).json({
        error: "inpt fields are empty",
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

