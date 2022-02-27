const router=require('express').Router();
const productController=require('../controllers/productController')

router.post("/addproduct",productController.addNewProduct);
router.put("/updateProduct/:id",productController.updateProduct);
module.exports = router;
