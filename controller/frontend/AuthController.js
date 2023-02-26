const connect = require("../../db/connectDB");
const Account = require("../../model/accounts");

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
      const account = {
        email: email,
        password: password,
      };
      const newAccount = await Account.create(account);
      if (newAccount) return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  postLogin = async (req, res) => {
    const { email, password } = req?.body;
    if (!email || !password) return res.redirect("/login");
    try {
      const account = await Account.findByEmail(email);
      if(account?.length === 0) {
        return res.render("login", {
          message: "Tài khoản không tồn tại",
          layout: false,
        });
      }
      if (password === account?.[0]?.password) {
        return res.redirect("/");
      } else {
         return res.render("login", {
           message: "Mật khẩu hoặc email không đúng",
           layout: false,
         });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AccountController();
