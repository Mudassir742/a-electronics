const router = require("express").Router();
const productController = require("../controllers/productController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

router.post(
  "/addproduct",
  verifyToken,
  verifyRole(["admin"]),
  productController.addNewProduct
);
router.put(
  "/updateProduct/:id",
  verifyToken,
  verifyRole(["admin"]),
  productController.updateProduct
);
router.get("/showproduct/:id", productController.showProductById);
router.get("/showproduct/", productController.showAllProduct);

module.exports = router;
