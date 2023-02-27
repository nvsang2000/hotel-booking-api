const bcrypt = require("bcrypt");
const ResError = require("../../constant");
var jwt = require("jsonwebtoken");
const {
  ResponseFailed,
  SystemError,
  ResponseSuccess,
} = require("../../constant/response");
const { findByEmail } = require("../../model/accounts");
const Account = require("../../model/accounts");
class AccountController {
  postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const auth = await findByEmail(email);
      if (auth?.length === 0) return ResponseFailed(res, ResError.EMAIL_INVALID);
      auth?.map(async (e) => {
        const passwordValid = await bcrypt.compare(password, e?.password);
        if (!passwordValid) return ResponseFailed(res, ResError.PASS_NOT_EXIST);
        const accessToken = jwt.sign(
          { id: e.id, email: e.email, phone: e.phone },
          "secret",{expiresIn: "1h"});
        ResponseSuccess(res, accessToken);
      });
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  postAccountUser = async (req, res) => {
    const account = req.body;
    if (!account.email) return ResponseFailed(res, ResError.EMAIL_INVALID);
    if (!account.password) return ResponseFailed(res, ResError.PASSWORD_INVALID);
    try {
      const email = await Account.findByEmail(account.email);
      const saltRounds = 10;
      account.password = bcrypt.hashSync(account.password, saltRounds);
      if (email?.length === 0) {
        await Account.create(account);
        return ResponseSuccess(res);
      } else {
        return ResponseFailed(res,UPDATE_SUCCESS);
      }
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getAccountUser = async (req, res) => {
    try {
      const list = await Account.findAll();
      return ResponseSuccess(res,list);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getDetailAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const list = await Account.getUserId(id);
      return ResponseSuccess(res,list);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  putAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    const account = req.body;
    try {
      await Account.update(account, id);
      return ResponseSuccess(res);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  deleteAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      await Account.delete(id);
      return ResponseFailed(res,ResError.DELETE_SUCCESS);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
}

module.exports = new AccountController();
