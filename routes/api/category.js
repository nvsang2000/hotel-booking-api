const express = require("express");
const router = express.Router();
const CategoryController = require("../../controller/api/categoryController");


router.post("",CategoryController.postCategory);
router.get("",CategoryController.getAllCategory);
router.get("/:id",CategoryController.getDetailCategory);
router.put("/:id",CategoryController.putCategory);
router.delete("/:id",CategoryController.deleteCategory)
module.exports = router;
