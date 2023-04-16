// mẫu response chung cho tất cả các api
const SystemError = (res, error) => {
  // lỗi của hệ thống
  console.log(error);
  res.status(500).json({
    code: "SYS500",
    message: "System Error",
  });
};

const ResponseFailed = (res, message) => {
  // lỗi của người dùng
  console.log(message.message);
  res.status(400).json(message);
};

 const ResponseSuccess = (res, content) =>
  res.status(200).json({
    code: "OK200",
    message: "OK",
    content,
  });
// thông báo thành công


  module.exports = {SystemError,ResponseFailed,ResponseSuccess}
