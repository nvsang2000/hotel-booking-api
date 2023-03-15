const express = require("express");
const router = express.Router();
const AccountController = require("../../controller/api/accountController");
const CategoryController = require("../../controller/api/categoryController");
const postUpload = require("../../controller/api/uploadController");
const ProductController = require("../../controller/api/productController");
const upload = require("../../middlewares/upload");

router.post("/account", AccountController.postAccountUser);
router.get("/account", AccountController.getAccountUser);
router.get("/account/:id", AccountController.getDetailAccountUser);
router.put("/account/:id", AccountController.putAccountUser);
router.delete("/account/:id", AccountController.deleteAccountUser);

router.post("/category", CategoryController.postCategory);
router.get("/category", CategoryController.getAllCategory);
router.get("/category/:id", CategoryController.getDetailCategory);
router.put("/category/:id", CategoryController.putCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

router.post("/product", ProductController.postProduct);
router.get("/product", ProductController.getProducts);
router.get("/product/:id", ProductController.getProduct);
router.put("/product/:id", ProductController.putProduct);
router.delete("/product/:id", ProductController.deleteProduct);

router.post("/upload", upload.single("image"), postUpload);

module.exports = router;
