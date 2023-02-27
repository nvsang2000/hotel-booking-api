const SystemError = (res, error) => {
  console.log(error);
  res.status(500).json({
    code: "SYS500",
    message: "System Error",
  });
};

const ResponseFailed = (res, message) => {
  console.log(message.message);
  res.status(400).json(message);
};

 const ResponseSuccess = (res, content) =>
  res.status(200).json({
    code: "OK200",
    message: "OK",
    content,
  });


  module.exports = {SystemError,ResponseFailed,ResponseSuccess}
