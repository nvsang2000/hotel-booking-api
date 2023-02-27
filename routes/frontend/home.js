const express = require('express');
const router = express.Router();
const AuthController = require("../../controller/frontend/AuthController");
const HomeController = require("../../controller/frontend/HomeController");
/* GET home page. */
router.get("/", HomeController.getHome);

router.get("/login", AuthController.getLogin);

router.post("/login", AuthController.postLogin);

router.get("/signup", AuthController.getSignup);

router.post("/signup", AuthController.postSignup);

module.exports = router;
