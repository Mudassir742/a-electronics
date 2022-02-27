const router=require('express').Router();
const productController=require('../controllers/productController')

router.post("/addproduct",productController.addNewProduct);

module.exports = router;
