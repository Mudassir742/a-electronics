const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/register", userController.addNewUser);
router.post("/login", userController.userLogin);

module.exports = router;
