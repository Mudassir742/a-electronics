const Category = require("../models/categoryModel");

exports.addNewCategory = async (req, res) => {
  try {
    //get category info from request
    const {name} = req.body;

    if (!name) {
      return res.status(422).json({ error: "fields are empty", data: null });
    }

    //check if the category already exists
    const isCategoryAlreadyExisted = await Category.find({ name: name });

    //if category  already exists return response with error
    if (isCategoryAlreadyExisted.length !== 0) {
      return res
        .status(422)
        .json({ error: "category already existed", data: null });
    }

    //create a new category and save it in database
    const newCategory = await Category.create({
      name,
    });

    //if user is not saved return response with error
    if (!newCategory) {
      return res
        .status(422)
        .json({ error: "unable to add category", data: null });
    }

    //return the newly added category 
    return res.status(201).json({
      error: null,
      data: newCategory,
    });
  } catch (error) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "Unexpected error occur", data: null });
  }
};
