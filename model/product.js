const connect = require("../db/connectDB");

class product {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM products", function (err, data) {
        if (err || data.length == 0) {
          reject(new Error("Không thể lấy dữ liệu"));
        } else {
          resolve(data);
        }
      });
    });
  };
}

module.exports = new product();
