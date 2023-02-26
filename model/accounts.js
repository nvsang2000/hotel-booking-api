var connect = require("../db/connectDB");
class Account {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM account", function (err, data) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(data);
        }
      });
    });
  };
  findByEmail = (email) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "SELECT * FROM account WHERE email=?",
        [email],
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
  create = (account) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "INSERT INTO account (email, password) values (?, ?)",
        [account.email, account.password],
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
module.exports = new Account();
