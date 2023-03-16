const connect = require("../db/connectDB");
const Conn = require("../db/Conn");

class product {
  findAll = () => {
    const sql = `SELECT * FROM products `;
    return Conn.GetList(sql, [null]);
  };

  findById = (id) => {
    const sql = `SELECT * FROM products WHERE id=?`;
    return Conn.GetOne(sql, [id]);
  };

  Create = async (basic_info) => {
    const sql = `INSERT INTO products (banner, address, title, price) VALUE (?, ?, ?, ?)`;
    const value = [
      basic_info.banner,
      basic_info.address,
      basic_info.title,
      basic_info.price,
    ];
    return Conn.Excute(sql, value);
  };

  Update = async (basic_info, id) => {
    const sql = `UPDATE products SET? WHERE id = ?`;
    return Conn.Excute(sql, [basic_info, id]);
  };

  Delete = (id) => {
    const sql = "DELETE FROM products WHERE id = ?"
    return Conn.Excute(sql,[id])
  }
  
}

module.exports = new product();
