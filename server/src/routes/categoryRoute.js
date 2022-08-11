const router = require("express").Router();

const categoryController = require("../controllers/categoryController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

router.post(
  "/add-category",
  // verifyToken,
  // verifyRole(["admin"]),
  categoryController.addNewCategory
);
router.delete(
  "/delete-category/:id",
  // verifyToken,
  // verifyRole(["admin"]),
  categoryController.deleteCategory
);
router.put(
  "/update-category/:id",
  // verifyToken,
  // verifyRole(["admin"]),
  categoryController.updateCategory
);
router.get(
  "/show-category/:id",
  // verifyToken,
  categoryController.showCategoryById
);
router.get(
  "/show-category",
  //verifyToken,
  categoryController.showAllCategory
);

module.exports = router;
