const express = require("express");
const router = express.Router();
const AccountController = require("../../controller/api/accountController");

router.post("/login", AccountController.postLogin);
router.post("/signup",AccountController.postAccountUser);
module.exports = router;