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
      if (auth?.length === 0)
        return ResponseFailed(res, ResError.EMAIL_INVALID);

      const passwordValid = await bcrypt.compare(password, auth?.[0]?.password);
      if (!passwordValid) return ResponseFailed(res, ResError.PASS_NOT_EXIST);
      const accessToken = jwt.sign(
        { id: auth?.[0]?.id, email: auth?.[0]?.email, phone: auth?.[0]?.phone },
        "secret",
        { expiresIn: "1h" }
      );
      ResponseSuccess(res, accessToken);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  postAccountUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email) return ResponseFailed(res, ResError.EMAIL_INVALID);
    if (!password)
      return ResponseFailed(res, ResError.PASSWORD_INVALID);
    try {
      const account = await Account.findByEmail(email);
      const saltRounds = 10;
      const newPassword = bcrypt.hashSync(password, saltRounds);
      if (account?.length === 0) {
        await Account.create({ ...req?.body, password: newPassword});
        return ResponseSuccess(res);
      } else {
        return ResponseFailed(res, UPDATE_SUCCESS);
      }
    } catch (error) {
      return SystemError(res, error);   
    }
  };
  getAccountUser = async (req, res) => {
    try {
      const list = await Account.findAll();
      return ResponseSuccess(res, list);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getDetailAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const list = await Account.getUserId(id);
      return ResponseSuccess(res, list);
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
      return ResponseFailed(res, ResError.DELETE_SUCCESS);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
}

module.exports = new AccountController();
