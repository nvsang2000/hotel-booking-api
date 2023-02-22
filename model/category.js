const connect = require("../db/connectDB");

class category {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM category", function (err, data) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(data);
        }
      });
    });
  };
}

module.exports = new category()
