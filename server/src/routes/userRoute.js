const router = require("express").Router();
const userController = require("../controllers/userController")

router.put("/register",userController.addNewUser)

module.exports = router