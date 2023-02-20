var connect = require("../db/connectDB");
class Account {
  findAll = (result) => {
    connect.query("SELECT * FROM account", function (err, data) {
      if (err || data.length == 0) {
        result(err, null);
      } else {
        result(null, data);
      }
    });
  };
  findByEmail = (email, result) => {
    connect.query(
      "SELECT * FROM account WHERE email=?",
      [email],
      function (err, data) {
        if (err || data.length == 0) {
          result(err, null);
        } else {
          result(null, data);
        }
      }
    );
  };
  create = (account, result) => {
    connect.query(
      "INSERT INTO account (email, password) values (?, ?)",
      [account.email, account.password],
      function (err, data) {
        if (err || data.length == 0) {
          result(err, null);
        } else {
          result(null, data);
        }
      }
    );
  };
}
module.exports = new Account();
