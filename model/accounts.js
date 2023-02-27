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
        "INSERT INTO account (email, password, phone) values (?, ?, ?)",
        [account.email, account.password, account.phone],
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
  getUserId = (id) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "SELECT id, email, phone FROM account WHERE id=?",
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
  update = (account, id) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "UPDATE account SET? WHERE id=?",
        [account, id],
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
  delete = (account, id) => {
    return new Promise((resolve, reject) => {
      connect.query(
        "DELETE FROM account WHERE id=?",
        [account, id],
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
