const express = require("express");
const router = express.Router();
const AccountController = require("../controller/accountController");
const CategoryController = require("../controller/categoryController");
const postUpload = require("../controller/uploadController");
const ProductController = require("../controller/productController");
const upload = require("../middlewares/upload");

router.post("/account", AccountController.postAccountUser);
router.get("/account", AccountController.getAccountUser);
router.get("/account/:id", AccountController.getDetailAccountUser);
router.put("/account/:id", AccountController.putAccountUser);
router.delete("/account/:id", AccountController.deleteAccountUser);
// id là duy nhất, thì nó sẽ được dùng cho viêc lấy dữ liệu không bị trùng với các trường thông tin khác

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
