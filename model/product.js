const connect = require("../db/connectDB");

class product {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM products", function (err, data) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(data);
        }
      });
    });
  };
  findById = (id) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "SELECT * FROM products WHERE id=?",
        [id],
        function (err, data) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(data);
          }
        }
      );
    });
  };
}

module.exports = new product();
