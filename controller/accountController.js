const bcrypt = require("bcrypt");
const ResError = require("../constant");
const jwt = require("jsonwebtoken");
const {
  ResponseFailed,
  SystemError,
  ResponseSuccess,
} = require("../constant/response");
const { findByEmail } = require("../model/accounts");
const Account = require("../model/accounts");
class AccountController {
  postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const auth = await findByEmail(email);
      if (auth?.length === 0)
        return ResponseFailed(res, ResError.EMAIL_ERR);
      const passwordValid = await bcrypt.compare(password, auth?.[0]?.password);
      // tạo môt biến check password đã được mã hóa vói pass chưa mã hóa bằng compare.
      // nếu mã nó check pass mà khớp thì nó trả về kiểu dữ liệu là true or false.
      if (!passwordValid) return ResponseFailed(res, ResError.PASS_NOT_EXIST);
      // nếu false thì trả về res lỗi
      const accessToken = jwt.sign(
        { id: auth?.[0]?.id, email: auth?.[0]?.email, phone: auth?.[0]?.phone },
        "secret",
        { expiresIn: "1h" }
      );
      // tạo ra một cái token , để xác nhận người dùng
      ResponseSuccess(res, accessToken);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  postAccountUser = async (req, res) => {
    //async await là bất đồng bộ, nó sẽ đợi cái request được sử lí thành công
    const { password, email } = req.body;
    // req.body nó là cái dữ liệu mà người dùng nhập vào, phải được đống bộ với đầu vào và đầu ra
    // phải khớp với giá trụ input và output

    if (!email) return ResponseFailed(res, ResError.EMAIL_INVALID);
    //check mail có tồn tại hay không, nếu không trả về một thông báo lỗi, ở đây mìn đang
    // sử dụng một mẫu thông báo chung cho tất cả 'ResponseFailed' nó nhận 2 cái input res và mẫu thong báo
    if (!password) return ResponseFailed(res, ResError.PASSWORD_INVALID);
    try {
      //trong trycat thì nó sẽ bắn ra lỗi khi bên trong try có bất kì lỗi phát sinh
      const account = await Account.findByEmail(email);
      //tạo ra một cái biến account cho cái giá trị trả về khi cái model Acount thực hiện query data.
      // Account là một model có các phương thức truy vấn  data, hàm findByEmail để lấy ra account với mail đó
      if (account?.length === 0) {
        // check cái user, nó tìm thấy user với email trong req.body
        // nếu ko thì được tạo mới
        const saltRounds = 10;
        // tạo ra một biến mã hóa, với số kí tự là 10
        const newPassword = bcrypt.hashSync(password, saltRounds);
        // tạo một cái biến password mới đã được mã hóa bằng hàm hash của thư viện mã hóa, 
        // nó sẽ nhận vô 2 cái params là pass với số kí tự mã hóa
        await Account.create({ ...req?.body, password: newPassword });
        // await nó sẽ đợi cho cái hàm tạo mới "create" bên trong model của account.
        // req?.body có nghia là nó sẽ lấy hết tất cả giá trị có trong body, và thay thế giá trị 
        // pass đã được mã hóa
        return ResponseSuccess(res);
      } else {
        // nếu có thì trả về thông báo là email đã tồn tại rồi. sẽ ko tạo đc nữa
        return ResponseFailed(res, ResError.EMAIL_EXIST);
      }
    } catch (error) {
      return SystemError(res, error);
    }
  };

  getAccountUser = async (req, res) => {
    // lấy data
    try {
      const list = await Account.findAll();
      return ResponseSuccess(res, list);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getDetailAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    // lấy ra cái params id
    try {
      const list = await Account.getUserId(id);
      return ResponseSuccess(res, list);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  putAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    // lấy id trong param
    const account = req.body;
    // lấy ra thông tin cần cập nhâp bên trong body
    try {
      await Account.update(account, id);
      return ResponseSuccess(res);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  
  // b1 tạo các cái hàm trong controller
  // b2 là xử lí thông tin đầu vào
  // b3 kiểm tra thông tin , kiểm tra null hoặc kiểm tra kiểu dữ liệu
  // b4 truy xuất dữ liệu thông qua các cái phương thức có trong model.
  // b5 trả về respone thông báo thành công hay hẫy lỗi gặp phải.
  deleteAccountUser = async (req, res) => {
    const id = Number(req.params.id);
    try {
      await Account.delete(id);
      return ResponseSuccess(res, ResError.DELETE_SUCCESS);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
}

module.exports = new AccountController();
