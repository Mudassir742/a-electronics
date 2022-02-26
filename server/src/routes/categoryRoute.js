const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.post("/addcategory", categoryController.addNewCategory);
router.delete("/deletecategory/:id", categoryController.deleteCategory);
router.put("/updatecategory/:id", categoryController.updateCategory);

module.exports = router;
