const router = require("express").Router();
const productController = require("../controllers/productController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

router.post(
  "/add-product",
  // verifyToken,
  // verifyRole(["admin"]),
  productController.addNewProduct
);
router.put(
  "/update-Product/:id",
  // verifyToken,
  // verifyRole(["admin"]),
  productController.updateProduct
);
router.delete(
  "/delete-product/:id",
  // verifyToken,
  // verifyRole(["admin"]),
  productController.deleteProduct
);
router.get("/show-product/:id", productController.showProductById);
router.get("/show-product/", productController.showAllProduct);

module.exports = router;
