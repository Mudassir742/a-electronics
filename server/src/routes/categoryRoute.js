const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.post("/addcategory", categoryController.addNewCategory);
module.exports = router;
