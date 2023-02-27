const express = require("express");
const router = express.Router();
const AccountController = require("../../controller/api/accountController");

router.post("/account",AccountController.postAccountUser);
router.get("/account", AccountController.getAccountUser);
router.get("/account/:id", AccountController.getDetailAccountUser);
router.put("/account/:id", AccountController.putAccountUser);
router.delete("/account/:id", AccountController.deleteAccountUser);

module.exports = router;
