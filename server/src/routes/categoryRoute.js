const router = require("express").Router();

const categoryController = require("../controllers/categoryController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

router.post(
  "/addcategory",
  verifyToken,
  verifyRole(["admin"]),
  categoryController.addNewCategory
);
router.delete(
  "/deletecategory/:id",
  verifyToken,
  verifyRole(["admin"]),
  categoryController.deleteCategory
);
router.put(
  "/updatecategory/:id",
  verifyToken,
  verifyRole(["admin"]),
  categoryController.updateCategory
);
router.get(
  "/showcategory/:id",
  verifyToken,
  categoryController.showCategoryById
);
router.get("/showcategory", verifyToken, categoryController.showAllCategory);

module.exports = router;