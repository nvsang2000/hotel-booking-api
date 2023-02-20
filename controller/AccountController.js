const connect = require("../db/connectDB");
const Account = require("../model/account");
const Category = require("../model/category");
const Product = require("../model/product");
class AccountController {
  getHome = async (req, res) => {
    const category = await Category.findAll()
    const products = await Product.findAll();
    
    return res.render("home/home", {
       title: "Home",
       category: category,
       products: products,
     });
   
  };
  getLayout = async (req, res) => {
    res.render("layout", { title: "Layout" });
  };
  getSignup = async (req, res) => {
    res.render("signup", { title: "Signup", layout: false });
  };
  getLogin = async (req, res) => {
    res.render("login", { title: "Admin hello", layout: false });
  };

  postSignup = async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword)
      return res.render("signup", {
        message: "Vui lòng nhập đầy đủ thông tin!",
        layout: false,
      });
    if (password !== confirmPassword)
      return res.render("signup", {
        message: "Mật khẩu không trùng khớp",
        layout: false,
      });
    try {
      const account = {
        email: email,
        password: password,
      };
      await Account.create(account, (error, result) => {
        if (error) return res.redirect("/signup");
        else {
          return res.redirect("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  postLogin = async (req, res) => {
    const { email, password } = req?.body;
    if (!email || !password) return res.redirect("/login");
    try {
      await Account.findByEmail(email, (error, result) => {
        if (error) return res.redirect("/login");
        else {
          if (password === result?.[0]?.password) {
            return res.redirect("/");
          } else {
            return res.redirect("/login");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AccountController();
