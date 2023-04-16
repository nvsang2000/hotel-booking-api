const connect = require("../db/connectDB");
const Conn = require("../db/Conn");
class Account {
  // Class account là một model chưa các cái hàm để query dữ liệu
  findAll = () => {
    // lấy ra tất cả user có trong data
    const sql = "SELECT * FROM account";
    // tạo ra một biến query, lấy tất cả trong account
    return Conn.GetList(sql, []);

  };
  findByEmail = (email) => {
    // lấy user theo email
    const sql = "SELECT * FROM account WHERE email=?";
    return Conn.GetList(sql, [email]);
  };
  create = (account) => {
    // tạo mới một user với req.body
    const sql = "INSERT INTO account (email, password, phone) values (?, ?, ?)";
    const value = [account.email, account.password, account.phone];
    return Conn.Excute(sql, value);
  };
  getUserId = (id) => {
    // lấy thông tin của một user theo ID, id thường sẽ nằm trong params của url
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
