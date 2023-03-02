var connect = require("../db/connectDB");
const Conn = require("../db/Conn");
class Account {
  findAll = () => {
    const sql = "SELECT * FROM account";
    return Conn.GetList(sql, []);
  };
  findByEmail = (email) => {
    const sql = "SELECT * FROM account WHERE email=?";
    return Conn.GetList(sql, [email]);
  };
  create = (account) => {
    const sql = "INSERT INTO account (email, password, phone) values (?, ?, ?)";
    const value = [account.email, account.password, account.phone];
    return Conn.Excute(sql, value);
  };
  getUserId = (id) => {
    const sql = "SELECT id, email, phone FROM account WHERE id=?";
    return Conn.GetOne(sql, [id]);
  };
  update = (account, id) => {
    const sql = "UPDATE account SET? WHERE id=?";
    const value = [account, id];
    return Conn.Excute(sql, value);
  };
  delete = (account, id) => {
    const sql = "DELETE FROM account WHERE id=?";
    const value = [account, id];
    return Conn.Excute(sql, value);
  };
}
module.exports = new Account();
