const orderController = require("../controllers/orderController");
const router = require("express")();

router.get("get-order", orderController.getOrders);

module.exports = router;
