const connect  = require("./connectDB");

class Conn {
  // class conn là một mẫu, khuôn chung cho tất cả cái model, để chi
  // để đồng bộ thống nhất phương thức truy vấn  data .
  GetOne = async (sql, value) => {
    // lấy ra một giá trị, với đầu vào là sql và value
    // sql là biến khai báo lúc truyền vào, value có nghia là một where ? một điều kiện khi truy vấn
    return new Promise((resolve, reject) => {
      connect.query(sql, value, (error, results) => {
        return results ? resolve(results[0]) : reject(error);
      });
    });
  };

  GetList = async (sql, value) => {
    return new Promise((resolve, reject) => {
     connect.query(sql, value, (error, results) => {
        return results ? resolve(results) : reject(error);
      });
    });
  };

  Excute = async (sql, value) => {
    return new Promise((resolve, reject) => {
      connect.query(sql, value, (error, results) => {
        return results ? resolve(results) : reject(error);
      });
    });
  };
}

module.exports = new Conn();
