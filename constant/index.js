const ResError = {
  SYS_ERROR: { message: "Lỗi server" },
  EMAIL_INVALID: { code: "400", message: "Email không thể để trống" },
  EMAIL_EXIST: { code: "400", message: "Email đã tồn tại" },
  PASSWORD_INVALID: { code: "400", message: "Mật khẩu không thể để trống" },
  ACCOUNT_SUCCESS: { code: "200", message: "Tạo tài khoản thành công" },
  DELETE_SUCCESS: { code: "200", message: "Xóa thành công" },
  UPDATE_SUCCESS: { code: "200", message: "Cập nhật thành công" },
};

module.exports = ResError;
