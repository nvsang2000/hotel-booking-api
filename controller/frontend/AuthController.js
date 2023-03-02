const connect = require("../../db/connectDB");
const Account = require("../../model/accounts");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class AccountController {
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
      const account = await Account.findByEmail(email);
      const saltRounds = 10;
      const newPassword = bcrypt.hashSync(password, saltRounds);
      if (account?.length === 0) {
        await Account.create({ ...req?.body, password: newPassword });
        return res.redirect("/");
      } else {
        return res.render("signup", {
          message: "Email đã tồn tại",
          layout: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  postLogin = async (req, res) => {
    const { email, password } = req?.body;
    if (!email || !password) return res.redirect("/login");
    try {
      const account = await Account.findByEmail(email);
      if (account?.length === 0) {
        return res.render("login", {
          message: "Tài khoản không tồn tại",
          layout: false,
        });
      }
      const passwordValid = await bcrypt.compare(
        password,
        account?.[0]?.password
      );
      if (!passwordValid)
        return res.render("login", {
          message: "Mật khẩu hoặc email không đúng",
          layout: false,
        });
      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AccountController();
