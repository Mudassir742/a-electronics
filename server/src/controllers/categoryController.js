const Category = require("../models/categoryModel");

exports.addNewCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "bad input" });
    }

    const isCategoryAlreadyExisted = await Category.findOne({ name: name });

    if (isCategoryAlreadyExisted) {
      return res.status(409).json({ error: "category already existed" });
    }

    const newCategory = await Category.create({
      name,
    });

    if (!newCategory) {
      return res.status(422).json({ error: "unable to add category" });
    }

    return res.status(200).json({
      data: newCategory,
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected server error while add category" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    if (!categoryId) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const isCategoryDeleted = await Category.findByIdAndDelete({
      _id: categoryId,
    });

    if (!isCategoryDeleted) {
      return res.status(422).json({
        data: "unable to delete category",
      });
    }

    return res.status(200).json({
      data: "category deleted succesfully",
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected server error while deleting category" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name } = req.body;

    if (!categoryId || !name) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const isCategoryUpdated = await Category.findByIdAndUpdate(
      { _id: categoryId },
      {
        $set: { name: name },
      }
    );

    if (!isCategoryUpdated) {
      return res.status(422).json({
        data: "unable to update category",
      });
    }

    return res.status(200).json({
      data: "category updated succesfully",
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected server error while updating category" });
  }
};

exports.showCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;

    if (!categoryId) {
      return res.status(400).json({
        error: "bad input",
      });
    }

    const category = await Category.findOne({ _id: categoryId });

    if (!category) {
      return res.status(404).json({ error: "no category found" });
    }

    return res.status(200).json({ data: category });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected error server error while getting category" });
  }
};

exports.showAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});

    return res.status(200).json({ data: category });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ error: "Unexpected error server error while getting category" });
  }
};
