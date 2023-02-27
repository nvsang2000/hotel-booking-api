const bcrypt = require("bcrypt");
const Account = require("../../model/accounts");

class AccountController {
  postAccountUser = async (req, res) => {
    const account = req.body;
    if (!account.email)
      return res.json({ status: 400, message: "Email không thể để trống" });
    if (!account.password)
      return res.json({ status: 400, message: "Password không thể để trống" });
    try {
      const email = await Account.findByEmail(account.email);
      const saltRounds = 10;
      account.password = bcrypt.hashSync(account.password, saltRounds);
      if (email?.length === 0) {
        await Account.create(account);
        return res.json({ status: 200, message: "Tạo tài khoản thành công" });
      } else {
        return res.json({ status: 400, message: "Email đã tồn tại" });
      }
    } catch (error) {
      return res.json({ status: 500, message: `Lỗi server ${error}` });
    }
  };
  getAccountUser = async (req, res) => {
    try {
      const list = await Account.findAll();
      return res.json({ status: 200, data: list });
    } catch (error) {
      return res.json({ status: 500, message: `Lỗi server ${error}` });
    }
  };
  getDetailAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const list = await Account.getUserId(id);
      return res.json({ status: 200, data: list });
    } catch (error) {
      return res.json({ status: 500, message: `Lỗi server ${error}` });
    }
  };
  putAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    const account = req.body;
    try {
      await Account.update(account, id);
      return res.json({ status: 200, message: "Cập nhật thành công" });
    } catch (error) {
      return res.json({ status: 500, message: `Lỗi server ${error}` });
    }
  };
  deleteAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      await Account.delete(id);
      return res.json({ status: 200, message: "Xóa thành công" });
    } catch (error) {
      return res.json({ status: 500, message: `Lỗi server ${error}` });
    }
  };
}

module.exports = new AccountController();
