const orderController = require("../controllers/orderController");
const router = require("express")();

router.get("/get-order", orderController.getOrders);
router.post("/place-order", orderController.addOrder);
router.get("/customer-order/:customerId", orderController.getCustomerOrder);
router.put("/update-order-status/:orderId", orderController.updateOrderStatus);

module.exports = router;
