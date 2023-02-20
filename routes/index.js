var express = require('express');
var router = express.Router();
var AccountController = require("../controller/AccountController");

/* GET home page. */
router.get("/", AccountController.getHome);

router.get("/layout", AccountController.getLayout);

router.get("/login", AccountController.getLogin);

router.post("/login", AccountController.postLogin);

router.get("/signup", AccountController.getSignup);

router.post("/signup", AccountController.postSignup);



module.exports = router;
