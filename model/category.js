const connect = require("../db/connectDB");

class category {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM category", function (err, data) {
        if (err || data.length == 0) {
          reject(new Error("Không thể lấy dữ liệu"));
        } else {
          resolve(data);
        }
      });
    });
  };
}

module.exports = new category()
