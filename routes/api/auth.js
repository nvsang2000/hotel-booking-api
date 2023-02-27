const express = require("express");
const router = express.Router();
const accountController = require("../../controller/api/accountController");

router.post("/login", accountController.postLogin);

module.exports = router;