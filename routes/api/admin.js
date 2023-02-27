const express = require("express");
const router = express.Router();
const AccountController = require("../../controller/api/accountController");

router.post("/admin/account",AccountController.postAccountUser);
router.get("/admin/account", AccountController.getAccountUser);
router.get("/admin/account/:id", AccountController.getDetailAccountUser);
router.put("/admin/account/:id", AccountController.putAccountUser);
router.delete("/admin/account/:id", AccountController.deleteAccountUser);

module.exports = router;
